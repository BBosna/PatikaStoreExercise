import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import products_data from './products_data';
import ProductsCard from './components/ProductsCard';

function App() {
  const renderProducts = ({item}) => <ProductsCard product={item} />;
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Text style={styles.Title}>PATİKA STORE</Text>
      <TextInput style={styles.TextInput} placeholder="Ara..." />
      <FlatList
        data={products_data}
        renderItem={renderProducts}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
    marginBottom: 10,
    marginTop: 5,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default App;
