import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
    return (
        <View style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection:'row',
            marginRight: 25,
            marginTop: 16,
        }}>

            <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          
          zIndex: 1,
          left: 25,
          alignItems:'flex-start',
          justifyContent:'flex-start',
          
        }}
      />
        <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
            width: '98%',
            backgroundColor: '#EBEBEB',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            padding: 4,
            paddingLeft: 40,
        }}
        />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({})
