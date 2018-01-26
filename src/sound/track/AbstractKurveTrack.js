class AbstractKurveTrack
{
    constructor(){
    }

    init(bpm) {
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
}