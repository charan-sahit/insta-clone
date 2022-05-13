import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReelsHeader from '../components/reelsHeader'
import ReelVideos from '../components/reelVideos'

const Reels = () => {
    return (
        <View>
            <ReelsHeader />
            <ReelVideos />
        </View>
    )
}

export default Reels

const styles = StyleSheet.create({})
