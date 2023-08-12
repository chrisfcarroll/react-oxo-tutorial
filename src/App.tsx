import React from 'react';
import './App.css';
import AboutUser from "./UILibrary/AboutUser";
import Board from "./UILibrary/Board";



export default function App() {
  // noinspection SpellCheckingInspection
    return (
    <div className="App">
        <Board className='full-width'/>
        <div style={{display:'flex', alignContent:'center',alignItems:"center"}}>
          <Board className='half-width'/>
          <Board className='half-width'/>
        </div>
      <br/>
      <AboutUser
          firstName={"Joe"}
          lastName={"Bloggs"}
          imageUrl={'https://i.imgur.com/yXOvdOSs.jpg'}
          avatarSize={{width:90,height:90}}
      />
    </div>
  );
}
