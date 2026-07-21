# 🔐 FourPinCoding - Offline Digital Fortress

A complete offline-first application featuring encrypted TOTP authentication, cryptographic tools, and arcade games.

## ✨ Features

### 🔐 TOTP Authenticator Vault
- Store and manage TOTP codes with real-time countdown rings
- Generate random Base32 secrets
- AES-GCM encrypted import/export (.4pc files)
- Master password protected vault
- Live 6-digit code display with 30-second refresh timer

### 🔧 Crypto Toolkit
- **AES-GCM Encryption** - Password-based encryption/decryption with PBKDF2 key derivation
- **SHA Hashing** - SHA-256, SHA-384, SHA-512 hash generation
- **Base64** - Encode/decode with proper UTF-8 support
- **Password Generator** - Customizable length and character types

### 🎮 Arcade Games
1. **Memory Match** - Classic 8-pair memory tile game with move counter
2. **Fight** - Turn-based AI combat with Attack/Defend/Heal actions
3. **Race** - Tap-speed drag race against AI opponent

### ⚙️ Global Settings
- Player name customization
- Difficulty levels (Easy/Normal/Hard)
- Sound effects toggle
- Game statistics dashboard
- Reset scores / Clear all data options

## 🎨 Design

- **Theme**: Dark cyberpunk with #00ff41 neon green on #0a0c10 black
- **Effects**: Glitch animations, neon glow, glassmorphism cards, scan lines
- **Typography**: Monospace terminal fonts (Courier New, JetBrains Mono)
- **Responsive**: Mobile, tablet, and desktop layouts

## 🔒 Security

- **100% Offline**: All data stored in localStorage
- **Web Crypto API**: Industry-standard cryptography
- **HMAC-SHA1** for TOTP generation
- **AES-GCM** for symmetric encryption
- **PBKDF2** for key derivation (100,000 iterations)
- No external dependencies or API calls

## 📦 Installation

1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required

## 🚀 Usage

### TOTP Vault
1. Click **"Vault"** → **"Add New"**
2. Enter account name, email, and Base32 secret
3. Click **"Add Code"** to save
4. View live TOTP codes with countdown timer
5. Export vault as encrypted `.4pc` file with master password
6. Import vault from `.4pc` file using master password

### Crypto Tools
1. Click **"Crypto"** section
2. Choose tool (Encrypt, Decrypt, Hash, Base64, PassGen)
3. Enter data and click the appropriate button
4. Copy results to clipboard

### Games
1. Click **"Games"** section
2. Select game (Match, Fight, Race)
3. Play and track statistics
4. View best times/scores in Settings

## 💾 Data Storage

All data is stored in browser localStorage:
- `vault` - TOTP codes (JSON array)
- `stats` - Game statistics
- `settings` - User preferences

## 🌐 Browser Support

- Chrome/Chromium 37+
- Firefox 34+
- Safari 11+
- Edge 79+

Requires Web Crypto API and ES6+ support.

## 📝 License

Free to use and modify for personal projects.

## 🔧 Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling with CSS variables and grid
- **JavaScript (ES6+)** - Logic and interactions
- **Web Crypto API** - Encryption and hashing
- **localStorage** - Data persistence

---

**Built with ❤️ for the hacker community**
