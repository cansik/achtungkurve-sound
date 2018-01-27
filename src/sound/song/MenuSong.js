class MenuSong extends AbstractKurveSong
{
    init()
    {
        super.init(150);
        this.createLoops();
    }

    createLoops()
    {
        let snarePart = new Tone.Loop(function(time){
            this.snare.triggerAttack(time);
        }.bind(this), "2n").start("4n");

        this.tracks = [
            snarePart
        ];
    }
}