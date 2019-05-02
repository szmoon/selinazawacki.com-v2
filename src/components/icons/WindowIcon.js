import React from 'react';
import { toggleWindow } from '../../Actions';

// images for different folder colors
import pinkFolder from '../../assets/images/icons/folder-icon-pink.png';
import mintFolder from '../../assets/images/icons/folder-icon-mint.png';
import purpleFolder from '../../assets/images/icons/folder-icon-purple.png';
import txtIcon from '../../assets/images/icons/txt-icon.png';
import selinaIcon from '../../assets/images/icons/selina-icon.png';
import networkIcon from '../../assets/images/icons/network-icon.png';
import computerIcon from '../../assets/images/icons/computer-icon.png';




export default function WindowIcon(props) {
  const { window, type, alt, text, state, dispatch} = props;
  
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
  let iconImage;
  switch (type) {
    case 'mint':
      iconImage = mintFolder;
      break;
    case 'purple':
      iconImage = purpleFolder;
      break;
    case 'txt':
      iconImage = txtIcon;
      break;
    case 'selina':
      iconImage = selinaIcon;
      break;
    case 'network':
      iconImage = networkIcon;
      break;
    case 'computer':
      iconImage = computerIcon;
      break;
    default:
      iconImage = pinkFolder;
  }

  return (
    <div
      style={style.iconBox}
      // onDoubleClick={() => increaseZ(state.state, state.dispatch)}
      onDoubleClick={() => toggleWindow(window, true, state, dispatch)}
      onTouchEnd={() => toggleWindow(window, true, state, dispatch)}
    >
      <img src={iconImage} alt={alt} style={style.icon} />
      <p style={style.iconText}>{text}</p>
    </div>
  );
}
