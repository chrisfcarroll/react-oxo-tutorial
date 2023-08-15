import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import OxoBoard from "./UILibrary/OxoBoard";
import {GameState} from "./Models/OxoGame"


function OneOxoBoard() {
  return <OxoBoard className='full-width' gameState={new GameState()}/>;
}
function TwoOxoBoards() {
  return <div style={{display: 'flex', alignContent: 'center', alignItems: "center"}}>
    <OxoBoard className='half-width'/>
    <OxoBoard className='half-width'/>
  </div>;
}

function FourOhFour(){ return (
  <div style={{padding:'2rem', marginTop:'2rem',borderRadius:'1rem', border:'1px solid grey'}}>
    404: Not Found.<p><a href="/">Home</a></p>
  </div>)}

export default function App() {
  // noinspection SpellCheckingInspection
    return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">One Board</Link>
          <Link to="/two-boards">Two Boards</Link>
          <Link to="/four-boards">Four Boards</Link>
        </nav>
        <Routes>
          <Route path="/" element={<OneOxoBoard/>}/>
          <Route path="/two-boards" element= {<TwoOxoBoards/>} />
          <Route path="/four-boards" element= {<div><TwoOxoBoards/><TwoOxoBoards/></div>} />
          <Route path="*" element={<FourOhFour />}/>
        </Routes>
      </Router>
    </div>
  );
}
