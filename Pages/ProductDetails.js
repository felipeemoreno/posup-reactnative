import React from 'react'
import { Text, View } from 'react-native'

const ProductDetails = ({ navigation, route }) => {
  return (
    <View>
      <Text>{route.params.produtoObj.name}</Text>
    </View>
  )
}

export default ProductDetails;
