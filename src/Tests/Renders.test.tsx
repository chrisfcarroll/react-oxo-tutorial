import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';
import OxoBoard from "../UILibrary/OxoBoard";
import {GameState, unplayedSquare} from "../Models/OxoGame"


describe('When the App renders', ()=>{

  test('App renders navigation', ()=>{
    render(<App/>)
    const renderedNavigation = screen.getAllByRole('navigation')
    expect(renderedNavigation.length).toBeGreaterThan(0)
    expect(renderedNavigation[0]).toBeVisible()
  })
})

describe('When new Board renders', ()=>{
  test('A new Board component renders a Board with empty squares numbered 1 to 9', ()=>{
    render(<OxoBoard/>)
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
    render(<OxoBoard/>)
    let square1= screen.getByLabelText('square-1')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
  })

  test('Clicking twice in a new Board plays X then O', ()=>{
    render(<OxoBoard/>)
    let square1= screen.getByLabelText('square-1')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
    let square2= screen.getByLabelText('square-2')
    fireEvent.click(square2)
    expect(square2).toHaveTextContent('O')
  })

  test('Playing twice in the same place is ignored', ()=>{
    render(<OxoBoard/>)
    let square1= screen.getByLabelText('square-1')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
    fireEvent.click(square1)
    expect(square1).toHaveTextContent('X')
  })

  test('Pressing the retract button retracts the last move', ()=>{
    let gameState=new GameState().playMove(1)
    render(<OxoBoard gameState={gameState}/>)
    let retractButton=screen.getByLabelText('Retract')
    //
    fireEvent.click(retractButton)
    //
    let square1= screen.getByLabelText('square-1')
    console.log(square1.outerHTML)
    expect(square1.outerHTML).toMatch('&nbsp;')
  })
})

