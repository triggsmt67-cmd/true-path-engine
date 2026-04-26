'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Search, MapPin, ArrowRight, X, Eye, Globe, Smartphone, Camera, Star, Download, AlertTriangle, Bot, Lock } from 'lucide-react';

type DebouncedInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (val: string) => void;
};

function DebouncedInput({ value, onChange, ...props }: DebouncedInputProps) {
  const [localValue, setLocalValue] = useState(value);
  useEffect(() => { setLocalValue(value); }, [value]);
  useEffect(() => {
    const handler = setTimeout(() => onChange(localValue), 300);
    return () => clearTimeout(handler);
  }, [localValue, onChange]);
  return <input {...props} value={localValue} onChange={(e) => setLocalValue(e.target.value)} />;
}

function AnimatedNumber({ value, format = 'integer' }: { value: number, format?: 'integer'|'decimal'|'currency' }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        if (format === 'integer') {
          ref.current.textContent = Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(latest);
        } else if (format === 'decimal') {
          ref.current.textContent = latest.toFixed(1);
        } else if (format === 'currency') {
          ref.current.textContent = Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(latest);
        }
      }
    });
  }, [springValue, format]);

  return <span ref={ref} />;
}

type UIState = 'SEARCH_MAPS' | 'LOADING_MAPS' | 'REVEAL_PARTIAL' | 'LOADING_GATE' | 'DIAGNOSING_SPEED' | 'REVEAL_FULL';

