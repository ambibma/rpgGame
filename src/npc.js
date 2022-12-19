import { Mobile } from "./classTemplate";

export default class NPC extends Mobile {
  constructor(level=1, name='Biff', health=100) {
    super(level, name, health);
  }
}