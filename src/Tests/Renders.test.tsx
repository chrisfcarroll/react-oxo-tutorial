import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';
import Board from "../UILibrary/Board";

test('App renders MyButton', ()=>{
  const {container}= render(<App/>)
  const expected = screen.getAllByTestId('button-content')
  expect(expected.length).toBeGreaterThan(1)
})
test('App renders Gameboard', ()=>{
  const {container}= render(<App/>)
  const expected = screen.getByRole('article',{name:/game-board/i})
  expect(expected).toBeVisible()
})

test('A new Board component renders a Board with empty squares numbered 1 to 9', ()=>{
  const {container}= render(<Board/>)
  let squares=screen.getAllByRole('button')
  for(let i= 1; i <= 9; i++){
    expect(squares[i-1]).toHaveAccessibleName('square-'+i.toString())
    expect(squares[i-1]).toHaveTextContent('')
  expect(squares[i-1]).toBeVisible()
  }
})

test('Clicking in a new Board plays an X', ()=>{
  const {container}= render(<Board/>)
  let square1= screen.getByLabelText('square-1')
  fireEvent.click(square1)
  expect(square1).toHaveTextContent('X')
})

test('Clicking twice in a new Board plays X then O', ()=>{
  const {container}= render(<Board/>)
  let square1= screen.getByLabelText('square-1')
  fireEvent.click(square1)
  expect(square1).toHaveTextContent('X')
  let square2= screen.getByLabelText('square-2')
  fireEvent.click(square2)
  expect(square2).toHaveTextContent('O')
})