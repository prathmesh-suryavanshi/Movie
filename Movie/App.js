

import React from 'react';
import MainNavigator from "../Movie/src/Navigation/MainNavigator";
import store from "../Movie/src/Redux/store/Store"
import {Provider} from "react-redux"
import AnimatedSplash from "react-native-animated-splash-screen";

// const App: () => React$Node = () => {
//   return(
//     
//   )
// };

class App extends React.Component {
  state = {
    isLoaded: false,
  }
 
  async componentDidMount() {
    // await loadAsync()
    this.setState({ isLoaded: true })
  }
 
  
  render() {
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={this.state.isLoaded}
        logoImage={require("../Movie/src/Assets/Images/delete.jpg")}
        backgroundColor={"#f4b244"}
        logoHeight={250}
        logoWidth={250}
        preload={false}
        
      >
        <Provider store={store}>
      <MainNavigator />
     </Provider>
      </AnimatedSplash>
    )
  }
}
 
export default App

