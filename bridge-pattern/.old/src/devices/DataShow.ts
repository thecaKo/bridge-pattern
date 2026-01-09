import { Device } from "./Device";

export class DataShow implements Device {
  turnOff(): void {
    console.log("data-show turning off");
  }
  turnOn(): void {
    console.log("data-show turning on");
  }
  setVolume(level: number): void {
    console.log(`data-show volume is ${level}`);
  }
}
