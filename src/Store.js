import React from 'react'

export const Store = React.createContext();

const initialState = {
  highestZIndex: 0,
  aboutWindow: {
    open: false,
    position:[400, 50],
    zIndex: 0
  },
  networkWindow: {
    open: false,
    position: [370, 400],
    zIndex: 0
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE_HIGHEST_ZINDEX':
      return {
        ...state,
        highestZIndex: action.payload
      };
    case 'ABOUT_WINDOW_ZINDEX':
      return {
        ...state,
        aboutWindow: action.payload
      };
    case 'NETWORK_WINDOW_ZINDEX':
      return {
        ...state,
        networkWindow: action.payload
      };
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}
  </Store.Provider>
}
