import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';
import Board from "../UILibrary/Board";


describe('When the App renders', ()=>{

  test('App renders game board', ()=>{
    render(<App/>)
    const renderedBoards = screen.getAllByRole('article',{name:/game-board/i})
    expect(renderedBoards.length).toBeGreaterThan(0)
    expect(renderedBoards[0]).toBeVisible()
  })
})

describe('When new Board renders', ()=>{
  test('A new Board component renders a Board with empty squares numbered 1 to 9', ()=>{
    render(<Board/>)
    let squares=screen.getAllByRole('button')
    for(let i= 1; i <= 9; i++){
      expect(squares[i-1]).toHaveAccessibleName('square-'+i.toString())
      expect(squares[i-1]).toHaveTextContent('')
    expect(squares[i-1]).toBeVisible()
    }
  })
})

describe('When playing on the rendered Board', ()=>{

  test('Clicking in a new Board plays an X', ()=>{
    render(<Board/>)
    let square1= screen.getByLabelText('square-1')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
  })

  test('Clicking twice in a new Board plays X then O', ()=>{
    render(<Board/>)
    let square1= screen.getByLabelText('square-1')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
    let square2= screen.getByLabelText('square-2')
    fireEvent.click(square2)
    expect(square2).toHaveTextContent('O')
  })

  test('Playing twice in the same place is ignored', ()=>{
    render(<Board/>)
    let square1= screen.getByLabelText('square-1')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
  })

})

