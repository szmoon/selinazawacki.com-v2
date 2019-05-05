import React from 'react';

export const Store = React.createContext();

const initialState = {
  highestZIndex: 0,
  aboutWindow: {
    window: 'aboutWindow',
    open: false,
    position:[400, 50],
    size: [500,400],
    zIndex: 0
  },
  aboutTxt: {
    window: 'aboutTxt',
    open: false,
    position:[80, 300],
    size: [400,400],
    zIndex: 0
  },
  aboutImage: {
    window: 'aboutImage',
    open: false,
    position:[660, 150],
    size: [300,375],
    zIndex: 0
  },
  contactTxt: {
    window: 'contactTxt',
    open: false,
    position:[460, 480],
    size: [450,250],
    zIndex: 0
  },
  networkWindow: {
    window: 'networkWindow',
    open: false,
    position: [360, 380],
    size: [480,380],
    zIndex: 0
  },
  startMenu: {
    window: 'startMenu',
    // open: true,
    zIndex: 0,
  },
};

// todo: figure out why this was working when some were missing
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE_HIGHEST_ZINDEX':
      return {
        ...state,
        highestZIndex: action.payload
      };
    case 'ABOUT_WINDOW_TOGGLE':
      return {
        ...state,
        aboutWindow: action.payload
      };
    case 'ABOUT_WINDOW_ZINDEX':
      return {
        ...state,
        aboutWindow: action.payload
      };
    case 'ABOUT_IMAGE_TOGGLE':
      return {
        ...state,
        aboutImage: action.payload
      };
    case 'ABOUT_IMAGE_ZINDEX':
      return {
        ...state,
        aboutImage: action.payload
      };
    case 'ABOUT_TXT_TOGGLE':
      return {
        ...state,
        aboutTxt: action.payload
      };
    case 'ABOUT_TXT_ZINDEX':
      return {
        ...state,
        aboutTxt: action.payload
      };
    case 'CONTACT_TXT_TOGGLE':
      return {
        ...state,
        contactTxt: action.payload
      };
    case 'CONTACT_TXT_ZINDEX':
      return {
        ...state,
        contactTxt: action.payload
      };
    case 'NETWORK_WINDOW_TOGGLE':
      return {
        ...state,
        networkWindow: action.payload
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
