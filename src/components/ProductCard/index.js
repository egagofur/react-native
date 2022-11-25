import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const currencyFotmat = number => {
  return `Rp. ${number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

const ProductCard = ({title, desc, price, image}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.desc} numberOfLines={3}>
          {desc}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {currencyFotmat(price)}
        </Text>
        <View style={styles.actionWrapper}>
          <TouchableOpacity>
            <View style={[styles.actionBuy]}>
              <Text style={styles.actionText}>Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 16,
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: '#1f8597',
    borderRadius: 8,
  },
  image: {
    height: 140,
    width: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f2e41',
  },
  desc: {
    fontSize: 13,
    color: '#3f3d56',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f4a896',
  },
  actionWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  actionBuy: {
    borderRadius: 8,
    width: 200,
    height: 27,
    paddingVertical: 3,
    alignItems: 'center',
    backgroundColor: '#03AC0E',
  },
  actionText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});
