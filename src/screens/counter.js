import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

const ranger = 10;
const MIN_COUNT_LIMIT = 10;
export default function Counter() {

const [count, setCount] = useState(  MIN_COUNT_LIMIT );

function onAddpressed() {
setCount(count + ranger);
}

function onMinuspressed() {
  if(count -ranger  <  MIN_COUNT_LIMIT ) return;{
setCount(count - ranger);
}}



  return (
    <View style={styles.container}>
      <View style={styles.box}>
       
        <View>
          <Button title={"+"} onPress={onAddpressed} /> 
          </View>
         <View>
          <Text style={styles.counterText}>{count}</Text>
           </View>
          <View>
             <Button title={"-"}  onPress={onMinuspressed}/>
             </View>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
     alignItems: "center",
   },
  box: {
    width: 300,
    height: 200,
    backgroundColor: "rgb(255, 0, 179)",
    flexDirection: "row",
    alignItems: "center",
  justifyContent: "center",
  
  
    gap:10,
  },
  counterText: {
    fontSize: 50,

  }
});
