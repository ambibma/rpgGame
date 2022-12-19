import { Entity, Mobile } from "../src/classTemplate";

describe('Entity', () => {
  test('It should return an Entity object with a name and health value.', () => {
    const entity = new Entity('test object', 100);
    expect(entity.name).toEqual('test object');
    expect(entity.health).toEqual(100);
  });
  test('Passing nothing to constructor should use default values.', () => {
    const entity = new Entity();
    expect(entity.name).toEqual('Something');
    expect(entity.health).toEqual(1);
  });
})

describe('Mobile', () => {
  test('It should return a Mobile object with a name and health value.', () => {
    const mobile = new Mobile('test mob', 100);
    expect(mobile.name).toEqual('test mob');
    expect(mobile.health).toEqual(100);
  });
  test('A new mobile should have an empty inventory by default.', () => {
    const mobile = new Mobile('test mob', 100);
    expect(mobile.inventory).toHaveLength(0);
  });
})