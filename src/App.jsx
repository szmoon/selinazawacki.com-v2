import React, { useEffect } from 'react';
import './App.css';
import { Store } from './Store';
import { increaseHighestZIndex } from './Actions';

import WindowIcon from './components/icons/WindowIcon';
import LinkIcon from './components/icons/LinkIcon';
import AboutWindow from './components/windows/AboutWindow';
import AboutTxt from './components/windows/AboutTxt';
import AboutImage from './components/windows/AboutImage';
import ContactTxt from './components/windows/ContactTxt';
import NetworkWindow from './components/windows/NetworkWindow';
import BottomBar from './components/BottomBar/BottomBar';
import StartMenu from './components/StartMenu/StartMenu';

import computerIcon from './assets/images/icons/computer-icon.png';

function App() {
  const { state, dispatch } = React.useContext(Store);

  const style = {
    iconContainer: {
      width: '65px',
    }
  }

  // increase highest zIndex when anywhere is clicked
  function callIncreaseHighestZAction(e) {
    let path = e.path;
    let clickedStartMenu = path.filter((x) => x.id === 'startMenu');

    if (clickedStartMenu.length === 0) {
      increaseHighestZIndex(state, dispatch);
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', callIncreaseHighestZAction, true);
    document.addEventListener('touchstart', callIncreaseHighestZAction, true);

    return function cleanup() {
      document.removeEventListener('mousedown', callIncreaseHighestZAction, true);
      document.addEventListener('touchstart', callIncreaseHighestZAction, true);
    };
  });

  return (
    <div className='App'>
      <div style={style.iconContainer}>
        <WindowIcon
          window='aboutWindow'
          text='about'
          alt='about-folder'
          state={state}
          dispatch={dispatch}
        />
        <WindowIcon
          window='networkWindow'
          type='network'
          text='network'
          alt='network-folder'
          state={state}
          dispatch={dispatch}
        />
        <WindowIcon
          window='contactTxt'
          type='txt'
          text='contact.txt'
          alt='contact-folder'
          state={state}
          dispatch={dispatch}
        />
        <LinkIcon
          iconImage={computerIcon}
          link='http://blog.selinazawacki.com/'
          text='blog'
          alt='blog-computer-icon'
        />
      </div>
      <AboutWindow window='aboutWindow' state={state} dispatch={dispatch} />
      <AboutTxt window='aboutTxt' state={state} dispatch={dispatch} />
      <AboutImage window='aboutImage' state={state} dispatch={dispatch} />
      <ContactTxt window='contactTxt' state={state} dispatch={dispatch} />
      <NetworkWindow window='networkWindow' state={state} dispatch={dispatch} />

      <BottomBar
        state={state}
        dispatch={dispatch}
      />
      <StartMenu
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
