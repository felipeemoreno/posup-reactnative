import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const ProductDetails = ({ navigation, route }) => {
  return (
    <SafeAreaView  style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", alignItems: 'center', paddingTop: 10, backgroundColor: '#FF4B3A', width: '100%'}}>
        <Ionicons name="arrow-undo-outline" size={32} color="white"  style={{position: "absolute", top: 42, left: 10}} onPress={() => navigation.goBack()} />
        <Text style={styles.homeTitle}>DETALHES</Text>
      </View>
      <View style={{flex: 5,  width: '100%', padding: 20}}>
        <View style={{ flexDirection: "row", borderBottomColor: "#FF4B3A", borderBottomWidth: 2, paddingBottom: 20 }}>
          <View style={{flex: 1}}>
            <Image source={{ uri:route.params.produtoObj.image }} style={{ width: 100, height: 100, borderRadius: 100 / 2, borderWidth: 2, borderColor: '#FF4B3A'  }} />
          </View>
          <View style={{justifyContent: "center", flex: 2}}>
            <Text style={styles.productTitle}>{route.params.produtoObj.name}</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, flex: 1 }}>
          <Text style={{fontFamily: 'Poppins_700Bold' }}>Descrição</Text>
          <Text>{ route.params.produtoObj?.description }</Text>
        </View>
        <View>
          <Text style={[styles.productTitle, {textAlign: 'right'}]}><Text style={{fontSize: 15, fontFamily: 'Poppins_400Regular',}}>Valor:</Text> { route.params.produtoObj.price }</Text>        
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F8'
  },
  homeTitle: {
    fontSize: 50,  
    fontFamily: 'Poppins_700Bold',
    color: "#FFF",
  },
  productTitle: {
    fontSize: 25,
    marginLeft: 15,
    fontFamily: 'Poppins_700Bold',
  },
  btnInicio: {
    color: "#FF4B3A",
    backgroundColor: "#FFF",
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 100
  },
  item: {
    width: "100%",
    height: 90,
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15
  }
});

export default ProductDetails;
