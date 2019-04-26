import React from 'react';
import TxtWindow from './Window/TxtWindow';


export default function AboutTxt(props) {
  const { window, state, dispatch } = props;

  return (
    <TxtWindow
      window={window}
      windowName='about.txt'
      state={state}
      dispatch={dispatch}
    >
        <u>Selina Chang-Yi Zawacki</u>: Analog Girl in a Digital World
        <br></br><br></br>
        Full-stack software engineer specialized in creating Node.js and PHP APIs, and experienced with cloud services. Also experienced in circuit design and the Arduino language.
        <br></br><br></br>
        Love teaching and always looking for opportunities to do outreach to get young women, minorities and low income students interested in technology.
        <br></br><br></br>
        Website created using React/Redux. <br></br>Last updated: 2/26/19
    </TxtWindow>
  );
}
