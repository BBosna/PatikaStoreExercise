import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './ProductsCard.styles';

const ProductsCard = ({product}) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: product.imgURL}} />
      <View>
        <Text style={style.title}>{product.title}</Text>
        <Text style={style.price}>{product.price}</Text>
        {product.inStock === false ? (
          <Text style={style.stock}>STOKTA YOK!</Text>
        ) : null}
      </View>
    </View>
  );
};

export default ProductsCard;
