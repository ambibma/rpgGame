import { Entity } from "../src/classTemplate";

export {Item, Container}

const ITEM_SLOTS = Object.freeze({
  HEAD: "Head",
  BODY: "Body",
  FEET: "Feet",
});

class Item extends Entity {
  constructor(name, health) {
    super(name, health);
  }
}

class Container {
  constructor() {

  }
}