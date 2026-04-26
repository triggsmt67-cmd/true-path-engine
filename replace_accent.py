import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace brand-red with brand-accent
    new_content = content.replace('brand-red', 'brand-accent')
    # Also replace text-brand-red to text-brand-accent if it's there
    new_content = new_content.replace('text-brand-red', 'text-brand-accent')
    
    # Replace rgb(158, 27, 31) -> rgb(2, 132, 199) for rgba shadows/spotlights
    new_content = new_content.replace('158, 27, 31', '2, 132, 199')
    new_content = new_content.replace('158,27,31', '2,132,199')

    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    process_file(filepath)

for filepath in glob.glob('src/**/*.ts', recursive=True):
    if not filepath.endswith('tailwind.config.ts'):
        process_file(filepath)

for filepath in glob.glob('src/**/*.css', recursive=True):
    process_file(filepath)

print("Done renaming brand-red to brand-accent.")
