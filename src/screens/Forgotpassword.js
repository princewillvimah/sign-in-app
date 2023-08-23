import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Custominput from '../components/Custominput/Custominput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const Forgotpassword = () => {
    const {username, setUsername} = useState('');
    const navigation=useNavigation();
    const {control, handleSubmit}=useForm();

    const onsignin =()=>{
      navigation.navigate('reset');
    }
    const onsigninp =()=>{
      console.warn('calm down');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
       <Text style={styles.title}>Reset your password</Text>
      <Custominput
      placeholder='Username'
      control={control}
      name='username'
      rules={{required:"Username is required for vimah's app", minLength: {value:12,
        message: 'Name should be 12 letters long'}}}
      />
      

      <CustomButton
      text="Send"
      onpress={handleSubmit(onsignin)}
      />
    
      <CustomButton
      text="Back to Sign in"
      onpress={onsigninp}
      bgcolor='#F9FBFC'
      txcolor='gray'
      />
      
     </View>
    </ScrollView>
 
  );
};

const styles =StyleSheet.create({
    root:{
      alignItems: 'center',
      padding: 20,
      
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#051c60',
      margin:10,
    },
    text:{
      color:'gray',
      marginVertical:10,
    },
    link:{
      color:'#dd4d44'
    }
    
});

export default Forgotpassword;