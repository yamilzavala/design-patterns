export default class Amplifier {
    on(): void {
        console.log('Amplifier turning on...')
    }

    turnOff(): void {
        console.log('Amplifier turning off...')
    } 

    setSource(source: string): void {
        console.log('Setting source to... ', source)
    }

    setVolume(volumeLevel: number): void {
        console.log('Setting volume to... ', volumeLevel)
    }
}