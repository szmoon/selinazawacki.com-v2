import React from 'react';
import Window from './../Window/Window';
import WindowIcon from '../../components/icons/WindowIcon';
import ImageIcon from '../../components/icons/ImageIcon';

import selinaIcon from '../../assets/images/icons/selina-icon.png';


export default function AboutWindow(props) {
  const { window, state, dispatch } = props;

  return (
    <Window
      window={window}
      windowName='about'
      state={state}
      dispatch={dispatch}
    >
      <WindowIcon
        window='aboutTxt'
        type='txt'
        text='about.txt'
        alt='about-txt-icon'
        state={state}
        dispatch={dispatch}
      />
      <ImageIcon
        window='aboutImage'
        iconImage={selinaIcon}
        text='selina.png'
        alt='selina-img-icon'
        state={state}
        dispatch={dispatch}
      />
    </Window>
  );
}
