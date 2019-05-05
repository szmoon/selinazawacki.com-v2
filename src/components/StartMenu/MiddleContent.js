import React from 'react';

import internetIcon from '../../assets/images/icons/internet-icon.png';
import emailIcon from '../../assets/images/icons/email-icon.png';
import paintIcon from '../../assets/images/icons/paint-icon.png';

export default function MiddleContent() {
  const style = {
    middle: {
      padding: '0 10px 0 10px',
      flexGrow: 1,
      line: {
        position: 'relative',
        border: '1px solid lightgrey',
        margin: '15px 30px 15px 30px',
      },
      row: {
        color: '#2e3c5c',
        margin: '15px 0 15px 0',
        display: 'flex',
        alignItems: 'center',
      },
      icon: {
        width: '50px',
        marginRight: '5px',
      }
    },
  }

  return (
    <div style={style.middle}>
      <div style={style.middle.row}>
        <img src={internetIcon} alt='internet-program-icon' style={style.middle.icon}/>
        Internet
      </div>
      <div style={style.middle.row}>
        <img src={emailIcon} alt='email-program-icon' style={style.middle.icon}/>
        Email
      </div>
      <div style={style.middle.line} />
      <div style={style.middle.row}>
        <img src={paintIcon} alt='paint-program-icon' style={style.middle.icon}/>
        Paint
      </div>
    </div>
  );
}
