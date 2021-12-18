import React from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native';

function homePage() {
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

export default homePage
