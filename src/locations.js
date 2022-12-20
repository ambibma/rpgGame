import Room from "../src/room.js";
import { npcs } from "../src/npcs.js";

export const locations = {
  santaCruz:{
    name: "Santa Cruz",
    rooms: [
      {
        name: 'The Ash Tray',
        level: 1,
        health: 1000,
        inventory: [
          npcs.greg
        ]
      },
      {
        name: 'The Bus Stop',
        level: 1,
        health: 1000,
        inventory: []
      }
    ]
  }
}

      /* new Room(level=1, name='The Ash Tray', [greg]),
      new Room(level=1, name='Hemoglobe Inn', []),
      new Room(level=1, name='Creepy Ass House', []) */