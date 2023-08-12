import {GameState,XorO} from "../Models/OxoGame"

describe('When a new Noughts and Crosses game is created', ()=>{

    test('The game has 9 playable squares', ()=>{

    let state= new GameState()
    for(let i= 1; i <= 9 ; i++){
        const player = state.playerOnMove
        state=state.playMove(i)
        expect(state.board[i]).toBe(player)
    }
})
})