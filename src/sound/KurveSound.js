class KurveSound
{
    init() {
        this.soundEffects = {
            'menuSwitch': MenuSwitchEffect
        };


        this.songs = {
            'menuSong': MenuSong
        };
    }

    playSong(name)
    {
        let song = new this.songs[name]();
        song.init();
        song.play();

        // play track
        Tone.Transport.start('+0.1');

        return song;
    }

    playSoundEffect(name)
    {
        let sfx = new this.soundEffects[name]();
        sfx.init();
        sfx.play();
        return sfx;
    }

    stopAllSongs()
    {
        Tone.Transport.stop();
    }
}