import React from 'react';
import { toggleWindow } from '../../Actions';

export default function CloseButton(props) {
  const { window, state, dispatch } = props;

  const style = {
    closeButton: {
      float: 'right',
      marginRight: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '27px',
      height: '27px',
      borderRadius: '7px',
      border: '1px solid #ffffff',
      backgroundColor: '#ebc3eb',
      cursor: 'default',
    },
    closeButtonP: {
      fontWeight: 'bold',
      fontFamily: '"Lucida Console", Monaco, monospace',
      fontSize: '25px',
      color: '#ffffff',
      margin: 0,
      marginTop: '-2px',
    },
  }

  return (
    <div 
      style={style.closeButton} 
      onMouseDown={() => toggleWindow(window, false, state, dispatch)}
      onTouchStart={() => toggleWindow(window, false, state, dispatch)}
    >
      <p style={style.closeButtonP}>X</p>
    </div>
  );
}
