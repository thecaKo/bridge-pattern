import { Ranger } from "./characters/Ranger";
import { Warrior } from "./characters/Warrior";
import { Bow } from "./weapons/Bow";
import { Sword } from "./weapons/Sword";



const warrior = new Warrior(new Bow())
const ranged = new Ranger(new Sword())

warrior.attack()
ranged.attack()