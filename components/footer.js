import React, { Component } from 'react'
import { Text, View, Image, } from 'react-native'
import { ICONS } from '../data/bottomIcons'
import {Divider} from 'react-native-elements'

const Footer = () =>  {
    
        return (
            <View style={{zIndex: 999}}>
            <Text>Footer</Text>
            {/* <View style={{justifyContent:'space-around'}}>
                {
                    ICONS.map((icon, index) => {
                        return (
                            <View key={index} >
                                <Image style={{height:50, width:50}}  source={{ uri: icon.inactive }} />
                            </View>
                        )
                    })

                }
            </View> */}
            </View>
        )
    
}

export default Footer
