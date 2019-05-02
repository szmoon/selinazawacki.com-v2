import React from 'react'
import Window from './../Window/Window';
import LinkIcon from '../../components/icons/LinkIcon';

import twitterIcon from '../../assets/images/icons/twitter-icon.png';
import githubIcon from '../../assets/images/icons/github-icon.png';
import linkedinIcon from '../../assets/images/icons/linkedin-icon.png';


export default function NetworkWindow(props) {
  const { window, state, dispatch } = props;

  return (
    <Window
      window={window}
      windowName='network connections'
      state={state}
      dispatch={dispatch}
    >
      <LinkIcon
        iconImage={twitterIcon}
        link='https://twitter.com/selinazawacki'
        text='twitter'
        alt='twitter-icon'
      />
      <LinkIcon
        iconImage={linkedinIcon}
        link='https://www.linkedin.com/in/selina-chang-yi-zawacki/'
        text='linkedin'
        alt='linkedin-icon'
      />
      <LinkIcon
        iconImage={githubIcon}
        link='https://github.com/szmoon'
        text='github'
        alt='github-icon'
      />
    </Window>
  );
}
