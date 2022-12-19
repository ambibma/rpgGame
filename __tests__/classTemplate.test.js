import Entity from "../src/classTemplate";

describe('Entity', () => {
  test ('It should return an Entity object with a name and health value.', () => {
    const entity = new Entity('test object', 100);
    expect(entity.name).toEqual('test object');
    expect(entity.health).toEqual(100);
  });
})