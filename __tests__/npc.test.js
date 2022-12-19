import NPC from "../src/npc.js";

describe('NPC', () => {
  test('It should return an NPC object with name, health, and level values.', () => {
    const npc = new NPC(10, 'test npc', 100);
    expect(npc.name).toEqual('test npc');
    expect(npc.health).toEqual(100);
    expect(npc.level).toEqual(10);
  });/* 
  test('Passing nothing to constructor should use default values.', () => {
    const player = new Player();
    expect(player.name).toEqual('Player');
    expect(player.health).toEqual(100);
    expect(player.level).toEqual(1);
  }); */
});