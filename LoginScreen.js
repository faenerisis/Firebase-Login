/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import {View, Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {auth} from '../firebase';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubsucribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      }
    });

    // eslint-disable-next-line semi
    return unsubsucribe
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredantials => {
        const user = userCredantials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredantials => {
        const user = userCredantials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
  };

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="e-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutLine]}>
          <Text style={styles.buttonOutLineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 7,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: 'orange',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutLine: {
    backgroundColor: 'white',
    marginTop: 7,
    borderColor: 'orange',
    borderWidth: 2,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutLineText: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default LoginScreen;
