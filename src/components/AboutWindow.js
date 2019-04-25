import React from 'react'
import Window from './Window/Window';

export default function AboutWindow(props) {
  const { window, state, dispatch } = props;

  // const style = {
  // }

  return (
    <Window
      window={window}
      windowName='About'
      state={state}
      dispatch={dispatch}
    />
  );
}