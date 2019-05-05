import React from 'react';
import { mainBlue, mainBlueLight } from '../../assets/colors';

import logOff from '../../assets/images/log-off.jpg';
import turnOff from '../../assets/images/turn-off.jpg';

export default function BottomBar(props) {
  const { state, dispatch } = props;

  const style = {
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

  return (
    <div style={style.bottomBar}>
      <img src={logOff} alt='avatar-toast' style={style.bottomBar.button}/>
      Log Off
      <img src={turnOff} alt='avatar-toast' style={style.bottomBar.button}/>
      Turn Off
    </div>
  );
}
