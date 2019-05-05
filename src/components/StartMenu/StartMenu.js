import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import MiddleContent from './MiddleContent';
import { mainBlue } from '../../assets/colors';

export default function StartMenu(props) {
  const { state, dispatch } = props;

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
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: state.startMenu.zIndex,
    },
  }

  // if zindex is higher than all zindexes, startmenu should be open
  if (state.startMenu.zIndex >= state.highestZIndex  && state.startMenu.zIndex !== 0) {
    return (
      <div id='startMenu' style={style.startMenu}>
        <TopBar 
          state={state}
        />
        <MiddleContent />
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
