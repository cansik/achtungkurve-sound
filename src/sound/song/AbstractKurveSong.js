class AbstractKurveSong extends AbstractSound
{
    constructor(){
        super();

        this.tracks = [];
    }

    init(bpm) {
        super.init();

        // bpm
        this.bpm = bpm;

        // instruments
        this.piano = Instruments.getPiano();
        this.bass = Instruments.getBass();

        // percussion
        this.kick = Instruments.getKick();
        this.snare = Instruments.getSnare();

        // set global track values
        Tone.Transport.bpm.value = bpm;
    }

    play()
    {
        super.play();
    }

    stop()
    {
        super.stop();

        this.tracks.forEach(function(e) {
            e.stop();
        });
    }
}