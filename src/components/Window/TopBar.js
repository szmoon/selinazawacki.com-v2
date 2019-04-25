import React from 'react'
import CloseButton from './CloseButton';

export default function TopBar(props) {
  const { window, text, state } = props;

  const style = {
    topBar: {
      position: 'relative',
      top: '0px',
      width: '100%',
      height: '35px',
      backgroundColor: '#7cbeeb',
      borderTopLeftRadius: '9px',
      borderTopRightRadius: '9px',
    },
    topBarP: {
      fontWeight: 'bold',
      color: '#ffffff',
      float: 'left',
      margin:'0',
      marginLeft: '10px',
      position: 'absolute',              
      top: '50%',                        
      transform: 'translate(0, -50%)',
    },
  }

  return (
    <div style={style.topBar}>
      <p style={style.topBarP}>{text}</p>
      <CloseButton window={window} state={state} />
    </div>
  );
}
