import { Item, Container } from "../src/item.js";

describe('Item', () => {
  test('It should return an Item object with name, health, and level values.', () => {
    const item = new Item(10, 'test object', 100);
    expect(item.name).toEqual('test object');
    expect(item.health).toEqual(100);
    expect(item.level).toEqual(10);
  });
  test('Passing nothing to constructor should use default values.', () => {
    const item = new Item();
    expect(item.name).toEqual('An item');
    expect(item.health).toEqual(10);
  });
});

describe('Container', () => {
  test('It should return an Item object with name, health, and level values.', () => {
    const container = new Container(10, 'test object', 100);
    expect(container.name).toEqual('test object');
    expect(container.health).toEqual(100);
    expect(container.level).toEqual(10);
  });
  test('A new container should have an empty inventory by default.', () => {
    const container = new Container();
    expect(container.inventory).toHaveLength(0);
  });
});