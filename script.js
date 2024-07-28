// JavaScript to add functionality if needed
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');

    // Example: Log when the audio starts playing
    audio.addEventListener('play', () => {
        console.log('Audio is playing');
    });

    // Example: Log when the audio is paused
    audio.addEventListener('pause', () => {
        console.log('Audio is paused');
    });
});
