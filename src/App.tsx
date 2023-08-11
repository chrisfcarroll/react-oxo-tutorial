import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MessageButton from "./UILibrary/MessageButton";
import AboutUser from "./UILibrary/AboutUser";
import Board from "./UILibrary/Board";



function App() {
    const [globalCount,setGlobalCount]=useState(0);
    function handleGlobalClick(){
        setGlobalCount(globalCount+1)
    }
  return (
    <div className="App">
        <Board/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        React Quick Start 1 <MessageButton key="message1" globalCount={globalCount} onGlobalClick={handleGlobalClick}/>
      </p>
      <p>
        React Quick Start 2 <MessageButton key="message2" globalCount={globalCount} onGlobalClick={handleGlobalClick}/>
      </p>
      <AboutUser
          firstName={"Joe"}
          lastName={"Bloggs"}
          imageUrl={'https://i.imgur.com/yXOvdOSs.jpg'}
          avatarSize={{width:90,height:90}}
      />
    </div>
  );
}

export default App;
