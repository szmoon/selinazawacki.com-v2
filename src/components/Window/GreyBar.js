import React from 'react'

export default function GreyBarExplorer(props) {
  const { barType } = props;

  const style = {
    topBarGrey: {
      float: 'left',
      position: 'relative',
      width: '100%',
      height: '30px',
      backgroundColor: '#cfcfcf',
    },
    p: {
      float: 'left',
      position: 'relative',
      margin: '0px',
      marginLeft: '10px',
      top: '50%',
      transform: 'translate(0, -50%)',
      color: '#525252',
    },
  }

  if (barType === 'txt') {
    return (
      <div style={style.topBarGrey}>
        <p style={style.p}>File</p>
        <p style={style.p}>Edit</p>
        <p style={style.p}>Format</p>
        <p style={style.p}>View</p>
        <p style={style.p}>Help</p>
      </div>
    );
  } else {
    return (
      <div style={style.topBarGrey}>
        <p style={style.p}>File</p>
        <p style={style.p}>Home</p>
        <p style={style.p}>Share</p>
        <p style={style.p}>View</p>
        <p style={style.p}>Manage</p>
      </div>
    );
  }
}
