import React, { Component } from 'react';
import { Text, ToastAndroid } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './commons'
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
    ToastAndroid.show('Log in successful', ToastAndroid.SHORT);
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed.', loading: false });
  }

  renderAction() {
    if (this.state.loading){
      return <Spinner size='small' />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='name@mail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
        </CardSection>

        <Text style={styles.error}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderAction()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  }
}

export default LoginForm;