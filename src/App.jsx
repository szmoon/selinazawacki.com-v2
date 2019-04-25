import React from 'react';
import './App.css';
import { Store } from './Store';

import Folder from './components/Folder';
import AboutWindow from './components/AboutWindow';
import NetworkWindow from './components/NetworkWindow';


function App() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className='App'>
    {/* {console.log(state)} */}
      <Folder
        window='aboutWindow'
        text='about'
        alt='about-folder'
        state={state}
        dispatch={dispatch}
      />
      <Folder
        window='networkWindow'
        color='mint'
        text='network'
        alt='network-folder'
        state={state}
        dispatch={dispatch}
      />
      <AboutWindow window='aboutWindow' state={state} dispatch={dispatch} />
      <NetworkWindow window='networkWindow' state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
