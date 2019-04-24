import React from 'react';
import './App.css';

import Icon from './components/Icon';

import folderPink from './assets/images/icons/folder-icon-pink.png';

function App() {
  return (
    <div className='App'>
       <Icon text='about' src={folderPink} alt='about-folder' />
    </div>
  );
}

export default App;
