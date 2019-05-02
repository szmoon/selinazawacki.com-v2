import React from 'react'
import Window from './../Window/Window';
import WindowContentsImage from './../Window/WindowContentsImage';

import selinaImage from '../../assets/images/pngs/selina-large.png';

export default function AboutImage(props) {
  const { window, state, dispatch } = props;

  return (
    <Window
      window={window}
      windowName='about.txt'
      state={state}
      dispatch={dispatch}
      image={true}
    >
      <WindowContentsImage
        image={selinaImage}
        imageAlt='selina.png'
      />
    </Window>
  );
}
