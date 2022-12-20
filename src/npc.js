import { Mobile } from "./classTemplate";
import { Item } from "./item";

export default class NPC extends Mobile {
  constructor(npcTemplate) {
    super(npcTemplate.level, npcTemplate.name, npcTemplate.health);
    this.inventory = [];
    npcTemplate.inventory.forEach((entityTemplate) => {
      let entity;
      if (entityTemplate.type === 'item') {
        entity = new Item(entityTemplate);
      }
      this.addToInventory(entity);
    });
  }
  addToInventory(entity) {
    this.inventory.push(entity);
    entity.location = this;
  }
  die() {

  }
}