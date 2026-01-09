import { Weapon } from "./Weapon";

export class Sword implements Weapon {
    public type = "Sword";

    attack(): void {
        console.log("attacking with sword")
    }
}