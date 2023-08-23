import { View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = (props) => {
    const {onpress,text, bgcolor,txcolor,bdb,bdbw}=props;
  return (
    <Pressable onPress={onpress}  style={[styles.container, bgcolor? {backgroundColor: bgcolor}:{}, bdb? {borderColor:bdb}:{}, bdbw? {borderWidth:bdbw}:{},
    ]}>
      <Text style={[styles.text, txcolor? {color: txcolor}:{},
    ]}>{text}</Text>
    </Pressable>
  );
};

const styles= StyleSheet.create({
    container:{
      backgroundColor:'#3b71f3',
      width: '100%',
      padding: 15,
      marginVertical:12,
      alignItems:'center',
      borderRadius:5,
    },
    text:{
        color:'white',
        fontWeight:'bold',
    }
});

export default CustomButton;