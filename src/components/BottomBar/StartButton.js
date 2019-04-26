import React from 'react'

export default function StartButton() {
  // const { window, text, state, dispatch } = props;

  const style = {
    startButton: {
      float: 'left',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '170px',
      height: '100%',
      borderTopRightRadius: '13px',
      borderBottomRightRadius: '13px',
      backgroundColor: '#56d164',
      boxShadow: '0px 0px 15px #888888',
    },
    startButtonP: {
      fontFamily: '"Lucida Console", Monaco, monospace',
      fontSize: '23px',
      fontWeight: 'bold',
      color: '#ebebeb',
    },
  }

  return (
    <div style={style.startButton}>
      <p style={style.startButtonP}>start</p>
    </div>
  );
}
