// Otteniamo il riferimento al pulsante di attivazione della barra laterale tramite il suo ID
const toggleButton = document.getElementById('dropdown-btn');
// Otteniamo il riferimento alla barra laterale tramite il suo ID
const sidebar = document.getElementById('sidebar');

// Funzione per attivare/disattivare la visualizzazione della barra laterale
function toggleSidebar() {
    // Aggiunge o rimuove la classe 'close' dalla barra laterale,
    // cambiando il suo stato visivo (aperta o chiusa)
    sidebar.classList.toggle('close');
    // Aggiunge o rimuove la classe 'rotate' dal pulsante,
    // utilizzata per animare la rotazione dell'icona
    toggleButton.classList.toggle('rotate');
    // Chiude tutti i sottomenu se la barra laterale viene modificata
    closeAllSubMenus();
}

// Funzione per attivare/disattivare i sottomenu
function toggleSubMenu(button) {
    // Se il sottomenu successivo non ha la classe 'show',
    // chiudiamo tutti i sottomenu aperti
    if (!button.nextElementSibling.classList.contains('show'))
        closeAllSubMenus();

    // Attiva o disattiva la classe 'show' per il sottomenu
    button.nextElementSibling.classList.toggle('show');
    // Aggiunge o rimuove la classe 'rotate' dal pulsante,
    // per ruotare l'icona associata al sottomenu
    button.classList.toggle('rotate');

    // Se la barra laterale è chiusa, la riapriamo per mostrare il sottomenu
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

// Funzione per chiudere tutti i sottomenu aperti
function closeAllSubMenus() {
    // Seleziona tutti gli elementi <ul> con la classe 'show' 
    // all'interno della barra laterale e li converte in un array
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        // Rimuove la classe 'show' per chiudere il sottomenu
        ul.classList.remove('show');
        // Rimuove la classe 'rotate' dal pulsante del sottomenu
        ul.previousElementSibling.classList.remove('rotate');
    });
}
