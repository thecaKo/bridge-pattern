import { Remote } from "./remote";

export class AdvancedRemote extends Remote {
  togglePower(): void {
    console.log("BasicRemote: toggle power");
  }
  volumeUp(): void {
    console.log("BasicRemote: volume up");
  }
  volumeDown(): void {
    console.log("BasicRemote: volume down");
  }

  mute(): void {
    console.log("AdvancedRemote: mute");
  }
}
