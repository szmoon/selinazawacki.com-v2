import React from 'react'
import ImageWindow from './Window/ImageWindow';

import selinaImage from '../assets/images/pngs/selina-large.png';

export default function AboutImage(props) {
  const { window, state, dispatch } = props;

  return (
    <ImageWindow
      image={selinaImage}
      imageAlt='selina.png'
      window={window}
      windowName='selina.png'
      state={state}
      dispatch={dispatch}
    />
  );
}
