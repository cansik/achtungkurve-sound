class Kurve {
    init() {
        let sound = new KurveSound();
        sound.init();

        // controls
        let playMusic = document.querySelector('#playMusic');
        playMusic.addEventListener('change', function (e) {
            if (e.target.checked) {
                sound.playTrack();
            } else {
                sound.stopTrack();
            }
        });

        // auto play
        //playMusic.click();

        // controls
        let playSFX = document.querySelector('#playEffects');
        playSFX.addEventListener('pointerdown', function (e) {
            sound.playSoundEffect("menuSwitch");
        });

        playSFX.addEventListener('pointerup', function (e) {
            sound.stopSoundEffect("menuSwitch");
        });
    }
}

let kurve = new Kurve();
document.addEventListener('DOMContentLoaded', kurve.init);