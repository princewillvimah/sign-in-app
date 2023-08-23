import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const Socialbutton = () => {
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
  return (
    <>

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
    </>
  )
}

export default Socialbutton;