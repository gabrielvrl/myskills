import React, { useEffect } from 'react';
import { Home } from './src/pages/Home'
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';


export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  )
}