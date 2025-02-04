import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {View, StyleSheet} from "react-native";

function App(){
  return (
      <View style={styles.container} >
        <RootNavigator/>
      </View>
  );
}

export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
