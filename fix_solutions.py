import os
import glob

replacements = {
    'bg-[#080808]': 'bg-background',
    'bg-[#0a0a0a]': 'bg-surface',
    'bg-[#0d0d0d]': 'bg-surface',
    'text-white': 'text-brand-navy',
    'text-ice': 'text-text-primary',
    'text-secondary': 'text-text-secondary',
    'bg-white/[0.02]': 'bg-surface',
    'bg-white/[0.03]': 'bg-black/5',
    'bg-white/[0.04]': 'bg-black/5',
    'border-white/5': 'border-black/5',
    'border-white/10': 'border-black/5',
    'border-white/20': 'border-black/10',
    'shadow-black/40': 'shadow-black/[0.02]',
    'shadow-black/60': 'shadow-black/[0.04]',
    'shadow-[0_0_40px_-5px_rgba(180,83,9,0.35)]': 'shadow-[0_0_40px_-5px_rgba(158,27,31,0.2)]',
    'shadow-[0_0_50px_-10px_rgba(180,83,9,0.2)]': 'shadow-[0_0_50px_-10px_rgba(158,27,31,0.2)]',
    'text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]': 'text-brand-red',
    'text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-primary': 'text-brand-red',
    'text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] to-primary': 'text-brand-red',
    'bg-primary': 'bg-brand-red',
    'text-primary': 'text-brand-red',
    'border-primary': 'border-brand-red',
    'shadow-[0_0_10px_#FF6B00]': 'shadow-[0_0_10px_rgba(158,27,31,0.5)]',
    'bg-gradient-to-br from-[#0a0a0a] to-transparent': 'bg-surface',
    'bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40': 'bg-gradient-to-r from-brand-red/40 via-brand-red/80 to-brand-red/40',
    'bg-gradient-to-r from-primary/50 via-primary to-primary/50': 'bg-gradient-to-r from-brand-red/50 via-brand-red to-brand-red/50',
    'bg-[#121212]': 'bg-black/5',
    'bg-background text-ice': 'bg-background text-text-primary',
    'selection:bg-primary': 'selection:bg-brand-red',
    'selection:text-white': 'selection:text-white',
    'rgba(255, 107, 0,': 'rgba(158, 27, 31,',
    'rgba(255, 255, 255,': 'rgba(158, 27, 31,',
    'border-white/[0.03]': 'border-black/[0.03]',
    'bg-white/[0.03]': 'bg-black/[0.03]',
    'text-white/[0.6]': 'text-brand-navy/60',
    'hover:bg-white/5': 'hover:bg-black/5',
    'border-white/10': 'border-black/10'
}

for filepath in glob.glob('src/app/solutions/**/*.tsx', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

print("Done replacing.")
