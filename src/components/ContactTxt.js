import React from 'react';
import TxtWindow from './Window/TxtWindow';


export default function ContactTxt(props) {
  const { window, state, dispatch } = props;

  return (
    <TxtWindow
      window={window}
      windowName='contact.txt'
      state={state}
      dispatch={dispatch}
    >
      You can reach me at <br></br>szmoon [at] gmail [dot] com
    </TxtWindow>
  );
}
