import React, { useState } from 'react';
import TopBar from './TopBar';
import GreyBar from './GreyBar';
import { increaseZ, updateWindowPosition } from '../../Actions';
import Draggable from 'react-draggable'; 

export default function Window(props) {
  const { window, windowName, state } = props;
  const [mouseBegin, setMouseBegin] = useState([0,0]);
  const windowState = state.state[window];
  // console.log('STate?', mouseBegin);

  function startDrag(e) {
    // console.log('about position', windowState.position);
    increaseZ(window, state.state, state.dispatch) // bring active window to the top
    let coords = [];
    if(e.screenX) { coords = [e.screenX, e.screenY]; }
    else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    setMouseBegin(coords);
    console.log('mouseBegin', mouseBegin);
  }

  function endDrag(e) {
    let diff;
    // console.log('mouseEnd', [e.screenX, e.screenY]);
    if (e.screenX) { diff = [e.screenX - mouseBegin[0], e.screenY - mouseBegin[1]]; }
    else { diff = [e.changedTouches[0].clientX - mouseBegin[0], e.changedTouches[0].clientY - mouseBegin[1]];}
    console.log('diff',diff); 
    let newPosition = [diff[0] + windowState.position[0], diff[1] + windowState.position[1]];
    
    // this.props.aboutWindowPosition(newPosition);
    updateWindowPosition(window, newPosition, state.state, state.dispatch);
    console.log('new position state', windowState.position);
  }

  
  // console.log(state);
  const style = {
    window: {
      position: 'absolute',
      width: windowState.size[0],
      height: windowState.size[1],
      left: windowState.position[0],
      top: windowState.position[1],
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
      zIndex: windowState.zIndex,
    },
    windowCont: {
      width: '100%',
      height: '87%',
      margin: 'auto',
      padding: '10px', //maybe remove
    }
  }

  if (windowState.open === true) {
    return (
      <Draggable handle="strong" onStart={startDrag} onStop={endDrag}>
        <div style={style.window}> 
          <strong><TopBar window={window} text={windowName} state={state} /></strong>
          <GreyBar />
          {/* <div style={style.windowCont}>
            window content
          </div> */}
        </div>
      </Draggable>
    );
  } else {
    return(
      null
    );
  }


  
}
