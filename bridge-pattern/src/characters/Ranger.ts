import { Character } from "./Character";

export class Ranger extends Character {
    attack(): void {
        if(this.weapon.type !== "Bow"){
            console.log("Attacking with 5 damage")
        } else {
        console.log("Ranger has experience with a Bow!")
        console.log("Attacking with 10 damage!")
        }


    }
}