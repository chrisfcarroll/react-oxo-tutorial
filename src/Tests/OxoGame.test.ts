import {GameState,XorO} from "../Models/OxoGame"

describe('When a new Noughts and Crosses game is created', ()=>{

    test('The game has 9 playable squares', ()=>{
        let state= new GameState()
        let nineMoveGame=[1,2,3,4,5,6,8,7,9]
        for(let i of nineMoveGame){
            const player = state.playerOnMove
            state=state.playMove(i)
            expect(state.board[i]).toBe(player)
        }
    })

    test('Playing a square changes the player on move and updates the square', ()=>{
        //A
        let state= new GameState()
        let firstPlayer=state.playerOnMove
        //A
        state=state.playMove(1);
        let secondPlayer=state.playerOnMove
        //A
        expect(firstPlayer).not.toBe(secondPlayer)
        expect(state.board[1]).toBe(firstPlayer);
    })

    test('Playing a square twice is ignored', ()=>{
        //A
        let state= new GameState()
        let firstPlayer=state.playerOnMove
        //A
        state=state.playMove(1);
        let secondPlayer=state.playerOnMove
        state=state.playMove(1);

        //A
        expect(state.playerOnMove).toBe(secondPlayer);
        expect(state.board[1]).toBe(firstPlayer);
    })


    test('Game state is not won whilst not won', ()=>{

        let state= new GameState()
        for(let i= 1; i <= 6 ; i++){
            const player = state.playerOnMove
            state=state.playMove(i)
            expect(state.winner).toBeUndefined()
        }
    })
})

describe('When a game is won', ()=>{

    const winsForPlayer1=[
        [1,2,4,5,7],
        [1,2,5,3,9]
    ]
    const winsForPlayer2 = [
        [1,2,4,5,3,8],
        [2,1,3,5,4,9]
    ]

    test.each(
        winsForPlayer1.map(moves=>[moves])
    )('%j is a win for Player 1', (moveList)=>{
        //A
        let state= new GameState()
        const player1=state.playerOnMove;
        //A
        moveList.forEach(i=> state=state.playMove(i))
        //A
        expect(state.winner).toBe(player1)
    })

    test.each(
        winsForPlayer2.map(moves=>[moves])
    )('%j is a win for Player 2', (moveList)=>{
        //A
        let state= new GameState()
        const player1=state.playerOnMove;
        const player2= (player1==='X') ? 'O' : 'X'
        //A
        moveList.forEach(i=> state=state.playMove(i))
        //A
        expect(state.winner).toBe(player2)
    })

    test.each([
        [winsForPlayer1[0]],
        [winsForPlayer2[0]]
    ])('No more squares are playable (test case: %j)',()=>{
        let state= new GameState()
        const player1=state.playerOnMove
        //
        winsForPlayer1[0].forEach(i=>state=state.playMove(i))
        expect(state.winner).toBe(player1)
        //
        for(let i=1; i<=9 ; i++){
            const newstate=state.playMove(i)
            expect(newstate).toEqual(state)
        }
    })

})

describe('When a move is retracted',()=>{

    test('On a new board, nothing is changed',()=>{
        let newGame= new GameState()
        let actual= newGame.retractMove()
        expect(actual).toEqual(newGame)
    })

    test('on an in-progress game, it goes back a move',()=>{
        let state= new GameState()

        for(let i=1; i<=6; i++){
            let nextState=state.playMove(i)
            let retracted=nextState.retractMove()
            expect(retracted).toBe(state)
            state=nextState
        }
    })

    test('on a won game, it is no longer won',()=>{
        //A
        let state= new GameState();
        [1,2,3,4,5,6,7].forEach( i=>state=state.playMove(i))
        expect(state.winner).toBe('X')
        //A
        let retracted=state.retractMove()
        expect(retracted.winner).toBeUndefined()
    })
})