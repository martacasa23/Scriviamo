function downloadEnvironmentSheet() {
    const location = document.getElementById('location').value;
    const timePeriod = document.getElementById('time-period').value;
    const climate = document.getElementById('climate').value;
    const culture = document.getElementById('culture').value;
    const floraFauna = document.getElementById('flora-fauna').value;
    const history = document.getElementById('history').value;

    const characterData = `
Luogo: ${location}
Periodo Temporale: ${timePeriod}
Clima: ${climate}
Cultura: ${culture}
Flora e Fauna: ${floraFauna}
Storia: ${history}
    `;

    const blob = new Blob([characterData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'scheda_ambientazione.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
