import React from 'react';
import './App.css';
import AboutUser from "./UILibrary/AboutUser";
import OxoBoard from "./UILibrary/OxoBoard";
import {GameState} from "./Models/OxoGame"



export default function App() {
  // noinspection SpellCheckingInspection
    return (
    <div className="App">
        <OxoBoard className='full-width' gameState={new GameState()}/>
        <div style={{display:'flex', alignContent:'center',alignItems:"center"}}>
          <OxoBoard className='half-width'/>
          <OxoBoard className='half-width'/>
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
