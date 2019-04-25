export const toggleWindow = (window, toggle, state, dispatch) => {
  // decide which window's state to update
  let actionType;
  switch (window) {
    case 'aboutWindow':
      actionType = 'ABOUT_WINDOW_TOGGLE';
        break;
    case 'networkWindow':
      actionType = 'NETWORK_WINDOW_TOGGLE';
        break;
    default:
      actionType = '';
  }

  let payload = state[window];
  payload.open = toggle;

  let dispatchObj = {
    type: actionType,
    payload
  };

  // update window open state
  return dispatch(dispatchObj);
};

export const increaseZ = (window, state, dispatch) => {
  // get current highest zIndex
  const highestZIndex = state.highestZIndex;
  const newHighestZ = highestZIndex + 1;

  // decide which window's state to update
  let actionType;
  switch (window) {
    case 'aboutWindow':
      actionType = 'ABOUT_WINDOW_ZINDEX';
        break;
    case 'networkWindow':
      actionType = 'NETWORK_WINDOW_ZINDEX';
        break;
    default:
      actionType = '';
  }

  let payload = state[window];
  payload.zIndex = newHighestZ;

  let dispatchObj = {
    type: actionType,
    payload
  };

  // update 'global' highestZIndex state
  dispatch({
    type: 'INCREASE_HIGHEST_ZINDEX',
    payload: newHighestZ
  });

  // update window zIndex
  return dispatch(dispatchObj);
};

export const updateWindowPosition = (window, position, state, dispatch) => {
  // decide which window's state to update
  let actionType;
  switch (window) {
    case 'aboutWindow':
      actionType = 'ABOUT_WINDOW_POSITION';
        break;
    case 'networkWindow':
      actionType = 'NETWORK_WINDOW_POSITION';
        break;
    default:
      actionType = '';
  }

  let payload = state[window];
  payload.position = position;

  let dispatchObj = {
    type: actionType,
    payload
  };

  // update window position
  return dispatch(dispatchObj);
};
