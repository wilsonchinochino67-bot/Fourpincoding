// DOM Elements
const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const preview = document.getElementById('preview');
const themeToggle = document.getElementById('themeToggle');
const resetBtn = document.getElementById('resetBtn');
const autoRefreshBtn = document.getElementById('autoRefresh');

// State
let autoRefreshEnabled = true;
const defaultCode = {
    html: htmlCode.value,
    css: cssCode.value,
    js: jsCode.value
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    updatePreview();
});

// Update Preview
function updatePreview() {
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    const completeHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Preview</title>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>
    `;

    preview.srcdoc = completeHTML;
    saveCode();
}

// Event Listeners for Code Editors
if (autoRefreshEnabled) {
    htmlCode.addEventListener('input', updatePreview);
    cssCode.addEventListener('input', updatePreview);
    jsCode.addEventListener('input', updatePreview);
}

// Auto Refresh Toggle
autoRefreshBtn.addEventListener('click', function() {
    autoRefreshEnabled = !autoRefreshEnabled;
    
    if (autoRefreshEnabled) {
        htmlCode.addEventListener('input', updatePreview);
        cssCode.addEventListener('input', updatePreview);
        jsCode.addEventListener('input', updatePreview);
        autoRefreshBtn.textContent = '🔄 Auto Refresh: ON';
        updatePreview();
    } else {
        htmlCode.removeEventListener('input', updatePreview);
        cssCode.removeEventListener('input', updatePreview);
        jsCode.removeEventListener('input', updatePreview);
        autoRefreshBtn.textContent = '🔄 Auto Refresh: OFF';
    }
});

// Theme Toggle
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'dark');
    }
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
}

// Reset Code
resetBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to reset all code to default? This action cannot be undone.')) {
        htmlCode.value = defaultCode.html;
        cssCode.value = defaultCode.css;
        jsCode.value = defaultCode.js;
        updatePreview();
        alert('Code has been reset to default!');
    }
});

// Save Code to Local Storage
function saveCode() {
    const codeData = {
        html: htmlCode.value,
        css: cssCode.value,
        js: jsCode.value
    };
    localStorage.setItem('fourpinCode', JSON.stringify(codeData));
}

// Load Code from Local Storage
function loadCode() {
    const savedCode = localStorage.getItem('fourpinCode');
    
    if (savedCode) {
        try {
            const codeData = JSON.parse(savedCode);
            htmlCode.value = codeData.html || defaultCode.html;
            cssCode.value = codeData.css || defaultCode.css;
            jsCode.value = codeData.js || defaultCode.js;
        } catch (e) {
            console.error('Error loading saved code:', e);
        }
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + S to save
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCode();
        alert('Code saved!');
    }
    
    // Ctrl/Cmd + R to refresh preview
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        updatePreview();
    }
});

// Tab Support in Textareas
[htmlCode, cssCode, jsCode].forEach(textarea => {
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;
            const newValue = this.value.substring(0, start) + '\t' + this.value.substring(end);
            this.value = newValue;
            this.selectionStart = this.selectionEnd = start + 1;
            
            if (autoRefreshEnabled) {
                updatePreview();
            }
        }
    });
});

console.log('FourPin Coding - Web Developer App Loaded!');
console.log('Welcome to your first day on GitHub!');