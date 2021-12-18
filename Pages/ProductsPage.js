import React from 'react'
import { SafeAreaView, VirtualizedList, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

import illustracaoHome from '../assets/Illustracao_home.png';

const listaProdutos = [
  {
    id: 1,
    name: "Miojo com Queijo Ralado",
    price: 15.99,
    image: null
  },
  {
    id: 2,
    name: "Strogonoff de Camarão",
    price: 55.99,
    image: null
  },
  {
    id: 3,
    name: "Lasanha Quatro Queijos",
    price: 45.99,
    image: null
  },
  {
    id: 4,
    name: "Miojo com Queijo Ralado",
    price: 15.99,
    image: null
  },
  {
    id: 5,
    name: "Strogonoff de Camarão",
    price: 55.99,
    image: null
  },
  {
    id: 6,
    name: "Lasanha Quatro Queijos",
    price: 45.99,
    image: null
  },
  {
    id: 7,
    name: "Miojo com Queijo Ralado",
    price: 15.99,
    image: null
  },
  {
    id: 8,
    name: "Strogonoff de Camarão",
    price: 55.99,
    image: null
  },
  {
    id: 9,
    name: "Lasanha Quatro Queijos",
    price: 45.99,
    image: null
  }
]

const getItem = (listaProdutos, index) => (listaProdutos[index]);

const getItemCount = (listaProdutos) => listaProdutos.length;

const Item = ({ product, navigationObj }) => (
  <View style={styles.item}>
    <TouchableOpacity  onPress={() => navigationObj.navigate("ProductDetails", { produtoObj: product })}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 10}}>
          <Image source={illustracaoHome} style={{width: 40, height: 40}} />
        </View>
        <View>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.title}>{product.price}</Text>
        </View>
      </View>
      
    </TouchableOpacity>
  </View>
);

const ProductsPage =  ({ navigation }) => {
  return (
    <SafeAreaView  style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", paddingTop: 10}}>
        <Text style={styles.homeTitle}>PRODUTOS</Text>
      </View>
      <View style={{flex: 4, width: '100%', paddingHorizontal: 30}}>
        <VirtualizedList
          data={listaProdutos}
          // initialNumToRender={2} opcional qual item começa
          renderItem={({ item }) => <Item product={item} navigationObj={navigation} />}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          />
        </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F8',
  },
  homeTitle: {
    fontSize: 50,  
    fontFamily: 'Poppins_700Bold',
    color: "#FF4B3A",
    borderBottomColor: '#FF4B3A50',
    borderBottomWidth: 1,
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
  },
  item: {
    width: "100%",
    height: 80,
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 10,
    borderRadius: 15
  }
});

export default ProductsPage;
