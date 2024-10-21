// Funzione per creare una cartella
function createFolder(event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del modulo

    const folderName = document.getElementById('nome').value; // Ottiene il nome della cartella
    if (folderName) {
        const folderList = document.getElementById('folder-list');

        // Crea un nuovo elemento per la cartella
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folder');

        // Crea un'icona SVG per la cartella
        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("height", "60px");
        svgIcon.setAttribute("width", "60px");
        svgIcon.setAttribute("fill", "#5f6368");
        svgIcon.setAttribute("viewBox", "0 -960 960 960");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z");

        svgIcon.appendChild(path); // Aggiungi il path all'icona SVG

        folderDiv.appendChild(svgIcon); // Aggiungi l'icona SVG alla cartella
        folderDiv.appendChild(document.createTextNode(folderName)); // Aggiungi il nome della cartella

        // Aggiunge la nuova cartella alla lista
        folderList.appendChild(folderDiv);

        // Aggiungi la cartella al localStorage
        saveFolderToLocalStorage(folderName);

        // Aggiunge l'evento di clic per aprire una nuova pagina
        folderDiv.addEventListener('click', () => {
            // Reindirizza a una nuova pagina (ad esempio, "folder.html")
            window.location.href = `folder.html?folderName=${encodeURIComponent(folderName)}`;
        });

        // Pulisce il campo di input
        document.getElementById('nome').value = '';
    }
}

// Funzione per salvare la cartella nel localStorage
function saveFolderToLocalStorage(folderName) {
    // Recupera le cartelle già salvate nel localStorage
    const folders = JSON.parse(localStorage.getItem('folders')) || [];
    folders.push(folderName); // Aggiungi il nuovo nome della cartella
    localStorage.setItem('folders', JSON.stringify(folders)); // Salva l'array aggiornato
}

// Funzione per visualizzare le cartelle salvate
function displayFolders() {
    const folderList = document.getElementById('folder-list');
    folderList.innerHTML = ''; // Pulisce la lista esistente

    const folders = JSON.parse(localStorage.getItem('folders')) || []; // Recupera le cartelle dal localStorage

    // Crea un elemento per ogni cartella e aggiungilo alla lista
    folders.forEach(folderName => {
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folder');

        // Crea un'icona SVG per la cartella
        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("height", "60px");
        svgIcon.setAttribute("width", "60px");
        svgIcon.setAttribute("fill", "#5f6368");
        svgIcon.setAttribute("viewBox", "0 -960 960 960");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z");

        svgIcon.appendChild(path); // Aggiungi il path all'icona SVG

        folderDiv.appendChild(svgIcon); // Aggiungi l'icona SVG alla cartella
        folderDiv.appendChild(document.createTextNode(folderName)); // Aggiungi il nome della cartella

        // Aggiungi l'elemento alla lista
        folderList.appendChild(folderDiv);

        // Aggiungi l'evento di clic per aprire una nuova pagina
        folderDiv.addEventListener('click', () => {
            window.location.href = `folder.html?folderName=${encodeURIComponent(folderName)}`;
        });
    });
}

// Carica le cartelle al caricamento della pagina
window.onload = displayFolders;
