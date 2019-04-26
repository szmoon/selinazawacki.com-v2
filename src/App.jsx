import React from 'react';
import './App.css';
import { Store } from './Store';

import ContainerIcon from './components/ContainerIcon';
import LinkIcon from './components/LinkIcon';
import AboutWindow from './components/AboutWindow';
import AboutTxt from './components/AboutTxt';
import AboutImage from './components/AboutImage';
import ContactTxt from './components/ContactTxt';
import NetworkWindow from './components/NetworkWindow';
import BottomBar from './components/BottomBar/BottomBar';


import computerIcon from './assets/images/icons/computer-icon.png';


function App() {
  const { state, dispatch } = React.useContext(Store);

  const style = {
    iconContainer: {
      width: '65px',
    }
  }

  return (
    <div className='App'>
      <div style={style.iconContainer}>
        <ContainerIcon
          window='aboutWindow'
          text='about'
          alt='about-folder'
          state={state}
          dispatch={dispatch}
        />
        <ContainerIcon
          window='networkWindow'
          type='network'
          text='network'
          alt='network-folder'
          state={state}
          dispatch={dispatch}
        />
        <ContainerIcon
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

      <BottomBar />
    </div>
  );
}

export default App;
