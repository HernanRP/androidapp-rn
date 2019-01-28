import React, { Component } from 'react';
import {AppRegistry, RefreshControl, ScrollView, Text, View, KeyboardAvoidingView, TextInput, Button } from 'react-native';

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  render() {
    return (
      <KeyboardAvoidingView enabled style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flex: 1, backgroundColor: 'gray', justifyContent: 'space-between' }}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} />}>
          <View style={{ height: 200, backgroundColor: 'red' }}>
            <TextInput
              style={{
                height: 60,
                color: 'white',
                backgroundColor: 'gray',
                fontSize: 20,
                textAlign: 'center'
              }}
              value="Press Me"
            />
          </View>
          <Button style={{ backgroundColor: 'blue', width: '100%' }} title="Footer button" />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

AppRegistry.registerComponent('MyReactNativeApp', () => Authenticate);
