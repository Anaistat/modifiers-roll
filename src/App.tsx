import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import AppStore from './stores/app.store'

function App() {
  return (
    <div className="App">
        <p>{AppStore.counter}</p>
        <button onClick={()=>AppStore.setCounter(10)}>set</button>
    </div>
  );
}

export default observer(App);
