import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,changeValue,changeTheme } from '../../src/reducers/counterReducer';
import {colors} from '../config/colors';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter.number)
  const change = useSelector((state)=>state.counter.changeValue)
  const theme = useSelector((state)=>state.counter.changeTheme)
  const selectedTheme = theme
 
  const _styles = styles(colors(selectedTheme))
  
  return (
    <View style={_styles.main}> 
       <TouchableOpacity style = {_styles.btnTheme} onPress={()=>{

         if(selectedTheme == false){
          dispatch(changeTheme(true))
        }else{
          dispatch(changeTheme(false))
        }
       }}>
          <Text style={_styles.btnText}>Change Theme</Text>
       </TouchableOpacity>
      <Text style={_styles.numberStyle}>{counter}</Text>
      <View style={_styles.container}>
        <TouchableOpacity style = {_styles.ButtonStyle} onPress={()=>dispatch(increment())}>
          <Text style={_styles.btnText}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {_styles.ButtonStyle} onPress={()=>dispatch(decrement())}>
          <Text style={_styles.btnText}>Decrease</Text>
        </TouchableOpacity> 
      </View>
      <TextInput placeholder='Enter Number'
          style = {_styles.inputField}
          value = {change}
          onChangeText={text=> dispatch(changeValue(text))}
        />    
      </View>
  );
};

const styles = (theme) => StyleSheet.create({
    main :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:400,
        backgroundColor:theme.primary
        
      },
        container:{
          flexDirection:"row",
          justifyContent:'space-between', 
        },
        numberStyle: {
          fontSize:40,
          fontWeight:'bold',
          color: 'black',
          marginBottom:20,
          color:theme.color
        },
        btnText: {
            color: theme.text,
            fontSize:20,
            fontWeight:'600'
        },
        ButtonStyle: {
          backgroundColor:theme.buttonBackground,
          width:'35%',
          height:55,
          padding:15,
          marginHorizontal:20,
          borderRadius:20,
          alignItems:"center",
        },
        inputField: {
          borderWidth:1,
          borderColor: theme.borderColor,
          color:theme.color,
          padding:20,
          marginTop:20,
          borderRadius:20,
          fontSize:18, 
          width:150,
          marginBottom:40
      },
      btnTheme: {
        backgroundColor:theme.buttonBackground,
        width:'45%',
        padding:15,
        marginTop:40,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center",
        marginBottom:40
      },
});
export default HomeScreen;
