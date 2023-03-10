import Player from "../src/player.js";

describe('Item', () => {
  test('It should return an Item object with name, health, and level values.', () => {
    const player = new Player(10, 'test player', 100);
    expect(player.name).toEqual('test player');
    expect(player.health).toEqual(100);
    expect(player.level).toEqual(10);
  });
  test('Passing nothing to constructor should use default values.', () => {
    const player = new Player();
    expect(player.name).toEqual('Player');
    expect(player.health).toEqual(100);
    expect(player.level).toEqual(1);
  });
});