import os
import glob

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace button hover styles
    new_content = content.replace('hover:bg-brand-accent/90', 'hover:bg-brand-navy hover:border-brand-navy')
    new_content = new_content.replace('group-hover:bg-brand-accent/90', 'group-hover:bg-brand-navy group-hover:border-brand-navy')

    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    process_file(filepath)

print("Done updating button hover styles.")
