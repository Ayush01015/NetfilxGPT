import React from 'react'
import Body from "../src/components/Body"
import Header from './components/Header'
import { Provider } from "react-redux";
import appStore from './components/utils/Store/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  )
}

export default App