export default function TrustDeficitCalculator() {
  const [uiState, setUiState] = useState<UIState>('SEARCH_MAPS');
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
  const [showVisuals, setShowVisuals] = useState(false);
  const [aiScanData, setAiScanData] = useState<{hasLocalBusinessSchema: boolean, hasSchema: boolean} | null>(null);
  const [videoRequested, setVideoRequested] = useState(false);

  const handleVideoRequest = async () => {
    setVideoRequested(true);
    trackAnalytics('cta_click', { type: 'video_teardown_requested' });
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          businessName: businessName || websiteUrl,
          location,
          websiteUrl,
          deficitScore: deficit,
          isPartial: false,
          isVideoTeardownRequest: true
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadReport = () => {
    trackAnalytics('cta_click', { type: 'download_report' });
    
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Revenue Leak Diagnostic Report - ${businessName || 'Business'}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 800px; margin: 40px auto; padding: 0 20px; background-color: #f9fafb; }
    .header { border-bottom: 2px solid #e5e7eb; padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
    .header h1 { color: #0a0a0c; font-size: 28px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px; }
    .meta { font-size: 14px; color: #6b7280; margin-bottom: 5px; }
    .section { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .section-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px; margin-bottom: 16px; }
    .section-title { font-size: 18px; font-weight: 700; margin: 0; color: #374151; }
    .badge { padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    .badge.failing { background-color: #fee2e2; color: #991b1b; }
    .badge.optimized { background-color: #dcfce7; color: #166534; }
    .badge.partial { background-color: #fef3c7; color: #92400e; }
    .metric { margin-bottom: 8px; font-size: 15px; }
    .metric strong { color: #4b5563; }
    .conclusion { background-color: #0a0a0c; color: white; padding: 30px; border-radius: 8px; text-align: center; margin-top: 40px; }
    .conclusion h2 { margin: 0 0 15px 0; color: #4ade80; }
    .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #9ca3af; }
    .footer a { color: #4ade80; text-decoration: none; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Diagnostic Audit Report</h1>
    <div class="meta"><strong>Business:</strong> ${businessName || 'Unknown'}</div>
    <div class="meta"><strong>Website:</strong> ${websiteUrl || 'Not provided'}</div>
    <div class="meta"><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">1. Reputation Volume</h2>
      <span class="badge ${deficit > 0 ? 'failing' : 'optimized'}">${deficit > 0 ? 'Failing' : 'Optimized'}</span>
    </div>
    <div class="metric"><strong>Google Maps Reviews:</strong> ${placeData?.user_ratings_total || 0}</div>
    <div class="metric"><strong>Minimum Standard:</strong> 80</div>
    <div class="metric"><strong>Status:</strong> ${deficit > 0 ? `<span style="color: #ef4444; font-weight: 600;">${deficit} reviews missing</span>` : 'Benchmark met'}</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">2. Visual Authority (Images)</h2>
      <span class="badge ${placeData && placeData.photoCount < 10 ? 'failing' : 'optimized'}">${placeData && placeData.photoCount < 10 ? 'Failing' : 'Optimized'}</span>
    </div>
    <div class="metric"><strong>Profile Photos:</strong> ${placeData?.photoCount || 0}</div>
    <div class="metric"><strong>Minimum Standard:</strong> 10+ high-quality images</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">3. AI Visibility Status</h2>
      <span class="badge ${aiScanData && aiScanData.hasLocalBusinessSchema ? 'optimized' : aiScanData?.hasSchema ? 'partial' : 'failing'}">
        ${aiScanData && aiScanData.hasLocalBusinessSchema ? 'Optimized' : aiScanData?.hasSchema ? 'Partial' : 'Invisible'}
      </span>
    </div>
    <div class="metric"><strong>Structured Data Scan:</strong> ${aiScanData && aiScanData.hasLocalBusinessSchema ? 'LocalBusiness Schema Found' : 'Missing Critical LocalBusiness Schema'}</div>
    <div class="metric" style="font-size: 13px; color: #6b7280; margin-top: 8px;">*Without proper schema, AI engines cannot confidently recommend your business to searchers.</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">4. Mobile Speed Performance</h2>
      <span class="badge ${speedScore && speedScore >= 90 ? 'optimized' : 'failing'}">${speedScore && speedScore >= 90 ? 'Optimized' : 'Failing'}</span>
    </div>
    <div class="metric"><strong>Lighthouse Score:</strong> ${speedScore || 'Unknown'}/100</div>
    <div class="metric"><strong>Minimum Standard:</strong> 90/100</div>
  </div>

  <div class="conclusion">
    <h2>Executive Summary</h2>
    <p style="font-size: 16px; margin: 0;">
      ${failCount === 0 
        ? 'Your digital footprint is dominant. You are in a prime position to scale aggressive marketing campaigns.' 
        : `You are failing <strong>${failCount} critical benchmarks</strong>. These technical and reputational bottlenecks act as a massive leak in your sales funnel, actively driving high-intent customers to your competitors.`}
    </p>
  </div>

  <div class="footer">
    Report generated by <strong>True Path Digital</strong><br>
    <a href="https://truepath406.com">truepath406.com</a>
  </div>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(businessName || 'business').replace(/[^a-z0-9]/gi, '_').toLowerCase()}_diagnostic_report.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Analytics implementation
  const uiStateRef = useRef(uiState);
  useEffect(() => { uiStateRef.current = uiState; }, [uiState]);
  useEffect(() => {
    return () => console.log('[Analytics] drop_off', { step: uiStateRef.current });
  }, []);
  const trackAnalytics = (event: string, data?: any) => {
    console.log(`[Analytics] ${event}`, data || {});
  };

  // 1. Client-side memoization of scoring logic
  const scoring = useMemo(() => {
    const BENCHMARK = 80;
    const deficitVal = placeData ? BENCHMARK - placeData.user_ratings_total : 0;
    const repFailVal = deficitVal > 0;
    const imgFailVal = Boolean(placeData && placeData.photoCount < 10);
    const spdFailVal = speedScore !== null && speedScore < 90;
    const aiFailVal = aiScanData !== null && !aiScanData.hasLocalBusinessSchema;
    const failCntVal = [repFailVal, imgFailVal, spdFailVal, aiFailVal].filter(Boolean).length;
    const hasFailVal = failCntVal > 0;
    return { deficit: deficitVal, failCount: failCntVal, hasFailingFactor: hasFailVal };
  }, [placeData, speedScore, aiScanData]);

  const { deficit, failCount, hasFailingFactor } = scoring;

  // 3. Lazy-load non-critical visuals
  useEffect(() => {
    if (uiState === 'REVEAL_FULL' || uiState === 'REVEAL_PARTIAL') {
      trackAnalytics('result_view', { deficit, failCount });
      const timer = setTimeout(() => setShowVisuals(true), 150); // delay until after FCP
      return () => clearTimeout(timer);
    } else {
      setShowVisuals(false);
    }
  }, [uiState, deficit, failCount]);

  const runSpeedTest = async () => {
    setIsSpeedLoading(true);
    setUiState('DIAGNOSING_SPEED');
    setProgress(0);
    
    // Asymptotic progress bar simulation (never truly stalls)
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + (98 - prev) * 0.04, 98));
    }, 600);

    try {
      const formattedUrl = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;
      
      const speedPromise = fetch('/api/speed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ websiteUrl: formattedUrl }),
      });

      const aiPromise = fetch('/api/ai-readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ websiteUrl: formattedUrl }),
      }).catch(() => null);

      const [res, aiRes] = await Promise.all([speedPromise, aiPromise]);
      const data = await res.json();
      
      if (aiRes && aiRes.ok) {
        const aiData = await aiRes.json();
        if (aiData.success) {
           setAiScanData({ hasLocalBusinessSchema: aiData.hasLocalBusinessSchema, hasSchema: aiData.hasSchema });
        }
      }

      clearInterval(interval);
      setProgress(100);
      
      if (res.ok && data.score !== undefined) {
        setSpeedScore(data.score);
      } else {
        setSpeedScore(-1);
      }
      
      // Brief pause at 100% for satisfaction before reveal
      setTimeout(() => setUiState('REVEAL_FULL'), 800);
    } catch (err) {
      clearInterval(interval);
      setSpeedScore(-1);
      setUiState('REVEAL_FULL');
    } finally {
      setIsSpeedLoading(false);
    }
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!businessName || !location) return;
    
    trackAnalytics('calculator_start', { businessName, location });
    
    if (!/\d/.test(location) && !/,/.test(location)) {
      setErrorMsg('Please include your Zip Code or format as "City, State" for an accurate scan.');
      return;
    }

    setUiState('LOADING_MAPS');
    
    try {
      const res = await fetch('/api/places', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, location }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch business.');

      setPlaceData({ rating: data.rating, user_ratings_total: data.user_ratings_total, photoCount: data.photoCount });
      
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          businessName, 
          location, 
          isPartial: true 
        }),
      }).catch(err => console.error('Failed to send partial lead', err));

      trackAnalytics('step_completion', { step: 'SEARCH_MAPS', success: true });
      setUiState('REVEAL_PARTIAL');
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong.');
      setUiState('SEARCH_MAPS');
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !websiteUrl) {
      setErrorMsg("Please provide both email and website URL.");
      return;
    }
    setErrorMsg('');
    setUiState('LOADING_GATE');
    trackAnalytics('step_completion', { step: 'REVEAL_PARTIAL_SUBMITTED', email });
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

  const renderTrustSentiment = () => {
    const rating = placeData?.rating || 0;
    if (rating === 0) return null;

    let ratingColor = 'text-green-600';
    let ratingText = "Your local market sentiment is excellent. You have bulletproof word-of-mouth here. Any conversion issues are stemming from other technical bottlenecks in your funnel.";
    
    if (rating < 4.3) {
      ratingColor = 'text-brand-accent';
      ratingText = "You are bleeding high-intent local traffic to competitors strictly due to Star Velocity. You may have the volume, but consumer trust drops off a cliff beneath a 4.3. This acts as a subconscious red flag to premium customers.";
    } else if (rating < 4.8) {
      ratingColor = 'text-amber-600';
      ratingText = "Your rating is solid, but you are not the undisputed king of the market. High-income customers often filter by 4.8+ ratings. Elevating this metric will lock down those high-ticket clients.";
    }

    return (
      <div className="mt-12 bg-surface p-8 rounded-standard border border-black/5 shadow-lg shadow-black/[0.02]">
        <div className="flex items-center gap-4 mb-6">
          <Star className="w-8 h-8 text-brand-accent" />
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy">Trust Sentiment</h3>
        </div>
        
        <div className="space-y-4 text-left">
          <div className="flex items-end gap-4">
            <span className={`text-6xl font-black leading-none ${ratingColor}`}>
              <AnimatedNumber value={rating} format="decimal" />
            </span>
            <span className="text-2xl text-text-secondary pb-1">/ 5.0 Stars</span>
          </div>
          <div className="text-[11px] text-text-secondary uppercase tracking-[0.1em] font-bold flex items-center gap-1.5 pt-1">
            <MapPin className="w-3 h-3" aria-hidden="true" />
             Data sourced directly from live Google Maps
          </div>
          <p className={`text-lg md:text-xl font-medium leading-relaxed pt-2 ${ratingColor}`}>
            {ratingText}
          </p>
        </div>
      </div>
    );
  };

  
  const renderRevenueLeak = () => {
    let leak = 0;
    if (deficit > 0) leak += Math.max(5, Math.floor(deficit / 4));
    if (speedScore !== null && speedScore < 50) leak += 14;
    else if (speedScore !== null && speedScore < 90) leak += 4;
    if (placeData && placeData.photoCount < 10) leak += 7;
    if (placeData && placeData.rating && placeData.rating < 4.5) leak += 12;

    if (leak === 0) return null;

    return (
      <div className="bg-gradient-to-r from-brand-accent/5 to-surface p-6 md:p-8 rounded-standard border border-brand-accent/10 relative overflow-hidden mb-8 shadow-xl shadow-brand-accent/[0.03] group">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,124,122,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(79,124,122,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
        <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-brand-accent to-brand-navy h-full shadow-[0_0_15px_rgba(79,124,122,0.2)]"></div>
        
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-center md:text-left relative z-10">
          <div className="space-y-3 w-full">
            <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-2">
              <AlertTriangle className="w-5 h-5 text-brand-accent animate-pulse" />
              Calculate Your True Revenue Leak
            </h3>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              Take your estimated lost jobs from above and multiply it by your <strong className="text-brand-navy font-bold">Average Service Ticket</strong>. That is the exact dollar amount you are handing to competitors every 30 days.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center bg-brand-accent/5 border border-brand-accent/10 rounded-xl px-6 py-4">
             <div className="text-2xl md:text-3xl font-mono text-brand-accent font-bold tracking-widest flex items-center gap-3">
               <span className="text-brand-accent/50">X</span> $$$
             </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProfileActivity = () => {
    if (!placeData) return null;
    const { photoCount } = placeData;
    
    let photoColor = 'text-green-600';
    let photoText = "Your Google Business Profile is visually active. Customers see a living, breathing business instead of an empty storefront.";
    
    if (photoCount < 10 && photoCount > 0) {
      photoColor = 'text-amber-600';
      photoText = "You lack a proper visual gallery. The competitor stealing your market share has heavily documented their work. High-intent customers are scrolling right past your profile.";
    } else if (photoCount === 0) {
      photoColor = 'text-brand-accent';
      photoText = "Google’s local search system cannot see your photos. You might have uploaded them, but they are not registering. If Google's background network is blind, local map apps are blind, too. Right now, your digital storefront is a ghost town. To a customer searching for an immediate solution, a blank profile looks like a business that went under.";
    }

    return (
      <div className="mt-12 bg-surface p-8 rounded-standard border border-black/5 shadow-lg shadow-black/[0.02]">
        <div className="flex items-center gap-4 mb-6">
          <Camera className="w-8 h-8 text-brand-accent" />
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy">Image Quality Score</h3>
        </div>
        
        <div className="space-y-4 text-left">
          <div className="flex items-end gap-4">
            <span className={`text-6xl font-black leading-none ${photoColor}`}>
              <AnimatedNumber value={photoCount} />{photoCount >= 10 ? '+' : ''}
            </span>
            <span className="text-2xl text-text-secondary pb-1">/ 10 Min. Standard</span>
          </div>
          <p className={`text-lg md:text-xl font-medium leading-relaxed ${photoColor}`}>
            {photoText}
          </p>
        </div>
      </div>
    );
  };

  const renderAIDiagnostic = () => {
    if (!aiScanData && !isSpeedLoading) return null;

    let aiColor = '';
    let aiText = '';
    let statusText = '';
    
    if (aiScanData) {
      if (aiScanData.hasLocalBusinessSchema) {
        aiColor = 'text-green-600';
        statusText = 'OPTIMIZED';
        aiText = "Your website contains structured LocalBusiness data. AI models like ChatGPT and Google's AI Overview can confidently ingest your business details and recommend you as an authoritative local solution.";
      } else if (aiScanData.hasSchema) {
        aiColor = 'text-amber-600';
        statusText = 'PARTIAL';
        aiText = "Your site has some structured data, but it fails to explicitly identify you as a local business. AI engines may struggle to confidently recommend your services to local customers over competitors with proper markup.";
      } else {
        aiColor = 'text-brand-accent';
        statusText = 'INVISIBLE';
        aiText = "Your website entirely lacks Schema.org structured data. To modern AI engines (like ChatGPT or Perplexity), your business is invisible. When a customer asks an AI for the best local service provider, you will not be recommended.";
      }
    }

    return (
      <div className="mt-8 bg-surface p-8 rounded-standard border border-black/5 shadow-lg shadow-black/[0.02]">
        <div className="flex items-center gap-4 mb-6">
          <Bot className="w-8 h-8 text-brand-accent" />
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy">AI Visibility Status</h3>
        </div>
        
        {isSpeedLoading && (
          <div className="animate-pulse space-y-4 text-left">
            <div className="h-4 bg-black/5 rounded w-full"></div>
            <div className="h-4 bg-black/5 rounded w-3/4"></div>
            <div className="pt-2">
              <p className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-1">Scanning source code for structured data...</p>
              <p className="text-text-secondary text-xs italic leading-relaxed max-w-sm">
                Searching DOM for valid application/ld+json architecture...
              </p>
            </div>
          </div>
        )}

        {!isSpeedLoading && aiScanData && (
          <div className="space-y-4 text-left">
            <div className="flex items-end gap-4">
              <span className={`text-4xl md:text-6xl font-black leading-none ${aiColor}`}>
                {statusText}
              </span>
            </div>
            <p className={`text-lg md:text-xl font-medium leading-relaxed ${aiColor}`}>
              {aiText}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderSpeedDiagnostic = () => {
    let speedColor = '';
    let speedText = '';
    
    if (speedScore !== null) {
      if (speedScore === -1) {
        speedColor = 'text-amber-600';
        speedText = "We could not automatically retrieve your speed score at this time. It is likely blocking standard diagnostic tools.";
      } else if (speedScore < 50) {
        speedColor = 'text-brand-accent';
        speedText = "Your site fails the mobile speed test. Half your traffic clicks the back button before your page even loads. You are paying for visibility but pouring the leads down the drain.";
      } else if (speedScore < 90) {
        speedColor = 'text-amber-600';
        speedText = "Your site is sluggish on mobile. You are losing a percentage of impatient customers to faster competitors.";
      } else {
        speedColor = 'text-green-600';
        speedText = "Your website experience is highly optimized. Traffic seamlessly converts without bounce friction.";
      }
    }

    return (
      <div className="mt-8 bg-surface p-8 rounded-standard border border-black/5 shadow-lg shadow-black/[0.02]">
        <div className="flex items-center gap-4 mb-6">
          <Smartphone className="w-8 h-8 text-brand-accent" />
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy">Customer Wait Time</h3>
        </div>
        
        {isSpeedLoading && (
          <div className="animate-pulse space-y-4 text-left">
            <div className="h-4 bg-black/5 rounded w-full"></div>
            <div className="h-4 bg-black/5 rounded w-3/4"></div>
            <div className="pt-2">
              <p className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-1">Running live mobile speed diagnostic...</p>
              <p className="text-text-secondary text-xs italic leading-relaxed max-w-sm">
                Establishing connection with Google Lighthouse. Real-time rendering analysis may take up to 60 seconds to compile. Please do not close this window.
              </p>
            </div>
          </div>
        )}

        {!isSpeedLoading && speedScore !== null && (
          <div className="space-y-4 text-left">
            <div className="flex items-end gap-4">
              <span className={`text-6xl font-black leading-none ${speedColor}`}>
                {speedScore === -1 ? 'Err' : speedScore}
              </span>
              {speedScore !== -1 && <span className="text-2xl text-text-secondary pb-1">/ 100</span>}
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

      <div className="bg-surface rounded-3xl p-8 md:p-20 min-h-[600px] flex flex-col justify-center overflow-hidden relative group border border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-shadow duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]">
        
        {/* Subtle glowing effect for light theme */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 opacity-30 blur-[120px] rounded-full point-events-none animate-pulse-slow"></div>

        <AnimatePresence mode="wait">
          
          {/* STATE 1: SEARCH */}
          {(uiState === 'SEARCH_MAPS' || uiState === 'LOADING_MAPS') && (
            <motion.div key="search" variants={staggerContainer} initial="initial" animate="animate" exit="exit" className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <motion.div variants={blurIn} className="inline-block px-4 py-1.5 rounded-full border border-brand-accent/10 bg-brand-accent/5 uppercase tracking-[0.2em] text-xs font-bold text-brand-accent">
                  Stop Losing Jobs
                </motion.div>
                <motion.h2 variants={blurIn} className="text-5xl md:text-7xl leading-[0.9] tracking-tighter text-brand-navy font-bold uppercase">
                  Expose Your <br/>
                  <span className="text-brand-accent">Revenue Leak.</span>
                </motion.h2>
                <motion.p variants={blurIn} className="text-text-secondary text-lg max-w-md leading-relaxed">
                  Enter your business name and city to see exactly why local customers are choosing your competitors over you.
                </motion.p>
              </div>

              <motion.form variants={blurIn} onSubmit={handleSearchSubmit} className="space-y-12 bg-background p-10 rounded-standard border border-black/5 shadow-xl shadow-black/[0.02]">
                <div className="space-y-6">
                  <div className="relative group/input">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-accent/0 group-focus-within/input:from-brand-accent/20 group-focus-within/input:to-brand-accent/20 rounded-xl blur transition-all duration-700"></div>
                    <DebouncedInput
                      type="text"
                      required
                      value={businessName}
                      onChange={setBusinessName}
                      placeholder="Enter Business Name"
                      className="relative w-full bg-surface border border-black/10 rounded-xl text-text-primary px-6 py-5 pr-12 outline-none focus:border-brand-accent/50 focus:bg-white shadow-sm transition-all duration-500 text-lg font-medium placeholder-text-secondary/50"
                    />
                    <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/30 group-focus-within/input:text-brand-accent transition-colors duration-500" />
                  </div>
                  
                  <div className="relative group/input">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-accent/0 group-focus-within/input:from-brand-accent/20 group-focus-within/input:to-brand-accent/20 rounded-xl blur transition-all duration-700"></div>
                    <DebouncedInput
                      type="text"
                      required
                      value={location}
                      onChange={setLocation}
                      placeholder="City, State or Zip Code"
                      className="relative w-full bg-surface border border-black/10 rounded-xl text-text-primary px-6 py-5 pr-12 outline-none focus:border-brand-accent/50 focus:bg-white shadow-sm transition-all duration-500 text-lg font-medium placeholder-text-secondary/50"
                    />
                    <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/30 group-focus-within/input:text-brand-accent transition-colors duration-500" />
                  </div>

                </div>

                {errorMsg && (
                  <p className="text-sm font-medium tracking-wide text-red-400 mt-4 flex items-center gap-2">
                    <X className="w-4 h-4" /> {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={uiState === 'LOADING_MAPS'}
                  className="relative flex w-full h-16 md:h-20 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-lg shadow-brand-accent/10 transition-all hover:scale-[1.02] active:scale-95 duration-300 mt-8 disabled:opacity-50 disabled:pointer-events-none disabled:scale-100"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-navy to-brand-accent opacity-100 transition-opacity duration-500" />
                  <span className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brand-accent px-8 md:px-10 text-lg md:text-xl font-bold text-white gap-3 transition-colors group-hover:bg-brand-navy hover:border-brand-navy whitespace-nowrap overflow-hidden">
                    {uiState === 'LOADING_MAPS' && (
                      <motion.div 
                        initial={{ x: '-150%' }}
                        animate={{ x: '150%' }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                        className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-3">
                      {uiState === 'LOADING_MAPS' ? 'Scanning Local Area...' : 'Scan Local Profile'}
                      {!uiState.includes('LOADING') && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                    </span>
                  </span>
                </button>

                <div className="flex justify-center mt-6">
                  <a href="/" className="text-xs text-text-secondary hover:text-brand-accent transition-colors uppercase tracking-[0.1em] font-bold flex items-center gap-2">
                     Return to main site
                  </a>
                </div>
              </motion.form>

            </motion.div>
          )}

          {/* STATE 2: REVEAL PARTIAL / GATE */}
          {(uiState === 'REVEAL_PARTIAL' || uiState === 'LOADING_GATE') && (
            <motion.div key="partial" variants={staggerContainer} initial="initial" animate="animate" exit="exit" className="relative z-10 text-center w-full">
               <motion.div variants={blurIn}>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-navy font-bold uppercase mb-8">
                    Scan <span className="text-brand-accent italic">Complete.</span>
                 </h2>
               </motion.div>
               
               <motion.div variants={blurIn} className="max-w-3xl mx-auto space-y-6 w-full text-left">
                  {/* Reputation Block */}
                  <div className="bg-surface p-8 rounded-standard border border-black/5 shadow-lg shadow-black/[0.02] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-brand-navy opacity-50"></div>
                      <div className="flex items-center gap-4 mb-6">
                        <Star className="w-8 h-8 text-brand-accent" />
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy">Initial Finding: Job Leak</h3>
                      </div>
                      
                      <div className="space-y-4 text-left">
                        <div className="flex items-end gap-4">
                          <span className={`text-6xl font-black leading-none ${deficit > 0 ? 'text-brand-accent' : 'text-green-600'}`}>
                            {deficit > 0 ? <AnimatedNumber value={Math.ceil(deficit * 0.3)} /> : <AnimatedNumber value={0} />}
                          </span>
                          <span className="text-2xl text-text-secondary pb-1">{deficit > 0 ? 'Jobs/Mo Leaked' : 'Jobs Leaked'}</span>
                        </div>
                        <div className="text-[11px] text-text-secondary uppercase tracking-[0.1em] font-bold flex items-center gap-1.5 pt-1">
                          <MapPin className="w-3 h-3" aria-hidden="true" />
                           Based on local market deficit
                        </div>
                        <p className={`text-lg md:text-xl font-medium leading-relaxed pt-2 ${deficit > 0 ? 'text-brand-accent' : 'text-green-600'}`}>
                          {deficit > 0 
                            ? `We estimate you are bleeding roughly ${Math.ceil(deficit * 0.3)} jobs every single month to the market leader. Your digital word-of-mouth is a whisper in a blizzard.`
                            : `You beat the market standard. Your digital word-of-mouth is an absolute fortress. You are not leaking jobs in this category.`}
                        </p>
                      </div>
                  </div>

                  {/* Teasers (Visually gated) */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/95 to-bg z-20 flex flex-col items-center justify-end pb-0">
                      <form onSubmit={handleLeadSubmit} className="space-y-6 mt-12 bg-surface p-8 md:p-12 border-t border-brand-accent/10 shadow-2xl shadow-black/[0.05] w-[calc(100%+4rem)] -mx-8 sm:w-full sm:mx-0 sm:rounded-standard sm:border text-center">
                         <h4 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy mb-2">Find Your Exact Revenue Leaks</h4>
                         <p className="text-text-secondary mb-8 text-base md:text-lg">Enter your website URL and email below so our system can run a real-time speed scan and show you exactly where competitors are outranking you.</p>
                         
                         <div className="max-w-md mx-auto space-y-6">
                            <div className="relative group/input">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-accent/0 group-focus-within/input:from-brand-accent/20 group-focus-within/input:to-brand-accent/20 rounded-xl blur transition-all duration-700"></div>
                              <input
                                  type="text"
                                  required
                                  value={websiteUrl}
                                  onChange={(e) => setWebsiteUrl(e.target.value)}
                                  placeholder="WEBSITE URL (yourdomain.com)"
                                  aria-label="Website URL"
                                  className="relative w-full bg-background border border-black/10 rounded-xl text-text-primary px-6 py-5 outline-none focus:border-brand-accent/50 focus:bg-white shadow-sm transition-all duration-500 text-center text-lg font-bold placeholder-text-secondary/30"
                                />
                            </div>
                            <div className="relative group/input">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-accent/0 group-focus-within/input:from-brand-accent/20 group-focus-within/input:to-brand-accent/20 rounded-xl blur transition-all duration-700"></div>
                              <input
                                  type="email"
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="AUTHORIZATION EMAIL"
                                  aria-label="Authorization Email"
                                  className="relative w-full bg-background border border-black/10 rounded-xl text-text-primary px-6 py-5 outline-none focus:border-brand-accent/50 focus:bg-white shadow-sm transition-all duration-500 text-center text-lg placeholder-text-secondary/30 font-bold uppercase tracking-widest"
                              />
                            </div>

                          {errorMsg && (
                            <p className="text-sm font-bold tracking-wide text-brand-accent mt-4 flex items-center justify-center gap-2" role="alert">
                              <X className="w-4 h-4" aria-hidden="true" /> {errorMsg}
                            </p>
                          )}
                           
                           <button
                              type="submit"
                              disabled={uiState === 'LOADING_GATE'}
                              aria-busy={uiState === 'LOADING_GATE'}
                              className="relative flex w-full h-16 md:h-20 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-lg shadow-brand-accent/10 transition-all hover:scale-[1.02] active:scale-95 duration-300 mt-8 disabled:opacity-50 disabled:pointer-events-none disabled:scale-100"
                            >
                              <span className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-navy to-brand-accent opacity-100 transition-opacity duration-500" />
                              <span className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brand-accent px-8 md:px-10 text-lg md:text-xl font-bold text-white gap-3 transition-colors group-hover:bg-brand-navy hover:border-brand-navy whitespace-nowrap overflow-hidden">
                                {uiState === 'LOADING_GATE' && (
                                  <motion.div 
                                    initial={{ x: '-150%' }}
                                    animate={{ x: '150%' }}
                                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                    className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                  />
                                )}
                                <span className="relative z-10 flex items-center gap-3">
                                  {uiState === 'LOADING_GATE' ? 'Processing...' : 'Reveal My Revenue Leaks'}
                                  {!uiState.includes('LOADING') && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                                </span>
                              </span>
                            </button>

                            <div className="flex flex-col items-center gap-3 mt-6">
                               <div className="flex items-center justify-center gap-2 text-text-secondary/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                                  <Lock className="w-3 h-3 text-brand-accent/70" />
                                  <span>256-Bit Secure Diagnostics</span>
                               </div>
                               <p className="text-[11px] text-text-secondary/50 leading-relaxed tracking-wide">
                                 We use your email strictly to deliver your scan roadmap. Zero spam. Zero list selling.
                               </p>
                            </div>
                         </div>
                      </form>
                    </div>

                    <div className="opacity-20 blur-md pointer-events-none space-y-6 select-none overflow-hidden h-[400px]">
                        {showVisuals && renderProfileActivity()}
                        {showVisuals && renderAIDiagnostic()}
                        {showVisuals && renderSpeedDiagnostic()}
                    </div>
                  </div>
               </motion.div>
            </motion.div>
          )}

          {/* STATE 2.5: DIAGNOSING PROGRESS BAR */}
          {uiState === 'DIAGNOSING_SPEED' && (
            <motion.div key="diagnosing" variants={staggerContainer} initial="initial" animate="animate" exit="exit" className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
              <motion.div variants={blurIn}>
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 uppercase tracking-[0.2em] text-xs font-bold text-brand-accent mb-8 animate-pulse">
                  System Deep Scan
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-navy font-bold uppercase mb-4">
                  Finalizing <span className="text-brand-accent italic">Your Report.</span>
                </h2>
                <p className="text-text-secondary text-xl">
                  Hold tight! We're putting the finishing touches on your custom visibility audit. This usually takes just a few more seconds.
                </p>
              </motion.div>

              <motion.div variants={blurIn} className="space-y-4">
                <div className="w-full bg-black/5 h-4 rounded-full overflow-hidden border border-black/5 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-brand-accent via-brand-navy to-brand-accent rounded-full relative shadow-lg shadow-brand-accent/10"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250px_100%] animate-[shimmer_2s_infinite_linear]"></div>
                  </motion.div>
                </div>
                <div className="flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase mt-2">
                  <span className="text-brand-accent font-bold text-[10px] sm:text-xs">
                    {progress < 15 ? "> Initializing system link..." :
                     progress < 35 ? "> Pinging Google Places API..." :
                     progress < 55 ? "> Parsing DOM structure..." :
                     progress < 75 ? "> Running mobile Lighthouse simulation..." :
                     progress < 90 ? "> Quantifying revenue loss metrics..." :
                     "> Compiling final scan report..."}
                    <span className="animate-pulse">_</span>
                  </span>
                  <span className="text-brand-navy">{Math.floor(progress)}%</span>
                </div>
              </motion.div>
            </motion.div>
          )}
          {uiState === 'REVEAL_FULL' && (
            <motion.div key="reveal" className="relative z-10 text-center w-full">
              {deficit > 0 ? (
                <div className="space-y-16">
                  <motion.div
                    initial={{ scale: 2, opacity: 0, filter: 'blur(20px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <h3 className="absolute left-1/2 -translate-x-1/2 top-0 uppercase tracking-[0.4em] text-brand-accent/50 font-bold text-sm whitespace-nowrap">Est. Lost Jobs Per Month</h3>
                    <div className="text-[12rem] leading-none md:text-[20rem] font-black text-brand-accent font-display tracking-tighter drop-shadow-sm pt-8">
                      <AnimatedNumber value={Math.ceil(deficit * 0.3)} />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="max-w-3xl mx-auto space-y-6 w-full"
                  >
                    <div className="bg-surface p-8 rounded-standard border border-black/5 shadow-lg shadow-black/[0.02]">
                      <div className="flex items-center gap-4 mb-6">
                        <Star className="w-8 h-8 text-brand-accent" />
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy">Reputation Volume</h3>
                      </div>
                      
                      <div className="space-y-4 text-left">
                        <div className="flex items-end gap-4">
                          <span className={`text-6xl font-black leading-none ${(placeData?.user_ratings_total || 0) < 20 ? 'text-brand-accent' : 'text-amber-600'}`}>
                            <AnimatedNumber value={placeData?.user_ratings_total || 0} />
                          </span>
                          <span className="text-2xl text-text-secondary pb-1">/ 80 Min. Standard</span>
                        </div>
                        <div className="text-[11px] text-text-secondary uppercase tracking-[0.1em] font-bold flex items-center gap-1.5 pt-1">
                          <MapPin className="w-3 h-3" aria-hidden="true" />
                           Data sourced directly from live Google Maps
                        </div>
                        <p className={`${(placeData?.user_ratings_total || 0) < 20 ? 'text-brand-accent' : 'text-amber-600'} text-lg md:text-xl font-medium leading-relaxed pt-2`}>
                          Based on your review deficit of <AnimatedNumber value={deficit} />, we estimate you are leaking roughly <strong className={(placeData?.user_ratings_total || 0) < 20 ? 'text-brand-accent' : 'text-amber-700'}><AnimatedNumber value={Math.ceil(deficit * 0.3)} /> jobs per month</strong> to the market leader. You are handing revenue to the loudest competitor in town, not the best.
                        </p>
                      </div>
                    </div>
                    
                    {showVisuals && renderRevenueLeak()}
                    {showVisuals && renderTrustSentiment()}
                    {showVisuals && renderProfileActivity()}
                    {showVisuals && renderAIDiagnostic()}
                    {showVisuals && renderSpeedDiagnostic()}

                    {hasFailingFactor && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className={`mt-12 p-6 md:p-8 rounded-standard border text-center w-full ${failCount === 1 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'}`}
                      >
                        <p className={`text-xl font-bold uppercase tracking-widest mb-2 ${failCount === 1 ? 'text-amber-700' : 'text-brand-accent'}`}>
                          {failCount === 1 ? 'Almost There' : 'Attention'}
                        </p>
                        <p className={`text-lg md:text-xl font-medium ${failCount === 1 ? 'text-amber-800' : 'text-red-900'}`}>
                          {failCount === 1 
                            ? "Your overall setup is incredibly strong, but this one missing piece is quietly costing you high-ticket clients. A 10-minute fix here will dramatically multiply your incoming leads." 
                            : "You are currently failing multiple critical trust and discovery benchmarks. This isn't just an SEO problem—it's an ongoing revenue leak. Every day these bottlenecks remain, you are actively handing high-intent customers directly to your competitors."}
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
                    <div className="relative group/btn w-full max-w-md">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent via-brand-navy to-brand-accent rounded-full blur opacity-30 group-hover/btn:opacity-100 transition duration-1000 animate-pulse-slow"></div>
                      <a 
                        href="https://calendly.com/triggsmt67/30min?back=1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackAnalytics('cta_click', { type: 'remediation_blueprint' })}
                        className="relative w-full flex items-center justify-center gap-3 py-5 bg-brand-accent border border-brand-accent/50 text-white rounded-full text-lg font-bold hover:bg-brand-navy hover:border-brand-navy transition-colors shadow-xl shadow-brand-accent/20"
                      >
                        {hasFailingFactor ? 'Stop Leaking Customers' : 'Claim Remediation Blueprint'}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                    <p className="text-text-secondary text-sm font-medium mt-5 text-center max-w-md leading-relaxed">
                      On this 15-minute call, we will map out the exact steps to fix your digital bottlenecks. Hire us to implement it, or take the blueprint to your current web guy. Zero pressure.
                    </p>
                    {!videoRequested ? (
                      <button 
                        onClick={handleVideoRequest}
                        className="block mt-4 text-sm text-brand-accent hover:text-brand-accent/80 hover:underline cursor-pointer transition-colors text-center font-bold"
                      >
                        Too busy for a call? Request a free 5-minute video teardown instead.
                      </button>
                    ) : (
                      <div className="mt-4 text-sm text-green-600 text-center font-bold animate-pulse">
                        ✓ Teardown requested! We'll email it to {email} shortly.
                      </div>
                    )}
                    <button
                      onClick={handleDownloadReport}
                      className="mt-8 flex items-center justify-center gap-2 text-sm text-text-secondary hover:text-brand-accent transition-colors font-bold"
                    >
                      <Download className="w-4 h-4" />
                      Save Diagnostic Report
                    </button>
                    <a 
                      href="/"
                      className="block mt-4 text-sm text-text-secondary/50 hover:text-text-secondary hover:underline cursor-pointer transition-colors text-center font-medium"
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
                    className="text-[17vw] sm:text-7xl md:text-8xl lg:text-9xl font-black text-green-600 uppercase tracking-tighter"
                  >
                    Dominant.
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="space-y-6 w-full"
                  >
                    <div className="bg-surface p-8 rounded-standard border border-black/5 shadow-lg shadow-black/[0.02]">
                      <div className="flex items-center gap-4 mb-6">
                        <Star className="w-8 h-8 text-brand-accent" />
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-navy">Reputation Volume</h3>
                      </div>
                      
                      <div className="space-y-4 text-left">
                        <div className="flex items-end gap-4">
                          <span className="text-6xl font-black leading-none text-green-600">
                            <AnimatedNumber value={placeData?.user_ratings_total || 0} />
                          </span>
                          <span className="text-2xl text-text-secondary pb-1">/ 80 Min. Standard</span>
                        </div>
                        <div className="text-[11px] text-text-secondary uppercase tracking-[0.1em] font-bold flex items-center gap-1.5 pt-1">
                          <MapPin className="w-3 h-3" aria-hidden="true" />
                           Data sourced directly from live Google Places API
                        </div>
                        <p className="text-green-700 text-lg md:text-xl font-medium leading-relaxed pt-2">
                          You beat the market standard. Your digital word-of-mouth is an absolute fortress. You are not leaking revenue in this category.
                        </p>
                      </div>
                    </div>
                  
                    {showVisuals && renderProfileActivity()}
                    {showVisuals && renderAIDiagnostic()}
                    {showVisuals && renderSpeedDiagnostic()}

                    {hasFailingFactor && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className={`mt-12 p-6 md:p-8 rounded-standard border text-center w-full ${failCount === 1 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'}`}
                      >
                        <p className={`text-xl font-bold uppercase tracking-widest mb-2 ${failCount === 1 ? 'text-amber-700' : 'text-brand-accent'}`}>
                          {failCount === 1 ? 'Almost There' : 'Attention'}
                        </p>
                        <p className={`text-lg md:text-xl font-medium ${failCount === 1 ? 'text-amber-800' : 'text-red-900'}`}>
                          {failCount === 1 
                            ? "Your overall setup is incredibly strong, but this one missing piece is quietly costing you high-ticket clients. A 10-minute fix here will dramatically multiply your incoming leads." 
                            : "You are currently failing multiple critical trust and discovery benchmarks. This isn't just an SEO problem—it's an ongoing revenue leak. Every day these bottlenecks remain, you are actively handing high-intent customers directly to your competitors."}
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
                    <div className="relative group/btn w-full max-w-md">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent via-brand-navy to-brand-accent rounded-full blur opacity-30 group-hover/btn:opacity-100 transition duration-1000 animate-pulse-slow"></div>
                      <a 
                        href="https://calendly.com/triggsmt67/30min?back=1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackAnalytics('cta_click', { type: 'remediation_blueprint' })}
                        className="relative w-full flex items-center justify-center gap-3 py-5 bg-brand-accent border border-brand-accent/50 text-white rounded-full text-lg font-bold hover:bg-brand-navy hover:border-brand-navy transition-colors shadow-xl shadow-brand-accent/20"
                      >
                        {hasFailingFactor ? 'Fix Remaining Bottlenecks' : 'Explore Growth Strategies'}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                    <p className="text-text-secondary text-sm font-medium mt-5 text-center max-w-md leading-relaxed">
                      On this 15-minute call, we will map out how to leverage your dominant position for even more growth. No sales pitch.
                    </p>
                    {!videoRequested ? (
                      <button 
                        onClick={handleVideoRequest}
                        className="block mt-4 text-sm text-brand-accent hover:text-brand-accent/80 hover:underline cursor-pointer transition-colors text-center font-bold"
                      >
                        Too busy for a call? Request a free 5-minute video teardown instead.
                      </button>
                    ) : (
                      <div className="mt-4 text-sm text-green-600 text-center font-bold animate-pulse">
                        ✓ Teardown requested! We'll email it to {email} shortly.
                      </div>
                    )}
                    <button
                      onClick={handleDownloadReport}
                      className="mt-8 flex items-center justify-center gap-2 text-sm text-text-secondary hover:text-brand-accent transition-colors font-bold"
                    >
                      <Download className="w-4 h-4" />
                      Save Diagnostic Report
                    </button>
                    <a 
                      href="/"
                      className="block mt-4 text-sm text-text-secondary/50 hover:text-text-secondary hover:underline cursor-pointer transition-colors text-center font-medium"
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
