import { Entity, Mobile } from "../src/classTemplate";

describe('Entity', () => {
  test ('It should return an Entity object with a name and health value.', () => {
    const entity = new Entity('test object', 100);
    expect(entity.name).toEqual('test object');
    expect(entity.health).toEqual(100);
  });
})

describe('Mobile', () => {
  test ('It should return a Mobile object with a name and health value.', () => {
    const mobile = new Mobile('test object', 100);
    expect(mobile.name).toEqual('test object');
    expect(mobile.health).toEqual(100);
  });
})