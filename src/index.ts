import { startLogger } from "./logger";
import { gameManager } from "./store";

//const gameManager = new GameManager();

startLogger();

setInterval(()=>{
    gameManager.addGame(Math.random().toString())
},5000)