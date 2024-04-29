interface Game {
    id:string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}

/* Singalton */
export class GameManager {
    games: Game[] = [];
    private static instance: GameManager;
    private constructor() {
        this.games = [];
    }

    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance
        }
        GameManager.instance = new GameManager();
        return GameManager.instance
    }

    addMove(gameId: string, move: string){
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id== gameId);
        game?.moves.push(move)
    }

    addGame(gameId:string) {
        const game = {
            id: gameId,
            whitePlayerName:`Sumit`,
            blackPlayerName:`Somu`,
            moves: []
        }
        this.games.push(game);
    }

    log() {
        console.log(this.games)
    }
}

//export const gameManager = GameManager.getInstance();