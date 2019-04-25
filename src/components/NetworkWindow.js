import React from 'react'
import Window from './Window/Window';

export default function NetworkWindow(props) {
  const { window, state, dispatch } = props;

  // const style = {
  // }

  return (
    <Window
      window={window}
      windowName='Network'
      state={state}
      dispatch={dispatch}
    />
  );
}
