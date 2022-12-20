import { Entity } from "../src/classTemplate";

export default class Room extends Entity {
  constructor(roomTemplate) {
    super(roomTemplate.level, roomTemplate.name, roomTemplate.health);
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