import { Device } from "./Device";

export class Projector implements Device {
  turnOff(): void {
    console.log("Turning off Projector");
  }
  turnOn(): void {
    console.log("Turning on Projector");
  }
  setVolume(level: number): void {
    console.log(`Projector volume is now ${level}`);
  }
}
