import os
import glob

replacements = {
    'text-text-brand-red': 'text-text-primary',
    'rounded-full bg-surface px-10 text-base font-semibold text-brand-navy': 'rounded-full bg-brand-red px-10 text-base font-semibold text-white',
    'rounded-full bg-surface px-10 md:px-14 text-base md:text-lg font-semibold text-brand-navy': 'rounded-full bg-brand-red px-10 md:px-14 text-base md:text-lg font-semibold text-white',
    'group-hover:bg-background': 'group-hover:bg-brand-red/90',
    'group-hover:bg-black/5': 'group-hover:bg-brand-red/90',
}

for filepath in glob.glob('src/app/solutions/**/*.tsx', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

print("Done fixing solutions.")
