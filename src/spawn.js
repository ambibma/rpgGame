import Player from "../src/player.js";
import NPC from "../src/npc.js";
import Item from "../src/item.js";
import Room from "../src/room.js";

export { spawnPlayer, spawnNPC, spawnRoom };

function spawnPlayer(){

}

function spawnNPC(npcTemplate){
  return new NPC(npcTemplate.level, npcTemplate.name, npcTemplate.health);
}

function spawnItem(itemTemplate){
  return new Item();
}

function spawnRoom(roomTemplate){
  const room = new Room(roomTemplate.level, roomTemplate.name, roomTemplate.health);
  roomTemplate.inventory.forEach((entityTemplate) => {
    let entity;
    if (entityTemplate.type === 'npc') {
      entity = spawnNPC(entityTemplate);
    } else if (entityTemplate.type === 'item') {
      entity = spawnItem(entityTemplate);
    }
    room.addToRoom(entity);
  });
  return room;
}

// Roomtemplate?
/* 
{
  name: 'The Ash Tray',
  level: 1,
  health: 1000,
  inventory: [
    greg
  ]
}

// npcTemplate

greg: {
  type: 'npc',
  level: 1,
  name: 'Greg',
  health: 45
} */