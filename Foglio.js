// Cambia il font dell'area di testo
function changeFont(font) {
    const textArea = document.getElementById('text-area');
    textArea.style.fontFamily = font;
}

// Cambia la dimensione del font
function changeFontSize(size) {
    const textArea = document.getElementById('text-area');
    textArea.style.fontSize = size + 'px';
}

// Cambia il colore del testo
function changeTextColor(color) {
    const textArea = document.getElementById('text-area');
    textArea.style.color = color;
}

// Cambia il colore del titolo
function changeTitleColor(color) {
    const title = document.getElementById('title');
    title.style.color = color;
}

// Aggiorna il contatore di caratteri
function updateCharacterCount() {
    const textArea = document.getElementById('text-area');
    const charCountDisplay = document.getElementById('output');
    charCountDisplay.textContent = textArea.value.length;
}

// Scarica il testo come file
function downloadTextFile() {
    const titleInput = document.getElementById('title').value;
    const textArea = document.getElementById('text-area').value;
    const characterData = `Titolo: ${titleInput}\n\nTesto: ${textArea}`;
    
    const blob = new Blob([characterData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'la_tua_storia.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
