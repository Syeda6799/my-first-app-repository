import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';


export default function Counter() {

const [count, setCount] = useState(0);

function onAddpressed() {
setCount(count + 1);
}

function onMinuspressed() {
  if(count -1  < 0) return;{
setCount(count - 1);
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
