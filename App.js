import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import AppLoading from 'expo-app-loading';

import HomePage from './Pages/HomePage';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';


export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>  
        <HomePage />
        <StatusBar style="auto" />
      </>
    );
  }
}


