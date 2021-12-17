import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

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
        <View style={[styles.container, colors.bkgOrange]}>
          <Text style={[styles.homeTitle, colors.textWhite, {fontFamily: 'Poppins_700Bold'}]}>RANGO {'\n'}EXPRESS</Text>
          <StatusBar style="auto" />
        </View>
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
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeTitle: {
    fontSize: 50, 
    padding: 80
  }
});
