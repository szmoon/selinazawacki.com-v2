import React from 'react';

export default function ContainerIcon(props) {
  const { iconImage, link, alt, text} = props;
  
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

  function openUrl(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <div
      style={style.iconBox}
      onDoubleClick={(e) => openUrl(link, e)}
      onTouchEnd={(e) => openUrl(link, e)}
    >
      <img src={iconImage} alt={alt} style={style.icon} />
      <p style={style.iconText}>{text}</p>
    </div>
  );
}
