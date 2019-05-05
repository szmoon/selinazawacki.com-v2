import React from 'react';
import { mainBlue, mainBlueLight } from '../../assets/colors';

import avatarToast from '../../assets/images/avatar-toast.jpg';

export default function TopBar(props) {
  const { state} = props;

  const style = {
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
  }

  let userAvatar = avatarToast;
  // if (state.user === 'Marlin') userAvatar = avatarMarlin;

  return (
    <div style={style.topBar}>
      <img src={userAvatar} alt='avatar-toast' style={style.topBar.avatar}/>
      {state.user}
    </div>
  );
}
