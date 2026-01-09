import { Device } from "./Device";

export class SmartTV implements Device {
  turnOff(): void {
    console.log("Turning off smart-tv");
  }
  turnOn(): void {
    console.log("Turning on smart-tv");
  }
  setVolume(level: number): void {
    console.log(`smart-tv volume is now ${level}`);
  }
}
