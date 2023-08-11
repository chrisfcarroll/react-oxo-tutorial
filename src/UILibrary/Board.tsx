import React, {MouseEventHandler, useState} from "react";

function GameSquare({id, gameBoard, onSquareClick} :{id:number, gameBoard:string[], onSquareClick:MouseEventHandler}) {
    return <button className="square" aria-label={'square-'+id} onClick={onSquareClick}>{gameBoard[id]}</button>;
}
class GameState{
    playMove(playedAt:number):GameState{
        const nextBoard=this.board.slice()
        nextBoard[playedAt]=this.playerOnMove
        return new GameState(nextBoard,this.nextPlayerOnMove(),[...this.history, this])
    }

    board:string[]
    playerOnMove:string
    history:GameState[]
    constructor(board: string[] = Array(10).fill(' '),
                playerOnMove: 'X'|'O' = 'X',
                history:GameState[] = []
    )
    {
        this.board = board ?? Array(10).fill(' ');
        this.playerOnMove = playerOnMove ?? 'X';
        this.history=history ?? []
    }
    private nextPlayerOnMove = () => this.playerOnMove === 'X' ? 'O' : 'X';
}

export default function Board(){

    const [game,setGame] = useState(new GameState())

    function handleClick(id:number){
        console.log('clicked',id)
        setGame(game.playMove(id))
    }

    return (<article aria-label="game-board">
        <div className='board-row'>
            <GameSquare id={1} gameBoard={game.board} onSquareClick={()=>handleClick(1)}/>
            <GameSquare id={2} gameBoard={game.board} onSquareClick={()=>handleClick(2)}/>
            <GameSquare id={3} gameBoard={game.board} onSquareClick={()=>handleClick(3)}/>
        </div>
        <div className='board-row'>
            <GameSquare id={4} gameBoard={game.board} onSquareClick={()=>handleClick(4)}/>
            <GameSquare id={5} gameBoard={game.board} onSquareClick={()=>handleClick(5)}/>
            <GameSquare id={6} gameBoard={game.board} onSquareClick={()=>handleClick(6)}/>
        </div>
        <div className='board-row'>
            <GameSquare id={7} gameBoard={game.board} onSquareClick={()=>handleClick(7)}/>
            <GameSquare id={8} gameBoard={game.board} onSquareClick={()=>handleClick(8)}/>
            <GameSquare id={9} gameBoard={game.board} onSquareClick={()=>handleClick(9)}/>
        </div>
    </article> )
}