// todo: combine with Window.js
import React from 'react';
import TopBar from './TopBar';
import GreyBar from './GreyBar';
import { increaseZ } from '../../Actions';
import Draggable from 'react-draggable'; 

export default function Window(props) {
  const { image, imageAlt, window, windowName, state, dispatch } = props;

  let style = {
    window: {
      position: 'absolute',
      width: state[window].size[0],
      // height: state[window].size[1],
      left: state[window].position[0],
      top: state[window].position[1],
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
      border: '4px solid #7cbeeb',
      backgroundColor: '#f8f8f8',
      boxShadow: '0px 0px 15px #888888',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      zIndex: state[window].zIndex,
    },
    windowCont: {
      position: 'relative',
      width: '100%',
      height: state[window].size[1],
    },
    image: {
      position: 'relative',
      width: '100%',
    },
  }

  function startDrag(e) {
    increaseZ(window, state, dispatch);
  }

  function clickWindow() {
    increaseZ(window, state, dispatch);
  }

  if (state[window].open === true) {
    return (
    <div onClick={clickWindow}>
      <Draggable handle="strong" onStart={startDrag} >
        <div style={style.window}> 
          <strong><TopBar window={window} text={windowName} state={state} dispatch={dispatch} /></strong>
          <GreyBar />
          <div style={style.windowCont}>
            <img src={image} alt={imageAlt} style={style.image} />
          </div>
        </div>
      </Draggable>
      </div>
    );
  } else {
    return(
      null
    );
  }  
}
