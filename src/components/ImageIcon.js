import React from 'react'
import { toggleWindow } from '../Actions';

export default function ContainerIcon(props) {
  const { window, iconImage, alt, text, state, dispatch} = props;
  
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
    iconText: {
      color: '#ffffff',
      fontSize: '16px',
      textShadow: '1px 1px 5px rgb(78, 78, 78)',
      margin: 'auto',
    },
    image: {
      width: '60px',
      margin: 'auto',
      border: '1px solid #dadada'
    },
  }

  return (
    <div
      style={style.iconBox}
      onDoubleClick={() => toggleWindow(window, true, state, dispatch)}
      onTouchEnd={() => toggleWindow(window, true, state, dispatch)}
    >
      <img src={iconImage} alt={alt} style={style.image} />
      <p style={style.iconText}>{text}</p>
    </div>
  );
}
