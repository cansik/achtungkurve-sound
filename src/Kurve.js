var Kurve = {
    init: function () {
        var synth = new Tone.MembraneSynth().toMaster();

        //create a loop
        var loop = new Tone.Loop(function (time) {
            synth.triggerAttackRelease("C1", "8n", time)
        }, "4n");

        //play the loop between 0-2m on the transport
        loop.start(0).stop('2m');

        document.querySelector('.playToggle').addEventListener('change', function (e) {
            if (e.target.checked) {
                Tone.Transport.start('+0.1');
            } else {
                Tone.Transport.stop();
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', Kurve.init.bind(Kurve));