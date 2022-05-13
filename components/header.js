import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements'

const Header = () => {
  return (
    <View >
      <TouchableOpacity style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo1.png')} ></Image>
      </TouchableOpacity>
      <TouchableOpacity >
        <Image style={styles.icon} source={require('../assets/dm.png')} ></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notch}>
        <Text style={styles.notchText}>11</Text>
      </TouchableOpacity>
      <Divider width = {0.5} style={{marginTop:8}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  logo : {
    width : 150,
    height : 75,
    alignSelf: 'flex-start'



  },
  icon:{
    height: 50,
          width: 50,
          alignSelf: 'flex-end',            
            
          
  },
  notch: {
    width: 18,
    height: 18,
    borderRadius: 25,
    backgroundColor: '#f00',
    color: '#fff',
    position: 'absolute',
    right: 6,
    bottom: 33,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  notchText : {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
})


export default Header;