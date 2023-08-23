import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Custominput from '../components/Custominput/Custominput';
import CustomButton from '../components/CustomButton/CustomButton';
import Socialbutton from '../components/Socialbutton/Socialbutton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';

const SignUpScreen = () => {
    const EMAIL_REGEX= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const {control,handleSubmit, watch}=useForm();
    const pwd=watch('password');
    const navigation=useNavigation();
    const register =()=>{
      navigation.navigate('confirm');
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
     navigation.navigate('Signin');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.upper}>
      <View style={styles.root}>
       <Text style={styles.title}>Create Your Account</Text>
      <Custominput
      name='username'
      placeholder='Username'
      control={control}
      rules={{required:'Validation name is required', minLength:{value: 3, message:'Name should be more than 3'},
      maxLength:{value: 24, message:'Name shouldNOT EXCEED 24 letters long'}
    }}
      />
      <Custominput
      control={control}
      name='email'
      placeholder='Your Email'
      rules={{required:'Email is required', 
      pattern: {value: EMAIL_REGEX, message:'Email is invalid'}
    }}
     
      />
       <Custominput
       control={control}
       name='password'
       placeholder='Your Password'
       securetext
       rules={{required:'Password is required', minLength:{value: 8, message:'Name should be more than 8'},
       maxLength:{value: 24, message:'Name shouldNOT EXCEED 12 letters long'}
    }}
      />
      <Custominput
      control={control}
      name='pwd-repeat'
      placeholder='Repeat Password'
      securetext
      rules={{
       validate: value => 
       value === pwd || 'Password do not match',
      }}
      />
      <CustomButton
      text="Register"
      onpress={handleSubmit(register)}
      />
      <Text style={styles.text}>
        By registering , you confirm that you accept our <Text style={styles.link} onPress={pressed}>Terms of use</Text> and <Text style={styles.link} onPress={pressedone}>Privacy policy</Text> by vimah
      </Text>
      <Socialbutton/>
     
      <CustomButton
      text="Don't have any account? Sign in"
      onpress={onsigninp}
      bgcolor='#F9FBFC'
      txcolor='gray'
      />
      
     </View>
    </ScrollView>
 
  );
};

const styles =StyleSheet.create({
    upper:{
      height:'100%',
      backgroundColor:'#F9FBFC', 
    },
    root:{
      alignItems: 'center',
      padding: 20,
      height:'100%',
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

export default SignUpScreen;