import { Weapon } from "./Weapon";

export class Bow implements Weapon {
    public type = "Bow";

    attack(): void {
        console.log("attacking with a bow")
    }

}