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
