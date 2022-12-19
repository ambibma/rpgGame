import { Entity, Mobile } from "../src/classTemplate";

describe('Entity', () => {
  test('It should return an Entity object with name, health, and level values.', () => {
    const entity = new Entity(10, 'test object', 100);
    expect(entity.name).toEqual('test object');
    expect(entity.health).toEqual(100);
    expect(entity.level).toEqual(10);
  });
  test('Passing nothing to constructor should use default values.', () => {
    const entity = new Entity();
    expect(entity.name).toEqual('Something');
    expect(entity.health).toEqual(1);
  });
})

describe('Mobile', () => {
  test('It should return a Mobile object with name, health, and level values.', () => {
    const mobile = new Mobile(10, 'test mob', 100);
    expect(mobile.name).toEqual('test mob');
    expect(mobile.health).toEqual(100);
    expect(mobile.level).toEqual(10);
  });
  test('Passing nothing to constructor should use default values.', () => {
    const mobile = new Mobile();
    expect(mobile.name).toEqual('Biff');
    expect(mobile.health).toEqual(100);
  });
  test('A new mobile should have an empty inventory by default.', () => {
    const mobile = new Mobile();
    expect(mobile.inventory).toHaveLength(0);
  });
})