import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


import illustracaoHome from '../assets/Illustracao_home.png';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", paddingTop: 10}}>
        <Text style={styles.homeTitle}>RANGO{'\n'}EXPRESS</Text>
      </View>
      <View style={{flex: 2, width: '100%', alignItems: "center"}}>
        <Image source={illustracaoHome} style={{width: "55%", height: "100%"}} />
      </View>
      <View style={{flex: 1, justifyContent: "center"}}>
        <TouchableOpacity 
          style={styles.btnInicio}
          onPress={() => navigation.navigate('Products')}>
          <Text>Ver o Cardápio</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4B3A',
  },
  homeTitle: {
    fontSize: 50,  
    fontFamily: 'Poppins_700Bold',
    lineHeight: 54,
    color: "#FFF"
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
