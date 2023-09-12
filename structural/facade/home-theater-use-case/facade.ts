import Amplifier from "./amplifier";
import BlurayPlayer from "./bluray-player";
import Lights from "./lights";
import Tv from "./tv";
import PopcornMaker from "./popcorn-maker";

export class Facade {
    private bluRay: BlurayPlayer;
    private amplifier: Amplifier;
    private lights: Lights;
    private tv: Tv;
    private popcornMaker: PopcornMaker;

    constructor() {
        this.bluRay = new BlurayPlayer();
        this.amplifier = new Amplifier();
        this.lights = new Lights()
        this.tv = new Tv();
        this.popcornMaker = new PopcornMaker()
    }

    public watchMovie(): void {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();

        this.lights.dim();

        this.tv.turnOn();

        this.amplifier.on()
        this.amplifier.setSource('bluray')
        this.amplifier.setVolume(30)

        this.bluRay.on();
        this.bluRay.play()
    }

    public endMovie(): void {
        this.popcornMaker.turnOff()
        this.amplifier.turnOff()
        this.tv.turnOff()
        this.bluRay.turnOff()
    }
}