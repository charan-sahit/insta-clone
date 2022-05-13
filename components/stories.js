import React from 'react'
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import {USERS} from '../data/users'
import { useNavigation } from '@react-navigation/native'

const Stories = () => {
    const navigation = useNavigation()

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            
            {
                USERS.map((user, index) => {
                    return (
                        
                        <View key={index} style={{marginTop:13, marginBottom: 3}}>
                            <TouchableOpacity 
                            onPress={() => {
                                navigation.push('StoryView',{
                                    username: user.user,
                                    dp: user.url,
                                })
                                }}>
                            
                            <Image style={styles.image} source={{ uri: user.url }} />
                            </TouchableOpacity>
                            <Text style={styles.name}>{
                                user.user.length > 5 ? user.user.substring(0, 5) + '..' : user.user
                            }</Text>
                        </View>

                    )
                })
            }
        </ScrollView>
    )
}

export default Stories

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
        borderWidth : 2,
        borderColor : '#ff8501'
    },
    name: {
        textAlign: 'center',
        marginBottom: 5
    }
})
