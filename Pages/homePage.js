import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import illustracaoHome from '../assets/Illustracao_home.png';

function HomePage() {
  return (
    <View style={[styles.container, colors.bkgOrange]}>
      <View style={{flex: 1, justifyContent: "center", paddingTop: 10}}>
        <Text style={[styles.homeTitle, colors.textWhite]}>RANGO{'\n'}EXPRESS</Text>
      </View>
      <View style={{flex: 2, width: '100%', alignItems: "center"}}>
        <Image source={illustracaoHome} style={{width: "55%", height: "100%"}} />
      </View>
      <View style={{flex: 1, justifyContent: "center"}}>
        <TouchableOpacity style={styles.btnInicio}>
          <Text>Ver o Cardápio</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
export default HomePage
