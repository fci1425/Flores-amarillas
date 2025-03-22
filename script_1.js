// js/audio.js

// Obtener el elemento de audio
const audioPlayer = document.getElementById('audioPlayer');

// Función para guardar el estado del audio antes de cambiar de página
function saveAudioState() {
    if (audioPlayer) {
        localStorage.setItem('audioCurrentTime', audioPlayer.currentTime);
        localStorage.setItem('audioIsPlaying', !audioPlayer.paused);
    }
}

// Función para recuperar el estado del audio al cargar la página
function loadAudioState() {
    if (audioPlayer) {
        const savedTime = parseFloat(localStorage.getItem('audioCurrentTime')) || 0;
        const isPlaying = localStorage.getItem('audioIsPlaying') === 'true';

        audioPlayer.currentTime = savedTime;
        if (isPlaying) {
            audioPlayer.play();
        }
    }
}

// Reproducir el audio cuando el usuario haga clic en cualquier parte de la página
function playAudioOnClick() {
    if (audioPlayer) {
        document.body.addEventListener('click', () => {
            audioPlayer.play();
        });
    }
}

// Evento para guardar el estado del audio antes de cambiar de página
window.addEventListener('beforeunload', saveAudioState);

// Evento para recuperar el estado del audio al cargar la página
window.addEventListener('load', () => {
    loadAudioState();
    playAudioOnClick(); // Opcional: Reproducir al hacer clic
});