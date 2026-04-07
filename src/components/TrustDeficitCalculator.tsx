'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ArrowRight, X, Eye, Globe, Smartphone, Camera, Star } from 'lucide-react';

type UIState = 'SEARCH' | 'LOADING_SEARCH' | 'GATE' | 'LOADING_GATE' | 'DIAGNOSING' | 'REVEAL';

export default function TrustDeficitCalculator() {
  const [uiState, setUiState] = useState<UIState>('SEARCH');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const [placeData, setPlaceData] = useState<{
    rating: number;
    user_ratings_total: number;
    photoCount: number;
  } | null>(null);

  const [speedScore, setSpeedScore] = useState<number | null>(null);
  const [isSpeedLoading, setIsSpeedLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const BENCHMARK = 80;
  const deficit = placeData ? BENCHMARK - placeData.user_ratings_total : 0;
  const reputationFail = deficit > 0;
  const imageFail = Boolean(placeData && placeData.photoCount < 10);
  const speedFail = speedScore !== null && speedScore < 90;
  const failCount = [reputationFail, imageFail, speedFail].filter(Boolean).length;
  const hasFailingFactor = failCount > 0;

  const runSpeedTest = async () => {
    if (!websiteUrl) {
      setSpeedScore(0);
      setUiState('REVEAL');
      return;
    }
    
    setIsSpeedLoading(true);
    setUiState('DIAGNOSING');
    setProgress(0);
    
    // Asymptotic progress bar simulation (never truly stalls)
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + (98 - prev) * 0.04, 98));
    }, 600);

    try {
      const formattedUrl = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;
      const res = await fetch('/api/speed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ websiteUrl: formattedUrl }),
      });
      const data = await res.json();
      
      clearInterval(interval);
      setProgress(100);
      
      if (res.ok && data.score !== undefined) {
        setSpeedScore(data.score);
      } else {
        setSpeedScore(-1);
      }
      
      // Brief pause at 100% for satisfaction before reveal
      setTimeout(() => setUiState('REVEAL'), 800);
    } catch (err) {
      clearInterval(interval);
      setSpeedScore(-1);
      setUiState('REVEAL');
    } finally {
      setIsSpeedLoading(false);
    }
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!businessName || !location) return;
    
    // Enforce location specificity to prevent vague searches returning wrong corporate profiles
    if (!/\d/.test(location) && !/,/.test(location)) {
      setErrorMsg('Please include your Zip Code or format as "City, State" for an accurate scan.');
      return;
    }

    setUiState('LOADING_SEARCH');
    
    try {
      const res = await fetch('/api/places', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, location }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch business.');

      setPlaceData({ rating: data.rating, user_ratings_total: data.user_ratings_total, photoCount: data.photoCount });
      
      // Fire partial lead capture to Resend in the background. Does not await/block the UI.
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          businessName, 
          location, 
          websiteUrl, 
          isPartial: true 
        }),
      }).catch(err => console.error('Failed to send partial lead', err));

      setUiState('GATE');
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong.');
      setUiState('SEARCH');
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setUiState('LOADING_GATE');
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, businessName, location, websiteUrl, deficitScore: deficit }),
      });
      runSpeedTest();
    } catch (err) {
      runSpeedTest();
    }
  };

  const blurIn = {
    initial: { filter: 'blur(12px)', opacity: 0, y: 30 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
    exit: { filter: 'blur(12px)', opacity: 0, y: -30 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const renderProfileActivity = () => {
    if (!placeData) return null;
    const { photoCount } = placeData;
    
    let photoColor = 'text-green-500';
    let photoText = "Your Google Business Profile is visually active. Homeowners see a living, breathing business instead of an empty storefront.";
    
    if (photoCount < 10 && photoCount > 0) {
      photoColor = 'text-yellow-400';
      photoText = "You lack a proper visual gallery. The competitor stealing your jobs has heavily documented their work. Homeowners are scrolling right past your profile.";
    } else if (photoCount === 0) {
      photoColor = 'text-red-500';
      photoText = "Google’s local search system cannot see your photos. You might have uploaded them, but they are not registering. If Google's background network is blind, local map apps are blind, too. Right now, your digital storefront is a ghost town. To a homeowner searching in a cold sweat, a blank profile looks like a business that went under.";
    }

    return (
      <div className="mt-12 bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-4 mb-6">
          <Camera className="w-8 h-8 text-primary" />
          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-surface">Image Quality Score</h3>
        </div>
        
        <div className="space-y-4 text-left">
          <div className="flex items-end gap-4">
            <span className={`text-6xl font-black font-display leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] ${photoColor}`}>
              {photoCount}{photoCount === 10 ? '+' : ''}
            </span>
            <span className="text-2xl text-white/40 pb-1">/ 10 Min. Standard</span>
          </div>
          <p className={`text-lg md:text-xl font-medium leading-relaxed ${photoColor}`}>
            {photoText}
          </p>
        </div>
      </div>
    );
  };

  const renderSpeedDiagnostic = () => {
    let speedColor = '';
    let speedText = '';
    
    if (speedScore !== null) {
      if (speedScore === -1) {
        speedColor = 'text-yellow-500/80';
        speedText = "We could not automatically retrieve your speed score at this time. It is likely blocking standard diagnostic tools.";
      } else if (speedScore < 50) {
        speedColor = 'text-red-500';
        speedText = "Your site fails the mobile speed test. Half your traffic clicks the back button before your page even loads. You are paying for visibility but pouring the leads down the drain.";
      } else if (speedScore < 90) {
        speedColor = 'text-yellow-400';
        speedText = "Your site is sluggish on mobile. You are losing a percentage of impatient buyers to faster competitors.";
      } else {
        speedColor = 'text-green-500';
        speedText = "Your website experience is highly optimized. Traffic seamlessly converts without bounce friction.";
      }
    }

    return (
      <div className="mt-8 bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-4 mb-6">
          <Smartphone className="w-8 h-8 text-primary" />
          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-surface">Customer Wait Time</h3>
        </div>
        
        {isSpeedLoading && (
          <div className="animate-pulse space-y-4 text-left">
            <div className="h-4 bg-white/10 rounded w-full"></div>
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
            <div className="pt-2">
              <p className="text-primary text-sm font-bold tracking-widest uppercase mb-1">Running live mobile speed diagnostic...</p>
              <p className="text-white/50 text-xs italic font-light leading-relaxed max-w-sm">
                Establishing connection with Google Lighthouse. Real-time rendering analysis may take up to 60 seconds to compile. Please do not close this window.
              </p>
            </div>
          </div>
        )}

        {!isSpeedLoading && speedScore !== null && (
          <div className="space-y-4 text-left">
            <div className="flex items-end gap-4">
              <span className={`text-6xl font-black font-display leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] ${speedColor}`}>
                {speedScore === -1 ? 'Err' : speedScore}
              </span>
              {speedScore !== -1 && <span className="text-2xl text-white/40 pb-1">/ 100</span>}
            </div>
            <p className={`text-lg md:text-xl font-medium leading-relaxed ${speedColor}`}>
              {speedText}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">

      <div className="glass-panel rounded-3xl p-8 md:p-20 min-h-[600px] flex flex-col justify-center overflow-hidden relative group">
        
        {/* Subtle glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 opacity-50 blur-[120px] rounded-full point-events-none mix-blend-screen animate-pulse-slow"></div>

        <AnimatePresence mode="wait">
          
          {/* STATE 1: SEARCH */}
          {(uiState === 'SEARCH' || uiState === 'LOADING_SEARCH') && (
            <motion.div key="search" variants={staggerContainer} initial="initial" animate="animate" exit="exit" className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <motion.div variants={blurIn} className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 uppercase tracking-[0.2em] text-xs font-semibold text-primary">
                  System Diagnostics
                </motion.div>
                <motion.h2 variants={blurIn} className="text-5xl md:text-7xl leading-[0.9] tracking-tighter text-surface font-display font-bold uppercase mix-blend-plus-lighter">
                  Calculate <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Trust Deficit.</span>
                </motion.h2>
                <motion.p variants={blurIn} className="text-white/60 text-lg max-w-md font-light leading-relaxed">
                  Enter your exact business name and operational city to cross-reference the market benchmark and expose your deficit score.
                </motion.p>
              </div>

              <motion.form variants={blurIn} onSubmit={handleSearchSubmit} className="space-y-12 bg-black/20 p-10 rounded-2xl border border-white/5 backdrop-blur-md">
                <div className="space-y-10">
                  <div className="relative group/input">
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Business Name"
                      className="input-premium w-full !bg-transparent border-b-2 border-white/10 text-white pb-4 pr-10 outline-none focus:border-primary transition-all duration-500 text-lg font-light placeholder-secondary"
                    />
                    <Search className="absolute right-0 bottom-4 w-6 h-6 text-white/20 group-focus-within/input:text-primary transition-colors duration-500" />
                  </div>
                  
                  <div className="relative group/input">
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, State or Zip Code"
                      className="input-premium w-full !bg-transparent border-b-2 border-white/10 text-white pb-4 pr-10 outline-none focus:border-primary transition-all duration-500 text-lg font-light placeholder-secondary"
                    />
                    <MapPin className="absolute right-0 bottom-4 w-6 h-6 text-white/20 group-focus-within/input:text-primary transition-colors duration-500" />
                  </div>

                  <div className="relative group/input">
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="Website URL (e.g. yoursite.com)"
                      className="input-premium w-full !bg-transparent border-b-2 border-white/10 text-white pb-4 pr-10 outline-none focus:border-primary transition-all duration-500 text-lg font-light placeholder-secondary"
                    />
                    <Globe className="absolute right-0 bottom-4 w-6 h-6 text-white/20 group-focus-within/input:text-primary transition-colors duration-500" />
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-sm font-medium tracking-wide text-red-400 mt-4 flex items-center gap-2">
                    <X className="w-4 h-4" /> {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={uiState === 'LOADING_SEARCH'}
                  className="relative flex w-full h-16 md:h-20 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_40px_-5px_rgba(180,83,9,0.35)] transition-all hover:scale-[1.02] active:scale-95 duration-300 mt-8 disabled:opacity-50 disabled:pointer-events-none disabled:scale-100"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-8 md:px-10 text-lg md:text-xl font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                    {uiState === 'LOADING_SEARCH' ? 'Scanning Matrix...' : 'Initiate Scan'}
                    {!uiState.includes('LOADING') && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                  </span>
                </button>

                <div className="flex justify-center mt-6">
                  <a href="/" className="text-xs text-gray-500 hover:text-gray-400 transition-colors uppercase tracking-[0.1em] font-medium flex items-center gap-2">
                     Return to main site
                  </a>
                </div>
              </motion.form>

            </motion.div>
          )}

          {/* STATE 2: THE GATE */}
          {(uiState === 'GATE' || uiState === 'LOADING_GATE') && (
            <motion.div key="gate" variants={staggerContainer} initial="initial" animate="animate" exit="exit" className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
              <motion.div variants={blurIn}>
                <div className="w-24 h-24 mx-auto border-[1px] border-primary/40 rounded-full flex items-center justify-center bg-primary/5 shadow-[0_0_60px_rgba(180,83,9,0.2)] mb-8">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-surface font-display font-bold uppercase mb-4">
                  Profile <span className="text-primary italic">Located.</span>
                </h2>
                <p className="text-white/60 text-xl font-light">
                  A high-fidelity visibility report has been generated. Authorize your access email to review the exact metrics tearing down your market cap.
                </p>
              </motion.div>

              <motion.form variants={blurIn} onSubmit={handleLeadSubmit} className="space-y-6 pt-8">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="AUTHORIZATION EMAIL..."
                  className="input-premium w-full !bg-transparent border-b-2 border-white/10 text-white pb-4 outline-none focus:border-primary transition-all duration-500 text-center text-lg lg:text-xl placeholder-secondary uppercase tracking-widest font-display"
                />
                
                <div className="relative group/btn w-full max-w-xs mx-auto mt-8">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-300 to-primary rounded-full blur opacity-40 group-hover/btn:opacity-75 transition duration-1000 animate-pulse-slow"></div>
                  <button
                    type="submit"
                    disabled={uiState === 'LOADING_GATE'}
                    className="relative w-full py-5 bg-[#0a0a0c] border border-primary/50 text-white rounded-full text-lg font-medium hover:border-primary transition-colors flex justify-center items-center gap-3 disabled:opacity-50"
                  >
                    {uiState === 'LOADING_GATE' ? 'Authorizing...' : 'Unlock Intel'}
                    {!uiState.includes('LOADING') && <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />}
                  </button>
                </div>
              </motion.form>
            </motion.div>
          )}

          {/* STATE 2.5: DIAGNOSING PROGRESS BAR */}
          {uiState === 'DIAGNOSING' && (
            <motion.div key="diagnosing" variants={staggerContainer} initial="initial" animate="animate" exit="exit" className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
              <motion.div variants={blurIn}>
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 uppercase tracking-[0.2em] text-xs font-semibold text-primary mb-8 animate-pulse">
                  System Deep Scan
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-surface font-display font-bold uppercase mb-4">
                  Finalizing <span className="text-primary italic">Your Report.</span>
                </h2>
                <p className="text-white/60 text-xl font-light">
                  Hold tight! We're putting the finishing touches on your custom visibility audit. This usually takes just a few more seconds.
                </p>
              </motion.div>

              <motion.div variants={blurIn} className="space-y-4">
                <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-primary via-orange-400 to-primary rounded-full relative shadow-[0_0_20px_rgba(180,83,9,0.4)]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250px_100%] animate-[shimmer_2s_infinite_linear]"></div>
                  </motion.div>
                </div>
                <div className="flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase">
                  <span className="text-primary">Loading Intel</span>
                  <span className="text-surface">{Math.floor(progress)}%</span>
                </div>
              </motion.div>
            </motion.div>
          )}
          {uiState === 'REVEAL' && (
            <motion.div key="reveal" className="relative z-10 text-center w-full">
              {deficit > 0 ? (
                <div className="space-y-16">
                  <motion.div
                    initial={{ scale: 2, opacity: 0, filter: 'blur(20px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <h3 className="absolute left-1/2 -translate-x-1/2 top-0 uppercase tracking-[0.4em] text-red-500/50 font-bold text-sm">Critical Deficit</h3>
                    <div className="text-[12rem] leading-none md:text-[20rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-red-600 via-red-500 to-red-950 font-display tracking-tighter mix-blend-screen drop-shadow-[0_0_80px_rgba(220,38,38,0.4)]">
                      -{deficit}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="max-w-3xl mx-auto space-y-6 w-full"
                  >
                    <div className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                      <div className="flex items-center gap-4 mb-6">
                        <Star className="w-8 h-8 text-primary" />
                        <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-surface">Reputation Volume</h3>
                      </div>
                      
                      <div className="space-y-4 text-left">
                        <div className="flex items-end gap-4">
                          <span className="text-6xl font-black font-display leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] text-red-500">
                            {placeData?.user_ratings_total}
                          </span>
                          <span className="text-2xl text-white/40 pb-1">/ 80 Min. Standard</span>
                        </div>
                        <p className="text-red-400 text-lg md:text-xl font-medium leading-relaxed">
                          You are missing {deficit} reviews. In Montana, word-of-mouth is everything. Right now, your digital word-of-mouth is a whisper in a blizzard. You are handing jobs to the loudest competitor in town, not the best.
                        </p>
                      </div>
                    </div>
                    
                    {renderProfileActivity()}
                    {renderSpeedDiagnostic()}

                    {hasFailingFactor && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className={`mt-12 p-6 md:p-8 rounded-2xl border text-center w-full ${failCount === 1 ? 'bg-yellow-950/40 border-yellow-500/20' : 'bg-red-950/40 border-red-500/20'}`}
                      >
                        <p className={`text-xl font-bold uppercase tracking-widest mb-2 font-display ${failCount === 1 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {failCount === 1 ? 'Almost There' : 'Attention'}
                        </p>
                        <p className={`text-lg md:text-xl font-light ${failCount === 1 ? 'text-yellow-200' : 'text-red-200'}`}>
                          {failCount === 1 
                            ? "Your overall setup is incredibly strong, but this one missing piece is quietly costing you high-ticket jobs. A 10-minute fix here will dramatically multiply your incoming leads." 
                            : "You are losing a massive amount of income because of these factors. Stop letting competitors steal your traffic."}
                        </p>
                      </motion.div>
                    )}

                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="flex flex-col items-center mt-8"
                  >
                    <div className="relative group/btn w-full max-w-sm">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-300 to-primary rounded-full blur opacity-50 group-hover/btn:opacity-100 transition duration-1000 animate-pulse-slow"></div>
                      <a 
                        href="https://calendly.com/triggsmt67/30min?back=1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full flex items-center justify-center gap-3 py-5 bg-[#0a0a0c] border border-primary/50 text-white rounded-full text-lg font-medium hover:border-primary transition-colors"
                      >
                        Review my current setup
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                    <p className="text-white/40 text-sm font-light mt-4 text-center">
                      Takes 15 minutes. No sales pitch. I'll call your cell.
                    </p>
                    <a 
                      href="https://truepath406.com"
                      className="block mt-6 text-sm text-gray-500 hover:text-gray-400 hover:underline cursor-pointer transition-colors text-center"
                    >
                      Close diagnostic and return to site.
                    </a>
                  </motion.div>
                </div>
              ) : (
                <div className="space-y-12 py-20 max-w-3xl mx-auto">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-[17vw] sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-700 uppercase tracking-tighter"
                  >
                    Dominant.
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="space-y-6 w-full"
                  >
                    <div className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                      <div className="flex items-center gap-4 mb-6">
                        <Star className="w-8 h-8 text-primary" />
                        <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-surface">Reputation Volume</h3>
                      </div>
                      
                      <div className="space-y-4 text-left">
                        <div className="flex items-end gap-4">
                          <span className="text-6xl font-black font-display leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] text-green-500">
                            {placeData?.user_ratings_total}
                          </span>
                          <span className="text-2xl text-white/40 pb-1">/ 80 Min. Standard</span>
                        </div>
                        <p className="text-green-400 text-lg md:text-xl font-medium leading-relaxed">
                          You beat the market standard. Your digital word-of-mouth is an absolute fortress. The Trust Deficit does not apply to you in this category.
                        </p>
                      </div>
                    </div>
                  
                    {renderProfileActivity()}
                    {renderSpeedDiagnostic()}

                    {hasFailingFactor && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className={`mt-12 p-6 md:p-8 rounded-2xl border text-center w-full ${failCount === 1 ? 'bg-yellow-950/40 border-yellow-500/20' : 'bg-red-950/40 border-red-500/20'}`}
                      >
                        <p className={`text-xl font-bold uppercase tracking-widest mb-2 font-display ${failCount === 1 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {failCount === 1 ? 'Almost There' : 'Attention'}
                        </p>
                        <p className={`text-lg md:text-xl font-light ${failCount === 1 ? 'text-yellow-200' : 'text-red-200'}`}>
                          {failCount === 1 
                            ? "Your overall setup is incredibly strong, but this one missing piece is quietly costing you high-ticket jobs. A 10-minute fix here will dramatically multiply your incoming leads." 
                            : "You are losing a massive amount of income because of these factors. Stop letting competitors steal your traffic."}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col items-center mt-12"
                  >
                    <div className="relative group/btn w-full max-w-sm">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-300 to-primary rounded-full blur opacity-50 group-hover/btn:opacity-100 transition duration-1000 animate-pulse-slow"></div>
                      <a 
                        href="https://calendly.com/triggsmt67/30min?back=1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full flex items-center justify-center gap-3 py-5 bg-[#0a0a0c] border border-primary/50 text-white rounded-full text-lg font-medium hover:border-primary transition-colors"
                      >
                        Review my current setup
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                    <p className="text-white/40 text-sm font-light mt-4 text-center">
                      Takes 15 minutes. No sales pitch. I'll call your cell.
                    </p>
                    <a 
                      href="https://truepath406.com"
                      className="block mt-6 text-sm text-gray-500 hover:text-gray-400 hover:underline cursor-pointer transition-colors text-center"
                    >
                      Close diagnostic and return to site.
                    </a>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
