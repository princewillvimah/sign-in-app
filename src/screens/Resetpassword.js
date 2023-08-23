import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Custominput from '../components/Custominput/Custominput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';



const Resetpassword = () => {
    const {code, setCode} = useState('');
    const {newpassword, SetNewpassword}= useState('');
    const navigation=useNavigation();
    const {control,handleSubmit}=useForm();
    const onsignin =()=>{
      navigation.navigate('Home');
    }
    const forgot =()=>{
      console.warn('Forgotten password was clicked');
    }
   
    const create =()=>{
      console.warn('create was clicked');
    }
    const pressed =()=>{
      console.warn('get ready to read them soon');
    }
    const pressedone =()=>{
      console.warn('calm down');
    }
    const onsigninp =()=>{
      navigation.navigate('Home');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
       <Text style={styles.title}>Reset your password</Text>
      <Custominput
      placeholder='Code'
      control={control}
      name='code'
      rules={{required:"Username is required for vimah's app", maxLength: {value:4,
        message: 'code should be 4'}}}
     
      />
        <Custominput
      placeholder=' Enter your new password'
      control={control}
      name='password'
      rules={{required:"Username is required for vimah's app", minLength: {value:12,
        message: 'Name should be 12 letters long'}}}
     
      />
      

      <CustomButton
      text="Submit"
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

export default Resetpassword;