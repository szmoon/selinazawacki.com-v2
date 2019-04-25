import React, { useState } from 'react';
import TopBar from './TopBar';
import GreyBar from './GreyBar';
import { increaseZ, updateWindowPosition } from '../../Actions';
import Draggable from 'react-draggable'; 

export default function Window(props) {
  const { window, windowName, state } = props;
  // const [mouseBegin, setMouseBegin] = useState([0,0]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  // console.log('init', mouseX);
  // const windowState = state.state[window];

  async function startDrag(e) {
    let coords =[];
    if(e.clientX) { coords = [e.clientX, e.clientY]; } 
    // else { coords = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]; }
    await setMouseX(coords[0]);
    await setMouseY(coords[1]);
  }

  function endDrag(e) {
    // let mouseBegin = [mouseX,mouseY];
    // console.log('begin', mouseBegin);
    let coords =[];
    if(e.clientX) { coords = [e.clientX, e.clientY]; } 
    // console.log('end', coords);
    let diff = [coords[0]-mouseX,coords[1]-mouseY];
    console.log('diff', diff);
    // let newPos = [windowState.position[0] + diff[0], windowState.position[1] + diff[1],];
    let newPos = [0,0];
    // setMouseX(windowState.position[0] + diff[0]);
    updateWindowPosition(window, newPos, state.state, state.dispatch);
  }

  // function handleDrag(e, ui){

  // }

  // console.log(state);
  console.log('rendering position', state.state[window].position);
  let style = {
    window: {
      position: 'absolute',
      width: state.state[window].size[0],
      height: state.state[window].size[1],
      left: state.state[window].position[0],
      top: state.state[window].position[1],
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
      zIndex: state.state[window].zIndex,
    },
    windowCont: {
      width: '100%',
      height: '87%',
      margin: 'auto',
      padding: '10px', //maybe remove
    }
  }

  // if (windowState.open === true) {
    return (
      // <Draggable handle="strong" onStart={startDrag} onStop={endDrag}>
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
  // } else {
  //   return(
  //     null
  //   );
  // }


  
}
