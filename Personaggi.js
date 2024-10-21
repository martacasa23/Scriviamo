function downloadTextFile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const race = document.getElementById('race').value;
    const appearance = document.getElementById('appearance').value;
    const personality = document.getElementById('personality').value;
    const abilities = document.getElementById('abilities').value;

    const characterData = `
Nome: ${name}
Età: ${age}
Razza/Specie: ${race}
Aspetto Fisico: ${appearance}
Carattere: ${personality}
Poteri/Abilità Speciali: ${abilities}
`;

    const blob = new Blob([characterData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'scheda_personaggio.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
