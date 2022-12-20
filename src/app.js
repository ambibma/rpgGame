import { npcs } from "../src/npcs.js";
import { locations } from "../src/locations.js";
import { spawnPlayer, spawnNPC, spawnRoom } from "../src/spawn.js"


const rooms = locations.santaCruz.rooms.map(spawnRoom);
console.log(rooms);


/* let currentLocation = locations.santaCruz.rooms[0];
let greg = spawnNPC(greg);
currentLocation.addToRoom(greg); */
//currentLocation.inventory.push(greg);
//greg.location = locations.santaCruz.bar;