import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {data.map((item) => (
          <Image 
            key={item}
            style={styles.img}
            source={require('../../assets/hhh.jpg')}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  
    padding: 10,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
});
