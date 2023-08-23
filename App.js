import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView , StatusBar} from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
     <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    marginTop:StatusBar.currentHeight,
  },
});


