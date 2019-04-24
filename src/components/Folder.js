import React from 'react'
import { increaseZ } from '../Actions';

// images for different folder colors
import pinkFolder from '../assets/images/icons/folder-icon-pink.png';
import mintFolder from '../assets/images/icons/folder-icon-mint.png';
import purpleFolder from '../assets/images/icons/folder-icon-purple.png';

export default function Folder(props) {
  const { window, color, alt, text, state, dispatch} = props;
  
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

  // choose image for icon based on color prop
  let folderImage = pinkFolder;
  if (color === 'mint') folderImage = mintFolder;
  if (color === 'purple') folderImage = purpleFolder;


  return (
    <div
      style={style.iconBox}
      onDoubleClick={() => increaseZ(window, state, dispatch)}
      onTouchEnd={() => increaseZ(window, state, dispatch)}
    >
      <img src={folderImage} alt={alt} style={style.icon} />
      <p style={style.iconText}>{text}</p>
    </div>
  );
}
