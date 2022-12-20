import { Entity } from "../src/classTemplate";
import { Item } from "../src/item.js";
import NPC from "../src/npc.js";

export default class Room extends Entity {
  constructor(roomTemplate) {
    super(roomTemplate.level, roomTemplate.name, roomTemplate.health);
    this.inventory = [];
    roomTemplate.inventory.forEach((entityTemplate) => {
      let entity;
      if (entityTemplate.type === 'npc') {
        entity = new NPC(entityTemplate);
      } else if (entityTemplate.type === 'item') {
        entity = new Item(entityTemplate);
      }
      this.addToRoom(entity);
    });
  }
  addToRoom(entity){
    this.inventory.push(entity);
    entity.location = this;
  }
}
/* 
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
} */


/*     
    this.inventory = []; */
/*     roomTemplate.inventory.forEach((entityTemplate) => {
      let entity;
      if (entityTemplate.type === 'npc') {
        entity = new NPC(entityTemplate);
      }
      this.addToRoom(entity);
    }); */