class Kurve {
    init() {
        let sound = new KurveSound();
        sound.init();

        // controls
        let menuSong;
        let playMusic = document.querySelector('#playMusic');
        playMusic.addEventListener('change', function (e) {
            if (e.target.checked) {
                menuSong = sound.playSong("menuSong");
            } else {
                menuSong.stop();
            }
        });

        // auto play
        //playMusic.click();

        // controls
        let sfx;
        let playSFX = document.querySelector('#playEffects');
        playSFX.addEventListener('pointerdown', function (e) {
            sfx = sound.playSoundEffect("menuSwitch");
        });

        playSFX.addEventListener('pointerup', function (e) {
            sfx.stop();
        });
    }
}

let kurve = new Kurve();
document.addEventListener('DOMContentLoaded', kurve.init);