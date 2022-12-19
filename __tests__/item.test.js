import { Item } from "../src/item.js";

describe('Item', () => {
  test('It should return an Item object with a name and health value.', () => {
    const item = new Item('test object', 100);
    expect(item.name).toEqual('test object');
    expect(item.health).toEqual(100);
  });
})