

import React from 'react';
import MainNavigator from "../Movie/src/Navigation/MainNavigator";
import store from "../Movie/src/Redux/store/Store"
import {Provider} from "react-redux"
const App: () => React$Node = () => {
  return(
    <Provider store={store}>
     <MainNavigator/>
     </Provider>
  )
};



export default App;
