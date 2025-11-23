import os
import subprocess
import sys

def get_file_size_kb(filepath):
    """Returns file size in KB."""
    return os.path.getsize(filepath) / 1024

def compress_image(filepath):
    """Compresses the image if it exceeds 5000KB."""
    size_kb = get_file_size_kb(filepath)
    if size_kb <= 5000:
        return

    print(f"Processing {filepath} ({size_kb:.2f} KB)...")

    # Step 1: Resize to max 2048px
    try:
        subprocess.run(
            ["sips", "-Z", "2048", filepath],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.PIPE
        )
    except subprocess.CalledProcessError as e:
        print(f"Error resizing {filepath}: {e.stderr.decode()}")
        return

    # Check size again
    new_size_kb = get_file_size_kb(filepath)
    if new_size_kb <= 5000:
        print(f"  -> Resized to {new_size_kb:.2f} KB. Done.")
        return

    # Step 2: Convert to JPG quality 85 if still too big
    print(f"  -> Still too big ({new_size_kb:.2f} KB). Converting to JPG (Q85)...")
    
    # Construct new filename with .jpg extension
    base, _ = os.path.splitext(filepath)
    new_filepath = base + ".jpg"

    try:
        subprocess.run(
            ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "85", filepath, "--out", new_filepath],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.PIPE
        )
        
        # Remove original if different extension and conversion successful
        if new_filepath != filepath:
            os.remove(filepath)
            
        final_size_kb = get_file_size_kb(new_filepath)
        print(f"  -> Converted to {new_filepath} ({final_size_kb:.2f} KB).")
        
    except subprocess.CalledProcessError as e:
        print(f"Error converting {filepath}: {e.stderr.decode()}")

def main():
    target_dir = "ads/display/images_v2"
    if not os.path.exists(target_dir):
        print(f"Directory not found: {target_dir}")
        sys.exit(1)

    count = 0
    for root, _, files in os.walk(target_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                compress_image(filepath)
                count += 1
    
    print(f"Finished processing {count} images.")

if __name__ == "__main__":
    main()
