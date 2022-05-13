import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView,FlatList} from 'react-native';
import Header from '../components/header';
import Stories from '../components/stories';
import Post from '../components/Post';
import { POSTS } from '../data/posts';
import Footer from '../components/footer';
import {Divider} from 'react-native-elements'

const HomeScreen = () => {
    return (
        <SafeAreaView >
          
            <Header />
            
            {/*  */}
           <ScrollView>
            <Stories />
                {
                    POSTS.map((post, index) => {
                        return (
                            <Post key={index} post={post} />
                        )
                    })
                }
            </ScrollView> 

    <View >
    
   </View>
        
        {/*  <ScrollView style={{}}>
        
            <Post />
        </ScrollView>  */}
       
        </SafeAreaView>
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
      bottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    notchText : {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    }
  })
  

export default HomeScreen
/*    <FlatList data={POSTS} renderItem={({item}) => <Post post={item} />}  /> 
 */