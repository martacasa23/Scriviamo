    
   
        // Funzione per caricare i file nella cartella
        function uploadFiles(event) {
            const files = event.target.files;
            const fileList = document.getElementById('file-list');

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileDiv = document.createElement('div');

                // Crea un URL temporaneo per il file
                const fileUrl = URL.createObjectURL(file);
                
                // Crea un link per il file
                const fileLink = document.createElement('a');
                fileLink.href = fileUrl;
                fileLink.textContent = file.name;
                fileLink.target = '_blank';

                fileDiv.appendChild(fileLink);
                fileList.appendChild(fileDiv);

                // Salva il file nel local storage
                saveFileToLocalStorage(file);
            }

            document.getElementById('file-input').value = ''; // Pulisce il campo di input
        }

        // Funzione per salvare il file nel local storage
        function saveFileToLocalStorage(file) {
            const fileData = {
                name: file.name,
                type: file.type,
                size: file.size,
            };

            let files = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
            files.push(fileData);
            localStorage.setItem('uploadedFiles', JSON.stringify(files));
        }

        // Funzione per caricare i file esistenti dal local storage
        function loadFilesFromLocalStorage() {
            const files = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
            const fileList = document.getElementById('file-list');

            files.forEach(file => {
                const fileDiv = document.createElement('div');
                const fileLink = document.createElement('a');
                
                // Crea un URL temporaneo per il file
                const fileUrl = URL.createObjectURL(new Blob([], { type: file.type }));
                
                fileLink.href = fileUrl;
                fileLink.textContent = file.name;
                fileLink.target = '_blank';

                fileDiv.appendChild(fileLink);
                fileList.appendChild(fileDiv);
            });
        }

        // Carica i file esistenti all'apertura della pagina
        window.onload = function() {
            loadFilesFromLocalStorage();
        };
  