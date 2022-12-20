import Room from "../src/room.js";

describe('Room', () =>{
  let room;
  let roomTemplate = {
    name: 'The Ash Tray',
    level: 1,
    health: 1000,
    inventory: []
  };
  test('it should return a room object with an inventory', ()=>{
    room = new Room(roomTemplate);
    expect(room.inventory).toHaveLength(0);
});
  test('it should return a room with greg inside the inventory', ()=>{
    roomTemplate.inventory.push({
      type: 'npc',
      level: 1,
      name: 'Greg',
      health: 45,
      inventory: []
      })
  room = new Room(roomTemplate);
  expect(room.inventory[0].name).toEqual('Greg');
});
});

//expect(container.inventory).toHaveLength(0);


//[] == []
//false