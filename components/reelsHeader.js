import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons';


const ReelsHeader = () => {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height


    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight ,
                backgroundColor: '#000',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}

        >
            <Text
                style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    margin: 8,
                    marginLeft: 25
                }}
            >
                Reels
            </Text>
            <Ionic 
                name="md-camera-outline"
                style={{
                    fontSize: 30,
                    color: '#fff',
                    margin: 8,
                    marginRight: 25
                }}
            />
        </View>
    )
}

export default ReelsHeader

const styles = StyleSheet.create({})
