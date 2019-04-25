import React from 'react'
import Window from './Window/Window';

export default function AboutWindow(props) {
  const { state } = props;

  // const style = {
  // }

  return (
    <Window
      window='aboutWindow'
      windowName='About'
      state={state}
    />
  );
}
