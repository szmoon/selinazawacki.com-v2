export const increaseZ = (window, state, dispatch) => {
  const highestZIndex = state.highestZIndex; // get current highest zIndex
  const newHighestZ = highestZIndex + 1;

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
  payload.zIndex = newHighestZ; // todo: eventually -> highest z + 1

  let dispatchObj = {
    type: actionType,
    payload
  };

  // todo: update highest z
  dispatch({
    type: 'INCREASE_HIGHEST_ZINDEX',
    payload: newHighestZ
  });
  return dispatch(dispatchObj);
};
