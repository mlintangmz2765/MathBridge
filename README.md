# MathBridge - AI Formula Copier

[![Version](https://img.shields.io/badge/version-1.0.0--stable-0b9d58.svg)](https://github.com/mlintangmz2765/MathBridge)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

MathBridge is a lightweight browser extension designed to resolve the compatibility gap between web-based AI platforms and document editors. It enables seamless extraction and conversion of TeX-based formulas into editable high-fidelity formats.

## Key Features

- **Automated TeX Extraction**: Detects and extracts raw LaTeX source from Gemini, ChatGPT, DeepSeek, Claude, and Perplexity.
- **Office Math Object Injection**: Converts formulas into MathML wrappers supported by Microsoft Word for native equation editing.
- **Unicode Math Mapping**: Implements a recursive MathML walker to generate high-fidelity plain text for non-TeX environments (e.g., Notepad, messaging apps).
- **High-Resolution Rendering**: Provides PNG export with transparency, utilizing a sanitized headless rendering process to ensure visual consistency across different web themes.
- **Zero-Config Integration**: Injects unobtrusive copy triggers directly into the AI's rendering layer.

## Installation

### Manual Loading (Developer Mode)
1. Clone the repository:
   ```bash
   git clone https://github.com/mlintangmz2765/MathBridge.git
   ```
2. Navigate to `chrome://extensions/` in Google Chrome.
3. Enable **Developer mode**.
4. Select **Load unpacked** and point to the project directory.

## Technical Implementation

MathBridge operates by intercepting the DOM after KaTeX/MathJax rendering. It retrieves the underlying TeX source and uses an internal KaTeX instance to generate a presentation MathML tree. For plain text conversion, it performs a recursive depth-first traversal of the node tree, mapping MathML tags and attributes to corresponding Mathematical Alphanumeric Symbols in Unicode.

## Requirements

- Google Chrome (or Chromium-based browser)
- Microsoft Word (for MathML/Equation support)

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Developed by mlintangmz | 2026*
