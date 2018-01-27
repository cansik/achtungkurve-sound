class KurveTrack
{
    constructor(loop, start)
    {
        this.loop = loop;
        this.start = start;
    }

    play()
    {
        this.loop.start(start);
    }
}