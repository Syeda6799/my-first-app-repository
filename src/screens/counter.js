import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import Button from '../components/Button'; 

export default function Counter() {
  const [count, setCount] = useState(0);

  function onAddpressed() {
    setCount(count + 1);
  }

  function onMinuspressed() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button
          title="+" 
          onPress={onAddpressed}
          btnIcon={<Icon name="heart" size={20} color="white" />}
          color="purple"
          textColor="white"
        />
        <Text style={styles.counterText}>{count}</Text>
        <Button
          title="-" 
          onPress={onMinuspressed}
          btnIcon={<Icon name="heart" size={20} color="white" />}
          color="black"
          textColor="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 200,
    backgroundColor: 'rgb(183, 255, 0)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 20,
  },
  counterText: {
    fontSize: 50,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
