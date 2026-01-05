export interface Device {
  turnOff(): void;
  turnOn(): void;
  setVolume(level: number): void;
}
