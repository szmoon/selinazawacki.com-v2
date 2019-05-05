import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import { mainBlue, mainBlueLight } from '../../assets/colors';

// import avatarToast from '../../assets/images/avatar-toast.jpg';


export default function StartMenu(props) {
  const { window, state, dispatch } = props;

  const style = {
    startMenu: {
      position: 'fixed',
      bottom: '45px',
      backgroundColor: 'white',
      border: '5px solid ' + mainBlue,
      boxShadow: '0px 0px 15px #888888',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      width: '350px',
      height: '550px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: state.startMenu.zIndex,
    },
    middle: {
      flexGrow: 1,
    },
  }

  // if zindex is higher than all zindexes, startmenu should be open
  if (state.startMenu.zIndex >= state.highestZIndex) {
    return (
      <div id='startMenu' style={style.startMenu}>
        <TopBar 
          state={state}
        />
        <div style={style.middle}>middle</div>
        <BottomBar
          state={state}
          dispatch={dispatch}
        />
      </div>
    );
  } else {
    return null;
  }
}
