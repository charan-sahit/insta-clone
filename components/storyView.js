import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View , Image, StatusBar, SafeAreaView, TouchableOpacity, Animated} from 'react-native'
import { Divider } from 'react-native-elements'
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const StoryView = ({route}) => {
    
     const {username} = route.params
    const {dp} = route.params 
    
    useEffect(() => {
        
        let timer = setTimeout(() => {
            navigation.goBack();
          }, 3000);

          Animated.timing(progress, {
            toValue: 5,
            duration: 3000,
            useNativeDriver: false,
          }).start();
          return () => clearTimeout(timer); //used to remove the timer when the it is closed by X
    }, [])

    const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
    const navigation = useNavigation()
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <StatusBar backgroundColor="#ff8501" barStyle="dark-content" />
            

            <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>

            


            <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source= {{uri: 'https://i.picsum.photos/id/10/200/200.jpg'}}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10,marginTop: 10}}>
            {username}
          </Text>
          <TouchableOpacity 
          hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          onPress={() => navigation.goBack()}
          style={{zIndex: 1}}
          >
          <Ionic
              name="close"
              style={{fontSize: 40, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>







            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' }} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text  style={styles.message}>Send Message                                      </Text>
     <Image source={require('../assets/like.png')} style={styles.like} /> 
    <Image source={require('../assets/shareDark.png')} style={{width: 30, height: 30,alignSelf:'flex-end',marginBottom:17,marginLeft:5}}></Image>
            </View>
        
        </View>
        </SafeAreaView>
    )
}

export default StoryView

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '83%',
        resizeMode: 'contain'
    },
    dp: {
        width: 35,
        height: 35,
        marginTop:10,
        marginBottom:10,
        borderRadius: 20,
    },
    container: {
        height: '100%',
      backgroundColor: '#000',  
    },
    username: {
        marginLeft: 10,
        marginTop: 17,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        
    },
    x: {
        marginLeft: 10,
        
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        alignSelf: 'flex-end'
    },
    message:{
        margin: 15,
        marginBottom:0,
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 2,

    },
    like: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 10,
        resizeMode: 'contain',
        alignSelf: 'center'
    }


})
/* <Image style = {styles.dp} source = {{uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' }} />

<View style={{justifyContent:'space-between',}}>
<View style={{}}>
<Text style={styles.username}>hello</Text>
<Text style={styles.x}>x</Text>
</View>

</View> */