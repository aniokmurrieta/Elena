document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    const commandInput = document.getElementById('command');
    const audio = new Audio('sound.mp3');  // Reemplaza 'sound.mp3' con la ruta a tu archivo de audio

    const commands = {
        'activity': 'activity.html',
        'compdays': 'compdays.html',
        'consen': 'consen.html',
        'sumtask': 'sumtask.html',
        'delete': 'delete.html',
        'secret': 'secretcomands.html',
        'idea': 'idea.html',
        'porno': 'nosirve.html',
        'victimas': 'victimas.html',
        'export': 'export.html',
        'agendax': 'agendax.html',
        'genecuentos': 'genecuentos.html',
        'punb': 'punb.html',
        'brain': 'brain.html',
        'pics': 'pics.html',
        'nexus': 'nexus.html',
        'organizator': 'organizator.html',
        'convert': 'convert.html',
        'textlib': 'textlib.html',
        'tasking': 'tasking.html',
        'binarin': 'binarin.html',
        'promedio':'promedio.html',
        'porcentajen':'porcentajen.html',
        'fastnotes':'fastnotes.html',
        'tempcro':'tempcro.html',
       
       
       
        // Añade más comandos y sus páginas correspondientes aquí
    };

    sendButton.addEventListener('click', () => {
        const command = commandInput.value.trim().toLowerCase();
        
        if (commands.hasOwnProperty(command)) {
            audio.play().then(() => {
                // Espera hasta que el audio termine de reproducirse
                audio.addEventListener('ended', () => {
                    window.location.href = commands[command];
                });
            }).catch((error) => {
                console.error('Error al reproducir el audio:', error);
                window.location.href = commands[command];
            });
        } else {
            alert('Comando no reconocido');
        }
    });

    commandInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
    if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("Service Worker registrado"))
        .catch(err => console.log("Error al registrar el Service Worker", err));
}
});
