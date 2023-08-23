import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import Custominput from '../components/Custominput/Custominput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm} from "react-hook-form";

const SigninScreen = () => {
    const {height} =useWindowDimensions();
    const navigation=useNavigation();
    const { control, handleSubmit} = useForm();
    
    const onsignin =(data)=>{
       //validate user
      navigation.navigate('Home');
      console.log(data);
    }
    const forgot =()=>{
      navigation.navigate("forgotton");
    }
    const facebook =()=>{
      console.warn('Facebook was clicked');
    }
    const google =()=>{
      console.warn('google was clicked');
    }
    const apple =()=>{
      console.warn(' apple site was clicked');
    }
    const vimah =()=>{
      console.warn('vimah umuwa site was clicked');
    }
    const create =()=>{
      navigation.navigate("signup");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Image source={require('../../assets/images/app.png')} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
    
      <Custominput
      rules={{required:"Username is required for vimah's app", minLength: {value:12,
      message: 'Name should be 12 letters long'}}}
      control={control}
      name='username'
      placeholder='Username'
      />
     

      <Custominput
      rules={{required:"Password is required for vimah's app", minLength:{value:4,
      message:'Password should be greater than 4 words'}}}
      control={control}
      name='password'
      placeholder='Password'
      securetext={true}
      />
      <CustomButton
      text="Sign In"
      onpress={handleSubmit(onsignin)}
      />
      <CustomButton
      text="Forgot Password?"
      onpress={forgot}
      bgcolor='#F9FBFC'
      txcolor='gray'
      />
      <CustomButton
      text="Sign In With Facebook"
      onpress={facebook}
      bgcolor='#e7eaf4'
      txcolor='#476549'

      />
      <CustomButton
      text="Sign In With Google"
      onpress={google}
      bgcolor='#fae9ea'
      txcolor='#dd4d44'
      />
      <CustomButton
      text="Sign In With Apple"
      onpress={apple}
      bgcolor='#e3e3e3'
      txcolor='#363636'
      />
      <CustomButton
      text="Sign In With Vimah"
      onpress={vimah}
      bgcolor='#ccc'
      txcolor='black'
      />
      <CustomButton
      text="Don't have any account? Create one"
      onpress={create}
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
      backgroundColor:'#F9FBFC',
      
    },
    logo: {
      width: "99%",
      maxHeight: 300,
      maxHeight: 200,
    },
});

export default SigninScreen;