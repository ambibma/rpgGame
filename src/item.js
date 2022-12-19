import { Entity } from "../src/classTemplate";

export { Item, Container }

const ITEM_SLOTS = Object.freeze({
  HEAD: "Head",
  BODY: "Body",
  FEET: "Feet",
});

class Item extends Entity {
  constructor(level=1, name='An item', health=10) {
    super(level, name, health);
  }
}

class Container extends Item {
  constructor(level, name, health) {
    super(level, name, health);
    this.inventory = [];
  }
}