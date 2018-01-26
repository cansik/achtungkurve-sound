class KurveSound
{
    init() {
        this.soundEffects = {
            'menuSwitch': new MenuSwitchEffect()
        };

        // initialise sfx


        // test for menu track
        this.menuTrack = new MenuTrack();
        this.menuTrack.init();
    }

    playTrack()
    {
        this.menuTrack.load();
        Tone.Transport.start('+0.1');
    }

    stopTrack()
    {
        Tone.Transport.stop();
    }

    playSoundEffect(name)
    {
        let sfx = this.soundEffects[name];
        sfx.init();
        sfx.play();
    }

    stopSoundEffect(name)
    {
        let sfx = this.soundEffects[name];
        sfx.stop();
    }
}