# 🎉 Birthday Blast Card

A stunning, interactive birthday celebration card with beautiful animations, music, and confetti effects — perfect for sending virtual birthday wishes. This project is lightweight, responsive, and easy to customize.

[![Preview](https://img.shields.io/badge/Preview-Birthday_Card-pink?style=for-the-badge)](README.md)
[![Responsive](https://img.shields.io/badge/Responsive-All_Devices-green?style=for-the-badge)](README.md)
[![Interactive](https://img.shields.io/badge/Interactive-Animations-blue?style=for-the-badge)](README.md)  
[![Live Demo](https://img.shields.io/badge/%F0%9F%9A%80-Live_Demo-FF6B8B?style=for-the-badge&logo=vercel&logoColor=white)](https://your-live-demo-url.example)

---

## 🎥 Preview

<div align="center">
  <img width="1915" height="903" alt="image" src="https://github.com/user-attachments/assets/931ddd4b-a743-4ca4-b8b6-e0916dc28f00" />

</div>


---

## 🎯 Features

### 🎨 Visual Effects
- Animated floating card with subtle 3D parallax
- Floating balloons and hearts with realistic motion
- Interactive birthday cake with flickering candle
- Fireworks and confetti explosions
- Smooth gradient backgrounds and transitions

### 🎵 Interactive Elements
- Birthday music player (play / pause)
- Confetti trigger button for instant celebration
- Animated counters (Gifts, Candles, Wishes)
- Mouse trail effects and polished button animations

### 📱 Responsive & Touch-Friendly
- Mobile-first layout, touch optimized
- Works well on desktop, tablet, and phones
- Desktop-optimized animations with graceful degradation

### ♿ Accessibility
- Keyboard navigation support
- Screen reader friendly semantics
- High-contrast color options and visible focus indicators

---

## 🛠️ Technologies Used

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome"/>
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white" alt="Google Fonts"/>
  <img src="https://img.shields.io/badge/CSS_Animations-FF6B8B?style=for-the-badge" alt="CSS Animations"/>
</div>

---

## 🚀 Quick Start

Option 1 — Use directly (no install)
1. Download or copy the project files.
2. Open `index.html` in your browser.

Option 2 — Clone the repository
```bash
# Clone the repository
git clone https://github.com/Kirankumarvel/birthday-blast-card.git
cd birthday-blast-card

# Open in browser (mac / windows / linux)
open index.html    # macOS
start index.html   # Windows
xdg-open index.html # Linux
```

No build step. Everything runs client-side.

---

## ⚙️ Customization Guide

Personalize the message
```html
<div class="message-text">
  <span class="quote-open">"</span>
  <span class="quote-text">Your custom message here!</span>
  <span class="quote-close">"</span>
</div>
<p class="signature">- Your Name</p>
```

Change colors (CSS variables)
```css
:root {
  --primary: #FF6B8B;
  --secondary: #FFD166;
  --accent: #06D6A0;
  --dark: #073B4C;
  --light: #FFF7F8;
}
```

Add your own music
- Place `song.mp3` in the project folder or update the audio source:
```html
<audio id="birthdayAudio" preload="auto">
  <source src="your-song.mp3" type="audio/mpeg">
</audio>
```

Adjust animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0) rotateX(1deg); }
  50% { transform: translateY(-20px) rotateX(-1deg); } /* tweak -20px for float height */
}
```

---

## 📁 Project Structure
```
birthday-blast-card/
│
├── index.html          # Main HTML file (all markup & media)
├── style.css           # Styles & animations
├── script.js           # Interactive functionality
├── song.mp3            # Optional background music
├── README.md           # This file
└── assets/             # Images, icons, and extras
```

---

## 🌐 Browser Compatibility
- Chrome 90+ — ✅ Fully supported  
- Firefox 88+ — ✅ Fully supported  
- Safari 14+ — ✅ Fully supported  
- Edge 90+ — ✅ Fully supported  
- Mobile Safari / Chrome Mobile — ✅ Touch-optimized behavior

---

## 📱 Responsive Breakpoints
- Desktop: 1200px+  
- Tablet: 768px — 1199px  
- Mobile Large: 480px — 767px  
- Mobile Small: < 480px

---

## 🎨 Color Palette
- Primary Pink — #FF6B8B (buttons, highlights)  
- Sunshine Yellow — #FFD166 (accents)  
- Mint Green — #06D6A0 (confetti, success)  
- Ocean Blue — #118AB2 (counters, accents)  
- Deep Navy — #073B4C (text)

---

## 🐞 Common Issues & Fixes
- Audio won't autoplay — user interaction (click) is required on many browsers. Use the play button.
- Animations stutter — close unnecessary tabs or reduce animation intensity in `style.css`.
- Confetti not visible — check console for JS errors and ensure `canvas` is present.

---

## 📈 Performance
- Fast initial load (minimal assets)  
- Target: 60 FPS animations on modern devices  
- Keep music file size small to reduce load time

---

## 🤝 Contributing

Contributions welcome — please follow these steps:
```bash
# Fork the repo
git checkout -b feature/YourFeature
# Make changes, then
git commit -m "Add your feature"
git push origin feature/YourFeature
# Open a Pull Request
```
Guidelines:
- Keep CSS modular and well-commented
- Test on multiple screen sizes
- Add or update documentation for changes

---

## 🏷️ License
This project is licensed under the MIT License. See the `LICENSE` file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🙏 Acknowledgments & Resources
- Font Awesome — icons  
- Google Fonts — typography  
- Shields.io — badges  
- Inspiration from interactive greeting card designs and community examples

---

## 📬 Contact
- GitHub Issues: Open an issue in this repo  
- Twitter: [@kirananrik](https://x.com/kirananrik) 

<div align="center">
  Made with ❤️ for birthday celebrations everywhere!  

</div>

Happy Birthday to someone special! 🎂🎈🎉
