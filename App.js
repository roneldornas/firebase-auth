import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Expo from 'expo';
import SignUpForm from './components/SIgnUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAg77Q8XBox9uLAHgG4Ibm9lIiynguni6s',
      authDomain: 'onetimepassword-afe47.firebaseapp.com',
      databaseURL: 'https://onetimepassword-afe47.firebaseio.com',
      projectId: 'onetimepassword-afe47',
      storageBucket: 'onetimepassword-afe47.appspot.com',
      messagingSenderId: '908511489206'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <View style={styles.container}>
          <SignUpForm />
          <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
