/* import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import REELS from '../data/reelVideos'
import SingleReel from '../components/video'

const ReelVideos = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    
    return (
        <View>
            <SwiperFlatList 
                data = {REELS}
                onChangeIndex = {(index) => {
                    setCurrentIndex(index)
                }}
                
                renderItem = {({item, index}) => (
                    <SingleReel item={item} index={index} />
                )}
                keyExtractor = {(item, index) => index}
            />    


        </View>
    )
}

export default ReelVideos

const styles = StyleSheet.create({})
 */

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import REELS from '../data/reelVideos'
import SingleReel from './video'

const ReelVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={REELS}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelVideos;