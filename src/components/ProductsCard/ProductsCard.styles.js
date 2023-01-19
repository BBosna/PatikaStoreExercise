import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
    width: '100%',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    margin: 7,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  stock: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
  },
});
