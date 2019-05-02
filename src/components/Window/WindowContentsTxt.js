import React from 'react';

export default function WindowContentsTxt(props) {

  let style = {
    textContainer: {
      padding: '5px',
    },
  }

  return (
    <div style={style.textContainer}>
      {props.children}
    </div>
  );

}
