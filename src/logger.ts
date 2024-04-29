import { GameManager } from "./store"; 

//const gameManager = new GameManager();

export function startLogger() {
    setInterval(()=>{
        console.log(GameManager.getInstance().log());
    },5000)    
}