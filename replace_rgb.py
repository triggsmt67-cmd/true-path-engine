import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace rgb(2, 132, 199) -> rgb(79, 124, 122) for rgba shadows/spotlights
    new_content = content.replace('2, 132, 199', '79, 124, 122')
    new_content = new_content.replace('2,132,199', '79,124,122')

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

print("Done updating rgb values.")
