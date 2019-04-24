import React from 'react'
import { increaseZ } from '../Actions';

export default function Icon(props) {
  const { window, src, alt, text, state, dispatch} = props;
  
  const style = {
    iconBox: {
      float: 'left',
      margin: '15px',
      width: '80px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    icon: {
      width: '60px',
      margin: 'auto',
    },
    iconText: {
      color: '#ffffff',
      fontSize: '16px',
      textShadow: '1px 1px 5px rgb(78, 78, 78)',
      margin: 'auto',
    },
  }

  return (
    <div style={style.iconBox} onDoubleClick={() => increaseZ(window, state, dispatch)} onTouchEnd='iconClick-here-eventually'>
      <img src={src} alt={alt} style={style.icon} />
      <p style={style.iconText}>{text}</p>
    </div>
  );
}
