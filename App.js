import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './components/PresentationalComponent'
import Authentification from './components/Authentification'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';


function App() {
  // Set an initializing state while Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState();

  // handle user state change
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged)
    return subscribe
  }, [])

  if (initializing) return null

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
    },
    text: {
        marginTop: '5%',
    } 
})