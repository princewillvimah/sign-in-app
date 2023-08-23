import { View, Text, TextInput,StyleSheet } from 'react-native';
import React from 'react';
import{Controller} from 'react-hook-form';

const Custominput = (props) => {
   const {control,name,placeholder,securetext,rules={}}=props;
  return (
     <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field:{value,onChange,onBlur},fieldState:{error}})=>(
          <View>
          <View style={[styles.container, {borderColor:  error? 'red':'#e8e9e8'}]}>
          <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={securetext}
          />
          </View>
          {error && (<Text style={{color:'red', alignSelf:'stretch'}}>{error.message}</Text>)}
          </View>
        )}
      />
  );
};

const styles =StyleSheet.create({
  container:{
     backgroundColor: 'white',
     width:'100%',
     borderColor: '#e8e9e8',
     borderWidth: 1,
     borderRadius:5,
     padding: 3,
     paddingHorizontal:10,
     marginVertical:5,
  },
  input:{

  },
})
export default Custominput;