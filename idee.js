function downloadIdeaSheet() {
    const ideaTitle = document.getElementById('idea-title').value;
    const ideaDescription = document.getElementById('idea-description').value;
    const characters = document.getElementById('characters').value;
    const setting = document.getElementById('setting').value;
    const conflict = document.getElementById('conflict').value;

    const ideaData = `
Titolo Idea: ${ideaTitle}
Descrizione: ${ideaDescription}
Personaggi Coinvolti: ${characters}
Ambientazione: ${setting}
Conflitto Principale: ${conflict}
    `;

    const blob = new Blob([ideaData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'scheda_idea.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
