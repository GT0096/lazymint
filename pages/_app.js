// @ts-nocheck
import '../styles/globals.css'
import React, { useReducer } from 'react';
import {createContext} from 'react';

export const MetaContext = createContext();

export const ACTION_TYPE = {
  SET_ACCOUNT: 'SET_ACCOUNT',
  SET_WEB3:'SET_WEB3'
}

const nftReducer = (state, action) => {
  switch(action.type) {
    case ACTION_TYPE.SET_ACCOUNT: {
      return {
        ...state, account: action.payload.account
      }
    }
    case ACTION_TYPE.SET_WEB3: {
      return {
        ...state, web3: action.payload.web3
      }
    }
    default:
      throw new Error(`Unhandeled action type: ${action.type}`);
  }
}

const MetaProvider = ({children})=>{
  const initialState = {
    account: "",
    web3: ""
  }

  const [state, dispatch] = useReducer(nftReducer, initialState)
  return (
  <MetaContext.Provider value = {{state, dispatch}}>
    {children}
    </MetaContext.Provider>
  )
}


function MyApp({ Component, pageProps }) {

  return ( <MetaProvider>
  <Component {...pageProps} />
  </MetaProvider>
  )
}

export default MyApp
