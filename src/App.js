import React, { Component } from 'react';
import { Text, View, ToastAndroid } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/commons'
import LoginForm from './components/LoginForm'


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyAk2c6borFyH_0hEaCoa71YuUuEBW8jP1s',
        authDomain: 'auth-8a56c.firebaseapp.com',
        databaseURL: 'https://auth-8a56c.firebaseio.com',
        projectId: 'auth-8a56c',
        storageBucket: 'auth-8a56c.appspot.com',
        messagingSenderId: '209562377117',
        appId: '1:209562377117:web:967da8db69db9083'
      }
    );

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn){
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => {
                  firebase.auth().signOut();
                  ToastAndroid.show('Log out successful', ToastAndroid.SHORT);
                }}>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return (
          <LoginForm />
        );
      default:
        return (
          <Spinner />
        )
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header title='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
