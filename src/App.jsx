import React from 'react';
import './App.css';
import { Store } from './Store';

import Icon from './components/Icon';

import folderPink from './assets/images/icons/folder-icon-pink.png';

function App() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className='App'>
    {console.log(state)}
       <Icon window='aboutWindow' text='about' src={folderPink} alt='about-folder' state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
