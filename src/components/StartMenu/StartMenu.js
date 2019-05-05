import React from 'react';
import { mainBlue, mainBlueLight } from '../../assets/colors';

import avatarToast from '../../assets/images/avatar-toast.jpg';
import logOff from '../../assets/images/log-off.jpg';
import turnOff from '../../assets/images/turn-off.jpg';

export default function StartMenu(props) {
  const { state } = props;

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
    topBar: {
      height: '60px',
      backgroundImage: `linear-gradient(${mainBlue}, ${mainBlueLight})`,
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      avatar: {
        position: 'relative',
        float: 'left',
        width: '45px',
        height: '45px',
        margin: '-3px 10px 0 8px',
        backgroundColor: 'pink',
        borderRadius: '3px',
        border: '2px solid white',
      },
    },
    middle: {
      flexGrow: 1,
      // border: '1px solid red',
    },
    bottomBar: {
      height: '45px',
      paddingTop: '5px',
      paddingRight: '10px',
      backgroundImage: `linear-gradient(${mainBlueLight}, ${mainBlue})`,
      fontSize: '13px',
      color: 'white',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      button: {
        height: '35px',
        margin: '0 8px 0 8px',
        borderRadius: '3px',
        border: '1px solid white',
      },
    },
  }

  // if zindex is higher than all zindexes, startmenu should be open
  if (state.startMenu.zIndex >= state.highestZIndex) {
    return (
      <div style={style.startMenu}>
        <div style={style.topBar}>
          <img src={avatarToast} alt='avatar-toast' style={style.topBar.avatar}/>
          Toast
        </div>
        <div style={style.middle}>middle</div>
        <div style={style.bottomBar}>
          <img src={logOff} alt='avatar-toast' style={style.bottomBar.button}/>
          Log Off
          <img src={turnOff} alt='avatar-toast' style={style.bottomBar.button}/>
          Turn Off
        </div>
      </div>
    );
  } else {
    return null;
  }
}
