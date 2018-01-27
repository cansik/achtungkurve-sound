class Instruments
{
    static getBass()
    {
        return this.bass;
    }

    static getKick()
    {
        return this.kick;
    }

    static getSnare()
    {
        return this.snare;
    }

    static getPiano() {
        return this.piano;
    }

    static getSFX()
    {
        return this.sfxSynth;
    }
}

// static synths
Instruments.sfxSynth = new Tone.Synth().toMaster();

Instruments.piano = new Tone.PolySynth(4, Tone.Synth, {
    "volume" : -8,
    "oscillator" : {
        "partials" : [1, 2, 1],
    },
    "portamento" : 0.05
}).toMaster();

Instruments.snare = new Tone.NoiseSynth({
    "volume" : -5,
    "envelope" : {
        "attack" : 0.001,
        "decay" : 0.2,
        "sustain" : 0
    },
    "filterEnvelope" : {
        "attack" : 0.001,
        "decay" : 0.1,
        "sustain" : 0
    }
}).toMaster();

Instruments.kick = new Tone.MembraneSynth({
    "envelope" : {
        "sustain" : 0,
        "attack" : 0.02,
        "decay" : 0.8
    },
    "octaves" : 10
}).toMaster();

Instruments.bass = new Tone.MonoSynth({
    "volume" : -10,
    "envelope" : {
        "attack" : 0.1,
        "decay" : 0.3,
        "release" : 2,
    },
    "filterEnvelope" : {
        "attack" : 0.001,
        "decay" : 0.01,
        "sustain" : 0.5,
        "baseFrequency" : 200,
        "octaves" : 2.6
    }
}).toMaster();