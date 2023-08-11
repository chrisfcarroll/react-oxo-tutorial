
export type XorO = 'X'|'O'


export class GameState{
    playMove(playedAt:number):GameState{
        const nextBoard=this.board.slice()
        nextBoard[playedAt]=this.playerOnMove
        return new GameState(nextBoard,this.nextPlayerOnMove(),[...this.history, this])
    }

    board:string[]
    playerOnMove:XorO
    history:GameState[]
    constructor(board: string[] = Array(10).fill(' '),
                playerOnMove: XorO = 'X',
                history:GameState[] = []
    )
    {
        this.board = board ?? Array(10).fill(' ');
        this.playerOnMove = playerOnMove ?? 'X';
        this.history=history ?? []
    }
    private nextPlayerOnMove = () => this.playerOnMove === 'X' ? 'O' : 'X';
}
