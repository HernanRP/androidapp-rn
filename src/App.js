// import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { StatusBar, View, Platform } from 'react-native';
// import configureStore from './Store';
// import HotelsList from './components/HotelsList'

// Number.prototype.thousandDot = function(){
//     return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
//  };

// const Style = {
//     flex: 1, 
//     marginTop: Platform.OS === 'ios' ? 20 : 0 
// }

// const App = () => (
//     <Provider store={configureStore}>
//         <View style={Style}>
//             <StatusBar backgroundColor={'black'} />
//             <HotelsList/>
//         </View>
//     </Provider>
// )

// export default App



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined
    };
  }
  render() {
    //if (this.state.greeting) return this.renderAfterButton();
    return (
      <View testID="welcome" style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>Welcome</Text>
        <TouchableOpacity testID="hello_button" onPress={this.onButtonPress.bind(this, 'Hello')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="world_button" onPress={this.onButtonPress.bind(this, 'World')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say World</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderAfterButton() {
    return (
      <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>{this.state.greeting}!!!</Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}
