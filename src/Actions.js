export const increaseZ = (window, state, dispatch) => {
  // todo: get highest Z
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
  payload.zIndex += 1; // todo: eventually -> highest z + 1

  let dispatchObj = {
    type: actionType,
    payload
  };

  // todo: update highest z
  return dispatch(dispatchObj);
};
