import {StyleSheet, SafeAreaView, FlatList, Text, View} from 'react-native';
import React from 'react';
import {Header, ProductCard} from '../../components';

const getItems = ({item}) => (
  <ProductCard
    title={item.title}
    desc={item.desc}
    price={item.price}
    image={item.image}
  />
);
const dummy = [
  {
    id: 1,
    title: 'Legion 5',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '2000000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 2,
    title: 'Legion 7',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '100000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 3,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 4,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 5,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 6,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 0,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 7,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 8,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 9,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
  {
    id: 10,
    title: 'Asus tuf ',
    desc: 'Laptop gaming dengan design yang tidak terlihat gaming',
    price: '600000',
    image: 'https://source.unsplash.com/1600x900/?laptop',
  },
];

const index = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Opon Komputer'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dummy}
        renderItem={getItems}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={styles.label}>List Produk Baru</Text>}
        ListFooterComponent={<View style={styles.footer} />}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2ff2e41',
    marginBottom: 16,
  },
  footer: {
    height: 30,
  },
});
