import { Entity } from "../src/classTemplate";

export {Item, Container}

const ITEM_SLOTS = Object.freeze({
  HEAD: "Head",
  BODY: "Body",
  FEET: "Feet",
});

class Item extends Entity {
  constructor(name='An item', health=10) {
    super(name, health);
  }
}

class Container extends Item {
  constructor(name, health) {
    super(name, health);
  }
}