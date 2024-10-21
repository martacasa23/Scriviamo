function downloadTextFile() {
    // Seleziona gli elementi del DOM in base ai loro ID
    const fontSelect = document.getElementById('font-select'); // Selettore per il font
    const fontSizeInput = document.getElementById('font-size'); // Selettore per la dimensione del font
    const colorInput = document.getElementById('color-select'); // Selettore per il colore del testo
    const textArea = document.getElementById('text-area'); // Area di testo principale
    const titleInput = document.getElementById('title'); // Input per il titolo
    const saveButton = document.getElementById('save-button'); // Bottone per salvare il testo
    const charCountDisplay = document.getElementById('output'); // Selezione del contatore di caratteri

    // Aggiunge un evento per cambiare il font dell'area di testo quando viene selezionato un nuovo font
    fontSelect.addEventListener('change', () => {
        textArea.style.fontFamily = fontSelect.value; // Cambia il font in base alla selezione
    });

    // Funzione per cambiare la dimensione del font nell'area di testo
    function changeFontSize(size) {
        textArea.style.fontSize = size + 'px'; // Cambia la dimensione del font
    }

    // Funzione per cambiare il colore del testo nell'area di testo
    function changeTextColor(input) {
        textArea.style.color = input.value; // Cambia il colore del testo in base al valore selezionato
    }

    // Funzione per cambiare il colore del titolo
    function changeTitleColor(input) {
        const title = document.getElementById('title'); // Seleziona il titolo
        title.style.color = input.value; // Cambia il colore del titolo in base al valore selezionato
    }

    // Funzione per aggiornare il contatore di caratteri
    function updateCharacterCount() {
        charCountDisplay.textContent = textArea.value.length; // Aggiorna il contatore con il numero di caratteri presenti nell'area di testo
    }

    // Aggiungi l'evento di input all'area di testo per aggiornare il contatore di caratteri
    textArea.addEventListener('input', updateCharacterCount); // Quando c'è un input nell'area di testo, chiama la funzione di aggiornamento

    // Raccogli i dati da salvare
    const characterData = `Titolo: ${titleInput.value}\n\nTesto: ${textArea.value}`;

    // Crea un blob con i dati del personaggio
    const blob = new Blob([characterData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'la_tua_storia.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Aggiungi un evento al bottone per salvare il testo
saveButton.addEventListener('click', downloadTextFile);
