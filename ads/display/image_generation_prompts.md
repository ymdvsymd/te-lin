# Gemini 3 Pro Image 用 画像生成プロンプト

以下のプロンプトは、Google レスポンシブディスプレイ広告用の画像アセットを生成するために設計されています。
各プロンプトは、LPのテーマである「老荘思想」「水」「自然」「癒やし」に基づいています。

## 共通設定 (Common Settings)
全てのプロンプトで以下のスタイルキーワードを適用することを推奨します。

**Style Keywords:**
`photorealistic, 8k resolution, highly detailed, soft natural lighting, serene atmosphere, cinematic composition, professional photography, depth of field`

**Negative Prompts (避けるべき要素):**
`text, watermark, blurry, distorted, low quality, cartoon, anime, illustration, people, faces, busy, chaotic, dark, gloomy`

---

## 1. 横向き画像 (Landscape) - アスペクト比 1.91:1
**推奨サイズ:** 1200x628

### Landscape 01: 自然A (穏やかな川)
**Concept:** LPのメインビジュアルを想起させる、穏やかに流れる川の風景。
**Prompt:**
```
A wide landscape photograph of a calm river flowing gently through a lush green valley, soft morning sunlight reflecting on the water surface, peaceful and soothing atmosphere, photorealistic, 8k, nature photography, wide angle shot --ar 1.91:1
```

### Landscape 02: 自然B (水のクローズアップ)
**Concept:** 水の透明感と静寂を表現したクローズアップ。
**Prompt:**
```
Close-up shot of clear water ripples, crystal clear blue water texture, soft focus, zen garden atmosphere, purity, tranquility, macro photography, high detail, bright and airy --ar 1.91:1
```

### Landscape 03: テキスト背景A (青空)
**Concept:** コピーを配置するための、余白のある青空。
**Prompt:**
```
Vast clear blue sky with fluffy white clouds, plenty of negative space in the center for text, bright and hopeful atmosphere, summer day, minimalist composition, nature background --ar 1.91:1
```

### Landscape 04: テキスト背景B (和紙テクスチャ)
**Concept:** 「上善如水」などの和風コピーに合う、高品質な和紙のテクスチャ。
**Prompt:**
```
High quality Japanese Washi paper texture, cream colored, subtle fibers visible, soft lighting, elegant and traditional background, minimalist, macro shot, top down view --ar 1.91:1
```

### Landscape 05: 抽象 (水の流れ)
**Concept:** 水の流れを抽象化した、柔らかい曲線のグラフィック。
**Prompt:**
```
Abstract 3D flowing liquid art, soft blue and white gradients, smooth curves resembling water, elegant and modern design, soothing motion, ethereal atmosphere, high quality render --ar 1.91:1
```

---

## 2. スクエア画像 (Square) - アスペクト比 1:1
**推奨サイズ:** 1200x1200

### Square 01: アイコンA (水滴)
**Concept:** シンプルで美しい水滴のアイコン的イメージ。
**Prompt:**
```
A single perfect water droplet falling into a calm pool, creating a circular ripple, centered composition, macro photography, high speed shot, crystal clear, blue tones, zen concept --ar 1:1
```

### Square 02: アイコンB (蝶)
**Concept:** 荘子の「胡蝶の夢」を象徴する蝶のイメージ。
**Prompt:**
```
A beautiful blue butterfly resting on a green leaf, soft bokeh background, sunlight filtering through leaves, nature photography, macro shot, detailed wings, peaceful moment --ar 1:1
```

### Square 03: テキスト背景 (和モダン)
**Concept:** 大きな文字を配置するための、落ち着いた和モダンな背景。
**Prompt:**
```
Minimalist Zen garden sand patterns, raked sand circles, soft natural stone, top down view, peaceful and meditative background, neutral colors, high detail texture --ar 1:1
```

### Square 04: 自然 (川の風景・スクエア)
**Concept:** 横向きの自然風景をスクエアにトリミングしたような構図。
**Prompt:**
```
A serene river flowing through a forest, sunlight streaming through trees, lush greenery, calming nature scene, balanced composition for square format, photorealistic, 8k --ar 1:1
```

### Square 05: イラスト (仙人・自然)
**Concept:** 仙人や自然の中で佇む人のシンプルな線画風イラスト（※これのみイラストスタイル）。
**Prompt:**
```
Simple ink wash painting style illustration of a sage sitting by a river, traditional Chinese art style, black ink on white paper, minimalist, zen philosophy, peaceful, artistic --ar 1:1
```

---

## 3. ロゴ用素材 (Logo Elements)

### Symbol: 水滴と本
**推奨サイズ:** 600x600
**Concept:** 水滴と本を組み合わせたシンボルマークのアイデア。
**Prompt:**
```
Minimalist logo design symbol, combining a water droplet and an open book, clean lines, modern flat design, blue and white colors, vector art style, isolated on white background --ar 1:1
```

### Symbol and Text: 横長ロゴ
**推奨サイズ:** 1200x300
**Concept:** シンボルマークと「老荘思想ガイド」というテキストを組み合わせた横長レイアウト。
**Prompt:**
```
Wide logo design, featuring a minimalist blue water droplet symbol on the left, followed by the text "老荘思想ガイド" in elegant Japanese serif font, clean white background, modern corporate identity style, vector graphics, high resolution --ar 4:1
```
