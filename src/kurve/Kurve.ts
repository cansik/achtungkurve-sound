declare var Tone: any;

export class Kurve
{
    init()
    {
        let synth = new Tone.MembraneSynth().toMaster();

        //create a loop
        let loop = new Tone.Loop(function (time : any) {
            synth.triggerAttackRelease("C1", "8n", time)
        }, "4n");

        //play the loop between 0-2m on the transport
        loop.start(0).stop('2m');

        let playToggle = document.querySelector('.playToggle') as HTMLInputElement;

        playToggle.addEventListener('change', function (e : any) {
            if (e.target.checked) {
                Tone.Transport.start('+0.1');
            } else {
                Tone.Transport.stop();
            }
        });

        // auto play
        playToggle.click();
    }
}