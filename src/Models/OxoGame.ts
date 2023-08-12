import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

export type XorO = 'X'|'O'
export type nbsp = '\u00A0'
export const unplayedSquare:nbsp = '\u00A0'


export class GameState{
    playMove(playedAt:number):GameState{
        if(this.winner)return this
        if (this.board[playedAt] !== unplayedSquare)return this
        //
        const nextBoard = this.board.slice()
        nextBoard[playedAt] = this.playerOnMove
        return new GameState(nextBoard, this.nextPlayerOnMove(), [...this.history, this])
    }
    winner:XorO|undefined
    board:string[]
    playerOnMove:XorO
    history:GameState[]
    constructor(board: string[] = Array(10).fill(unplayedSquare),
                playerOnMove: XorO = 'X',
                history:GameState[] = []
    )
    {
        this.board = board ?? Array(10).fill(unplayedSquare);
        this.playerOnMove = playerOnMove ?? 'X';
        this.history=history ?? []
        this.setWinnerIfWon()
    }
    private nextPlayerOnMove = () => this.playerOnMove === 'X' ? 'O' : 'X';

    private setWinnerIfWon() {
        const wins = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]
        const won=wins.map(line => {
            const player = this.board[ line[0] ]
            if(player===unplayedSquare)return undefined
            //
            if(this.board[ line[1] ]===player && this.board[ line[2] ] === player){
                return player;
            }
            return undefined
        })
        const winner= won.find(p=> p != undefined);
        if(winner){
            this.winner=winner as XorO
            return true;
        }
        return false;
    }
}
