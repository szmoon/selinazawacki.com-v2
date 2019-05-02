import React from 'react';
import Window from './Window/Window';
import WindowContentsTxt from './Window/WindowContentsTxt';

export default function ContactTxt(props) {
  const { window, state, dispatch } = props;

  return (
    <Window
      window={window}
      windowName='contact.txt'
      state={state}
      dispatch={dispatch}
    >
      <WindowContentsTxt>
        You can reach me at <br></br>szmoon [at] gmail [dot] com
      </WindowContentsTxt>
    </Window>
  );
}
