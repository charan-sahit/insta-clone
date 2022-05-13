import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import {Divider} from 'react-native-elements'
import { POSTS } from '../data/posts'
import { PageScrollView } from 'pagescrollview'

/* <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        
        
        contentContainerStyle={{flexGrow: 1,}}
        
        > */
        
const Post = ({post}) => {
    const [like,setLike] = useState(post.isLiked);

    return (
        
        
        
                        
                        <View  >
                        
                        <Divider width = {0.5}/>
                        
                        <PostHeader post={post}/>
                        
                        <PostImage post={post} />
                     
                        <PostFooter post={post} like={like} setLike={setLike} />
                  
                        </View>
                        
        
         
        
    )
}


const PostHeader = ({post}) => {
    
    return (
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{flexDirection:'row', margin: 5, alignItems: 'center' }}>
            <Image style={styles.dp} source={{uri: post.dp}}></Image>
            {console.log(post.dp)}
            <Text style={{marginLeft:8, fontWeight: 'bold'}}>{post.user}</Text>
            </View>
            <Text style={{ marginTop: 15,marginRight:10, alignItems: 'center' ,justifyContent: 'center', fontWeight: 'bold'}}>...</Text>
        </View>
    )
}
/* 
<View style={styles.postContainer}> */
const PostImage = ({post}) => {
    return (

       <View style={styles.postContainer}>
            <Image style={styles.image} source={{uri: post.post_url}} />

       </View>
            
            
       
        
        
        
    )
}

const PostFooter = ({post,like,setLike}) => {

    return (
        <View>
        <View>
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{flexDirection:'row', margin: 5, alignItems: 'center' }}>

                {
                    like ? 
                    <TouchableOpacity onPress={() => setLike(!like)}>
                    <Image source={require('../assets/like.png')} style={{width: 32, height: 30,alignSelf:'flex-end',marginBottom:0}} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => setLike(!like)}>
                    <Image source={require('../assets/liked.png')} style={{width: 32, height: 30,alignSelf:'flex-end',marginBottom:0}}></Image>
                    </TouchableOpacity>
                }
                
                <Image source={require('../assets/comment.jpg')} style={{width: 52, height: 52,alignSelf:'flex-end',}}></Image>
                <Image source={require('../assets/share.png')} style={{width: 30, height: 30,alignSelf:'flex-end',marginBottom:8,marginLeft:5}}></Image>
                
            </View>
            <Image source={require('../assets/save.png')} style={{width: 30, height: 30,alignSelf:'flex-end',marginBottom:20}}></Image>
        </View>
        {
            like ?
            <Text style={{marginLeft:10,fontWeight:'bold',fontSize: 15}}>{post.likes} likes</Text>

            :
            <Text style={{marginLeft:10,fontWeight:'bold',fontSize: 15}}>liked by you and {post.likes} others</Text>

        }
        
        </View>
        <Caption post={post}/>
        <CommentSection post={post}/>
        </View>
    )
}

const Caption = ({post}) => {
    return (
        <View style={{flexDirection:'row',}}>
            <Text style={{marginLeft:10,fontWeight:'bold',fontSize: 15}}>{post.user}</Text>
            <Text style={{}}> {post.caption}</Text>
        </View>
        )
}

const CommentSection = ({post}) => {
    return (
        
        <View >
            {!!post.comments.length &&             <Text style={{marginLeft: 10, color: 'grey',fontSize:15}}>View {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment' }</Text>
}
        {post.comments.length > 0 ?
        <View style={{flexDirection:'row',}}>
            <Text style={{marginLeft:10,fontWeight:'bold',fontSize: 15}}>{post.comments[0].user}</Text>
            <Text style={{fontSize: 15, marginBottom: 15}}> {post.comments[0].comment}</Text>
        </View>
        : <View></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        

    },
    dp: {
        width: 35,
        height: 35,
        margin:5,
        borderRadius: 20,
        
        
        borderWidth : 1,
        borderColor : '#ff8501'
    },
    postContainer: {
         width: '100%',
         
        height: 400, 
    },
    image: {
       
        height: '100%',
        resizeMode: 'cover', 
        
    }

})



export default Post
