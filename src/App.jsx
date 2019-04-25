import React from 'react';
import './App.css';
import { Store } from './Store';

import Folder from './components/Folder';
import AboutWindow from './components/AboutWindow';

function App() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className='App'>
    {/* {console.log(state)} */}
      <Folder
        window='aboutWindow'
        text='about'
        alt='about-folder'
        state={{ state, dispatch }}
      />
      <AboutWindow state={{ state, dispatch }} />
    </div>
  );
}

export default App;
