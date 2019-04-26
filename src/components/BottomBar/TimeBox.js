import React, { useState } from 'react'
import { format } from 'date-fns';
import volumeIcon from '../../assets/images/pngs/volume.png';

export default function TimeBox() {
  const [currentTime, setCurrentTime] = useState(format(new Date(), 'h:mm'));
  
  const style = {
    timeBox: {
      float: 'right',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '170px',
      height: '100%',
      backgroundColor: '#79bce9',
      boxShadow: '0px 0px 15px #888888',
    },
    timeBoxP: {
      fontFamily: '"Lucida Console", Monaco, monospace',
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#ebebeb',
    },
    miniIcon: {
      position: 'relative',
      margin: '25px 20px 20px 20px',
      height: '18px',
      opacity: '0.8',
    },
  } 

  return (
    <div style={style.timeBox}>
      <p><img src={volumeIcon} alt='volume-icon' style={style.miniIcon} /></p>
      <p style={style.timeBoxP}>{currentTime}</p>
    </div>
  );
}
