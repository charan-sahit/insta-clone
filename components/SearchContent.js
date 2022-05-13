/* import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

 const SearchContent = ({props}) => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),

      ],
    },
    {
      id: 1,
      images: [
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),

      ],
    },
    {
      id: 2,
      images: [
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        require('../assets/save.png'),
        

      ],
    },
  ];

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width:'100%'
                }}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      
                      style={{paddingBottom: 2,width:'33%'}}>
                      <Image
                        source={imageData}
                        style={{width: '100%', height: 150}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width:'66.5%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        
                        style={{paddingBottom: 2,width:'49.5%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  
                  style={{marginLeft: 2,width:'33%'}}>
                  <Image
                    source={data.images[5]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  
                  style={{paddingRight: 2,width:'66.5%'}}>
                  <Image
                    source={data.images[2]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        
                        style={{paddingBottom: 2,width:'100%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}; 

export default SearchContent; */

import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity,Dimensions, ScrollView } from 'react-native'
import {POSTS} from '../data/posts'

//create a flatlist component with images from posts
const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
const SearchContent = () => {
  
  
  

  return (
    <View>

      
      

<ScrollView >
        
      {
        
        POSTS.map((item, index) => {
          const [selected, setSelected] = useState(0);
          return (
            <View
              style={{
                position: 'relative',
              }}
            >
            
            <View style={{ margin: 1, flex: 1, flexDirection: "row", justifyContent: "space-around" }} >
    <View style={{ width: '49%', height: 150, marginBottom: 1 }} >
      
      <TouchableOpacity
        onPressIn = {() =>
          setSelected(1)
        }
        onPressOut = {() =>
          setSelected(0)
        }
      >
      <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.post_url }} />
      </TouchableOpacity>
    </View>
    <View style={{  width: '49%', height: 150, marginBottom: 1 }} >
    <TouchableOpacity
        onPressIn = {() =>
          setSelected(1)
        }
        onPressOut = {() =>
          setSelected(0)
        }
      >
      <Image style={{ width: '100%', height: '100%'  }} source={{ uri: item.post_url }} />
      </TouchableOpacity>
    </View>
    
  </View>
  

  {selected === 1 ? <Check item={item} /> :null}
  </View>

          )

        })
      }
                
                </ScrollView>
      
  </View>

      
    
  )
}

const Check = ({item}) => (
  <View>
    
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}>
          
          <View
            style={{
              
              top: 0,
              left: windowHeight/35,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={{uri: item.post_url}}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  {item.user}
                </Text>
              </View>
            </View>
            <Image source={{uri: item.post_url}} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              
            </View>
          </View>
        </View>
      
  </View>
)
  


export default SearchContent

const styles = StyleSheet.create({})

/* {
  selected===0 ? 
    null
    :
    <View
      style={{
        position: 'absolute',
        zIndex: 999,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52,52,52,0.5)',
      }}

    >
    <Image
  style={{
    
    zIndex: 1,  
    elevation:50,
    position: 'absolute',
    top: windowHeight/6,
    left: windowWidth/18,
    
    width: windowWidth*0.5,
    height: windowHeight*0.5,
    
    
  }}
  source={{uri:item.post_url}}
></Image>
</View>
} */