import React from 'react';
import './App.css';
import { Store } from './Store';

import ContainerIcon from './components/ContainerIcon';
import AboutWindow from './components/AboutWindow';
import AboutImage from './components/AboutImage';
import NetworkWindow from './components/NetworkWindow';


function App() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className='App'>
      <ContainerIcon
        window='aboutWindow'
        text='about'
        alt='about-folder'
        state={state}
        dispatch={dispatch}
      />
      <ContainerIcon
        window='networkWindow'
        type='mint'
        text='network'
        alt='network-folder'
        state={state}
        dispatch={dispatch}
      />
      <AboutWindow window='aboutWindow' state={state} dispatch={dispatch} />
      <AboutImage window='aboutImage' state={state} dispatch={dispatch} />
      <NetworkWindow window='networkWindow' state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
