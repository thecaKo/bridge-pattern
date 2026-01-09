import { Character } from "./Character";

export class Warrior extends Character {
    attack(): void {
        if(this.weapon.type !== "Sword"){
            console.log("Attacking with 10 damage")
        } else {
        console.log("Warrir has experience with Sword!")
        console.log("Attacking with 20 damage!")
        }

    }
}