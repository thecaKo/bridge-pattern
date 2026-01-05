import { Device } from "../devices/Device";

export abstract class Remote {
  protected device: Device;
  protected volume = 5;
  protected isOn = false;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.isOn) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
    this.isOn = !this.isOn;
  }

  volumeUp(): void {
    this.volume++;
    this.device.setVolume(this.volume);
  }

  volumeDown(): void {
    this.volume--;
    this.device.setVolume(this.volume);
  }
}
