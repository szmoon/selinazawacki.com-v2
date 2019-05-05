import React from 'react';
import StartButton from './StartButton';
import TimeBox from './TimeBox';

export default function BottomBar(props) {
  const { state, dispatch } = props;

  const style = {
    bottomBar: {
      position: 'fixed',
      zIndex: 500, 
      bottom: 0, 
      width: '100%',
      height: '45px',
      backgroundColor: '#6cb2e0',
      boxShadow: '0px 0px 15px #888888',
    },
  }

  return (
    <div style={style.bottomBar}>
      <StartButton
        window='startMenu'
        state={state}
        dispatch={dispatch}
      />
      <TimeBox />
    </div>
  );
}
