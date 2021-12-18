import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import AppLoading from 'expo-app-loading';

import HomePage from './Pages/HomePage';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import illustracaoHome from './assets/Illustracao_home.png';

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

const colors = StyleSheet.create({
  bkgOrange: {
    backgroundColor: '#FF4B3A',
  },
  textWhite: {
    color: "#FFF"
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeTitle: {
    fontSize: 50,  
    fontFamily: 'Poppins_700Bold',
    lineHeight: 52
  },
  homeIllustracao: {
    width: '100%',
    height: '100%'
  },
  btnInicio: {
    color: "#FF4B3A",
    backgroundColor: "#FFF",
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 100
    
  }
});
