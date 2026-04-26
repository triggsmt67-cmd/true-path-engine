def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

def get_luminance(rgb):
    a = [v / 255.0 for v in rgb]
    a = [v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4 for v in a]
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722

def get_contrast_ratio(hex1, hex2):
    l1 = get_luminance(hex_to_rgb(hex1))
    l2 = get_luminance(hex_to_rgb(hex2))
    
    light = max(l1, l2)
    dark = min(l1, l2)
    
    return (light + 0.05) / (dark + 0.05)

palette = {
    "Background": "#F7F7F5",
    "Surface": "#FFFFFF",
    "Mist": "#E6ECEF",
    "Primary Navy": "#0F2233",
    "Ink": "#20262C",
    "Slate Blue": "#6F8493",
    "Muted Teal": "#4F7C7A",
    "Lavender Gray": "#B7B5C4",
    "Cool Border": "#D9DEDF"
}

backgrounds = ["Background", "Surface", "Mist"]
foregrounds = ["Primary Navy", "Ink", "Slate Blue", "Muted Teal", "Lavender Gray"]

print("WCAG Contrast Ratio Check (Target >= 4.5:1 for Normal Text, >= 3.0:1 for Large Text)\n")

for bg_name in backgrounds:
    bg_hex = palette[bg_name]
    print(f"--- On {bg_name} ({bg_hex}) ---")
    for fg_name in foregrounds:
        fg_hex = palette[fg_name]
        ratio = get_contrast_ratio(bg_hex, fg_hex)
        status = "FAIL"
        if ratio >= 7.0:
            status = "PASS (AAA)"
        elif ratio >= 4.5:
            status = "PASS (AA)"
        elif ratio >= 3.0:
            status = "PASS (Large Text Only)"
            
        print(f"{fg_name} ({fg_hex}): {ratio:.2f}:1 - {status}")
    print()

# Check white text on Muted Teal (for primary buttons)
print("--- On Muted Teal CTA Button (#4F7C7A) ---")
ratio = get_contrast_ratio("#4F7C7A", "#FFFFFF")
status = "FAIL"
if ratio >= 7.0:
    status = "PASS (AAA)"
elif ratio >= 4.5:
    status = "PASS (AA)"
elif ratio >= 3.0:
    status = "PASS (Large Text Only)"
print(f"White Text (#FFFFFF): {ratio:.2f}:1 - {status}")

