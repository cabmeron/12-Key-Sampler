

function playNote(note_path) {
    const player = new Tone.Player(note_path).toDestination();
    Tone.loaded().then(() => {
        player.start();
    }) 
    
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all piano keys and black keys
    const whiteKeys = document.querySelectorAll(".piano-key");
    const blackKeys = document.querySelectorAll(".piano-black-key");

    // Add click event listener to each white key
    whiteKeys.forEach(function (whiteKey, index) {
        const notePath = `sounds/piano/middle_c/W${index}_note.wav`;
        whiteKey.addEventListener("click", function () {

            playNote(notePath);
        });
    });

    // Add click event listener to each black key
    blackKeys.forEach(function (blackKey, index) {
        const notePath = `sounds/piano/middle_c/B${index}_note.wav`;
        blackKey.addEventListener("click", function () {
            playNote(notePath);
        });
    });
});

