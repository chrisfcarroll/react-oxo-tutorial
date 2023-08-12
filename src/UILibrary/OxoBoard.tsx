import React, {MouseEventHandler, useState} from "react";
import {GameState, type nbsp, unplayedSquare} from "../Models/OxoGame";

function GameSquare({id, gameBoard, onSquareClick} :{id:number, gameBoard:string[], onSquareClick:MouseEventHandler}) {
    return <button className="square" aria-label={'square-'+id} onClick={onSquareClick}>{gameBoard[id]}</button>;
}

export interface HtmlAttributesAndGameState extends React.HTMLAttributes<HTMLElement> {
    gameState?: GameState
}

export default function OxoBoard(props: HtmlAttributesAndGameState) {
    const {gameState, ...attributes}= props
    const [game,setGame] = useState(gameState??new GameState())

    function handlePlayMove(id:number){
        if (game.board[id] !== unplayedSquare) {return;}
        console.log('clicked', id)
        setGame(game.playMove(id))
    }
    function handleRetract(){
        if (!game.history.length)return;
        console.log('retracting', game.history.length)
        setGame(game.retractMove())
    }

    return (<article aria-label="game-board" {...attributes}>
        <div className='board-row'>
            <GameSquare id={1} gameBoard={game.board} onSquareClick={()=>handlePlayMove(1)}/>
            <GameSquare id={2} gameBoard={game.board} onSquareClick={()=>handlePlayMove(2)}/>
            <GameSquare id={3} gameBoard={game.board} onSquareClick={()=>handlePlayMove(3)}/>
        </div>
        <div className='board-row'>
            <GameSquare id={4} gameBoard={game.board} onSquareClick={()=>handlePlayMove(4)}/>
            <GameSquare id={5} gameBoard={game.board} onSquareClick={()=>handlePlayMove(5)}/>
            <GameSquare id={6} gameBoard={game.board} onSquareClick={()=>handlePlayMove(6)}/>
        </div>
        <div className='board-row'>
            <GameSquare id={7} gameBoard={game.board} onSquareClick={()=>handlePlayMove(7)}/>
            <GameSquare id={8} gameBoard={game.board} onSquareClick={()=>handlePlayMove(8)}/>
            <GameSquare id={9} gameBoard={game.board} onSquareClick={()=>handlePlayMove(9)}/>
        </div>
        <div className='board-controls'>
            <button disabled={game.history.length==0} onClick={handleRetract} aria-label='Retract'>Retract</button>
        </div>
    </article> )
}