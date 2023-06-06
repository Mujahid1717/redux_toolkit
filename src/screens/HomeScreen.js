import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from '../../src/reducers/counterReducer';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter.number)
  return (
    <View style={styles.main}>  
      <Text style={styles.numberStyle}>{counter}</Text>
      <View style={styles.container}>
        <TouchableOpacity style = {styles.ButtonStyle} onPress={()=>dispatch(increment())}>
          <Text style={styles.btnText}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle} onPress={()=>dispatch(decrement())}>
          <Text style={styles.btnText}>Decrease</Text>
        </TouchableOpacity>
      </View>   
      </View>
    
  );
};

const styles = StyleSheet.create({
    main :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:400,
      },
        container:{
          flexDirection:"row",
          justifyContent:'space-between', 
        },
        numberStyle: {
          fontSize:40,
          fontWeight:'bold',
          color: 'black',
          marginBottom:20
        },
        btnText: {
            color: 'white',
            fontSize:20,
            fontWeight:'600'
        },
        ButtonStyle: {
          backgroundColor:'black',
          width:'35%',
          height:55,
          padding:15,
          marginHorizontal:20,
          borderRadius:20,
          alignItems:"center",
        },
});
export default HomeScreen;
