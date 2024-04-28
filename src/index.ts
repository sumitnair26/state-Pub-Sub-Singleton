import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(()=>{
    games.push({
        id: Math.random().toString(),
        whitePlayerName:`Sumit`,
        blackPlayerName:`Somu`,
        moves:[]
    })
},5000)