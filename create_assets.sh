#!/bin/bash

# Define paths
HERO="/Users/to.watanabe/.gemini/antigravity/brain/476cc387-3e5c-4bb6-b03e-0e5b26b0e9b6/hero_raw_1763875857824.png"
EMPATHY="/Users/to.watanabe/.gemini/antigravity/brain/476cc387-3e5c-4bb6-b03e-0e5b26b0e9b6/empathy_raw_1763875868222.png"
PRACTICE="/Users/to.watanabe/.gemini/antigravity/brain/476cc387-3e5c-4bb6-b03e-0e5b26b0e9b6/practice_raw_1763875882686.png"
SELFCARE="/Users/to.watanabe/.gemini/antigravity/brain/476cc387-3e5c-4bb6-b03e-0e5b26b0e9b6/selfcare_raw_1763875892177.png"
OUT_DIR="/Users/to.watanabe/workspace/stop-suicide/ads/display/images"

# Ensure directories exist
mkdir -p "$OUT_DIR/landscape" "$OUT_DIR/square" "$OUT_DIR/logo"

echo "Generating Landscape Images..."
# Landscape Images (1200x628)
convert "$HERO" -resize 1200x -gravity Center -crop 1200x628+0+0 +repage "$OUT_DIR/landscape/landscape_01.png"
convert "$HERO" -resize 1200x -gravity North -crop 1200x628+0+0 +repage "$OUT_DIR/landscape/landscape_02.png"
convert "$PRACTICE" -resize 1200x -gravity Center -crop 1200x628+0+0 +repage "$OUT_DIR/landscape/landscape_03.png"
convert "$SELFCARE" -resize 1200x -gravity Center -crop 1200x628+0+0 +repage "$OUT_DIR/landscape/landscape_04.png"
convert "$EMPATHY" -resize 1200x -gravity Center -crop 1200x628+0+0 +repage "$OUT_DIR/landscape/landscape_05.png"

echo "Generating Square Images..."
# Square Images (1200x1200)
convert "$HERO" -resize 1200x1200^ -gravity Center -crop 1200x1200+0+0 +repage "$OUT_DIR/square/square_01.png"
convert "$PRACTICE" -resize 1200x1200^ -gravity Center -crop 1200x1200+0+0 +repage "$OUT_DIR/square/square_02.png"
convert "$SELFCARE" -resize 1200x1200^ -gravity Center -crop 1200x1200+0+0 +repage "$OUT_DIR/square/square_03.png"
convert "$EMPATHY" -resize 1200x1200^ -gravity Center -crop 1200x1200+0+0 +repage "$OUT_DIR/square/square_04.png"
convert "$HERO" -resize 1200x1200^ -gravity North -crop 1200x1200+0+0 +repage "$OUT_DIR/square/square_05.png"

echo "Generating Logos..."
# Logos
# Square Logo (Text)
convert -size 1200x1200 xc:white -font Arial -pointsize 400 -gravity center -fill black -annotate +0+0 "老荘" "$OUT_DIR/logo/logo_square.png"
# Landscape Logo (Text)
convert -size 1200x300 xc:white -font Arial -pointsize 100 -gravity center -fill black -annotate +0+0 "老荘思想ガイド" "$OUT_DIR/logo/logo_landscape.png"

echo "Done."
