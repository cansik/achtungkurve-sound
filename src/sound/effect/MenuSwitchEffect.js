class MenuSwitchEffect extends AbstractSoundEffect
{
    init()
    {
        super.init();
        this.synth = Instruments.getSFX();
    }

    play()
    {
        super.play();
        this.synth.triggerAttack("C3");
    }

    stop()
    {
        super.stop();
        this.synth.triggerRelease();
    }
}