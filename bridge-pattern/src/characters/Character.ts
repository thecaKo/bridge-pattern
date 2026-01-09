import { Weapon } from "../weapons/Weapon";

export abstract class Character {
    protected weapon: Weapon

    constructor(weapon: Weapon){
        this.weapon = weapon
    }

    setWeapon(weapon: Weapon){
        this.weapon = weapon
    }

    abstract attack(): void
}