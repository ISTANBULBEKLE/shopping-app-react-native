import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList,Text} from 'react-native';
import {useSelector} from 'react-redux';



const ProductsOverViewScreen= () =>{
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList  data= {products} 
                keyExtractor= {item => item.id}
                renderItem = {itemData => <Text>{itemData.item.title}</Text>}/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default ProductsOverViewScreen;
