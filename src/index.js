import { npcs } from "../src/npcs.js";
import { locations } from "../src/locations.js";
import Room from "../src/room.js"
import Player from "./player.js";
import './css/styles.css';
//import { HashedModuleIdsPlugin } from "webpack";


const rooms = locations.santaCruz.rooms.map((roomTemplate) => new Room(roomTemplate));
const player = new Player();
console.log(rooms);
function handleStartGame(){
  document.getElementById('readyButton').addEventListener("click", spawnGame); 
  let startButton = document.querySelector("div.box.startGamePage");
  let playerCreator = document.getElementById("playerCreator");
  let playerCreatorButton = document.getElementById('readyButton');
  playerCreator.classList.remove("hidden");
  startButton.classList.add("hidden");
  
}
function spawnGame(){
  document.getElementById('readyButton').removeEventListener("click", spawnGame);
  let playerCreator = document.getElementById("playerCreator");
  playerCreator.classList.add('hidden');
  let gameMessages = document.getElementById('narrator');
  let characterSheet = document.getElementById('characterSheet');
  gameMessages.classList.remove('hidden');
  characterSheet.classList.remove('hidden');
  player.name = document.getElementById('nameInput').value;
  let characterName = document.getElementById("characterName");
  let characterHp = document.getElementById("characterHealth");
  let characterLevel = document.getElementById("characterLevel");
  let characterInventory = document.getElementById("characterInventory");
  characterName.innerText = player.name;
  characterLevel.innerText = player.level;
  characterHp.innerText = player.health;
  characterInventory.innerText = player.inventory.toString();  
}

document.getElementById('start-button').addEventListener("click" , handleStartGame);

function handlePlayerCreation() {
  const newPlayer = new Player()
} 


/* let currentLocation = locations.santaCruz.rooms[0];
let greg = spawnNPC(greg);
currentLocation.addToRoom(greg); */
//currentLocation.inventory.push(greg);
//greg.location = locations.santaCruz.bar;