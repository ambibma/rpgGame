import Room from "../src/room.js";
import npcs from "../src/npcs.js";

describe('Room', () =>{
  let room;
  let roomTemplate = {
    name: 'The Ash Tray',
    level: 1,
    health: 1000,
    inventory: [
    ]
  };
  test('it should return a room object with an inventory', ()=>{
    room = new Room(roomTemplate);
    expect(room.inventory).toHaveLength(0);
});
});

//expect(container.inventory).toHaveLength(0);


//[] == []
//false