import React, { useEffect, useState } from 'react'
import { SafeAreaView, VirtualizedList, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import api from '../services/api';
import { Ionicons } from '@expo/vector-icons';

// const listaProdutos = [
//   {
//     id: 1,
//     name: "Miojo",
//     description: `1 macarrão instantâneo
// 1 ovo cozido e bem picado
// 1/2 cebola ralada
// 1/2 tomate ralado
// queijo ralado
// extrato de tomate`,
//     price: 15.99,
//     image: require('../assets/pratos/miojo.png')
//   },
//   {
//     id: 2,
//     name: "Strogonoff de Camarão",
//     description: `500 gramas de camarão
// creme de leite
// molho de tomate
// sopa de mostarda
// cebola
// alhos picados
// orégano
// Sal e pimenta do reino`,
//     price: 55.99,
//     image: require('../assets/pratos/strogonoff-camarao.png')
//   },
//   {
//     id: 3,
//     name: "Lasanha Quatro Queijos",
//     description: `mussarela em fatias
// MOLHO:
// manteiga
// leite
// queijo gorgonzola
// queijo provolone
// queijo parmesão ralado
// creme de leite`,
//     price: 45.99,
//     image: require('../assets/pratos/lasanha-quatroqueijos.png')
//   },
//   {
//     id: 4,
//     name: "Arroz Natalino",
//     description: `arroz
// bacon
// uvas passas pretas pequenas
// uvas passas brancas pequenas
// castanha de caju
// milho
// peito de frango desfiado
// Alho, cebola, sal, salsinha e cebolinha`,
//     price: 35.99,
//     image: require('../assets/pratos/arroz-natalino.png')
//   },
//   {
//     id: 5,
//     name: "Lentilha com Linguiça",
//     description: `lentilha
// linguiça tipo toscana
// cebola picadinha
// alho
// sopa de azeite
// vinho
// água
// Sal`,
//     price: 45.99,
//     image: require('../assets/pratos/lentilha-com-linguica.png')
//   },
//   {
//     id: 6,
//     name: "Lombo Suíno Assado na Cerveja",
//     description: `cravos da índia
// cebola
// alho picado
// cerveja
// suco de laranja
// louro
// Sal e pimenta do reino moída 
// lombo suíno
// manteiga`,
//     price: 45.99,
//     image: require('../assets/pratos/lombo-suino.png')
//   },
//   {
//     id: 7,
//     name: "Coca-Cola",
//     description: `Refrigerante 350ml`,
//     price: 5.99,
//     image: require('../assets/pratos/coca-cola.png')
//   },
//   {
//     id: 8,
//     name: "Guaraná",
//     description: `Refrigerante 350ml`,
//     price: 5.99,
//     image: require('../assets/pratos/guarana.png')
//   },
//   {
//     id: 9,
//     name: "Água com Gás",
//     description: `Água com Gás 500ml`,
//     price: 45.99,
//     image: require('../assets/pratos/agua-gas.png')
//   }
// ]


const getItem = (listaProdutos, index) => (listaProdutos[index]);

const getItemCount = (listaProdutos) => listaProdutos.length;

const Item = ({ product, navigationObj }) => {
  console.log(product.image);
  return (
  <View style={styles.item}>
    <TouchableOpacity  onPress={() => navigationObj.navigate("ProductDetails", { produtoObj: product })}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 10}}>
          <Image source={{ uri:product.image }} style={{ width: 55, height: 55, borderRadius: 55 / 2, borderWidth: 2, borderColor: '#FF4B3A'  }} />
        </View>
        <View>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.title}>{product.price}</Text>
        </View>
      </View>
      
    </TouchableOpacity>
  </View>
  );
};

const ProductsPage =  ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = async () => {
    try {
      const response = await api.get('/Products');
      const productsList = await response.data;
      setListaProdutos(productsList);

      // LOCAL MOCK
      // const response = await fetch("http://192.168.0.26:5500/mock/listaProdutos.json");
      // const json = await response.json();
      // setListaProdutos(json.products);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView  style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", alignItems: 'center', paddingTop: 10, backgroundColor: '#FF4B3A', width: '100%'}}>
      <Ionicons name="arrow-undo-outline" size={32} color="white"  style={{position: "absolute", top: 42, left: 10}} onPress={() => navigation.goBack()} />
        <Text style={styles.homeTitle}>PRODUTOS</Text>
      </View>
      <View style={{flex: 5, width: '100%'}}>
        <VirtualizedList
          data={listaProdutos}
          // initialNumToRender={2} opcional qual item começa
          renderItem={({ item }) => <Item product={item} navigationObj={navigation} />}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          style={{paddingHorizontal: 30}}
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
    backgroundColor: '#F5F5F8'
  },
  homeTitle: {
    fontSize: 50,  
    fontFamily: 'Poppins_700Bold',
    color: "#FFF",
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

export default ProductsPage;
