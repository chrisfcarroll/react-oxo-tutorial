
export type XorO = 'X'|'O'
export type nbsp = '\u00A0'
export const unplayedSquare:nbsp = '\u00A0'


export class GameState{
    playMove(playedAt:number):GameState{
        const nextBoard=this.board.slice()
        nextBoard[playedAt]=this.playerOnMove
        return new GameState(nextBoard,this.nextPlayerOnMove(),[...this.history, this])
    }

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
    }
    private nextPlayerOnMove = () => this.playerOnMove === 'X' ? 'O' : 'X';
}
