import {View, Text, Image, StyleSheet} from 'react-native';
import { PostType } from '@/types';
import {Entypo, EvilIcons} from '@expo/vector-icons';

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string | number;

};

const IconButton = ({icon, text}: IconButtonProps) => {
  return (
    <View style= {{ flexDirection: 'row', alignItems: 'center'}}>
    {/* {ICon} */}
    <EvilIcons name= {icon} size= {22} color="gray" />
    {/* {Number} */}
    <Text style= {{fontSize: 12, color: "gray"}}>{text}</Text>
  </View>
  );
};


type PostProps= {
  post: PostType;
};

const Post = ({post}: PostProps) => {
  
    return (
        <View style={styles.container}>
        <Image 
        source= {{uri: post.user.image}} // correct way for all updated versions: src={post.user.image}
        style= {styles.userImage}
        />
        <View style= {styles.mainContainer} >
          <View style= {{flexDirection: 'row'}} >
            <Text style= {styles.name}>{post.user.name}</Text>
            <Text style= {styles.username}>{post.user.username} •2h </Text>
            <Entypo 
            name="dots-three-horizontal" 
            size={16} 
            color="gray"
            style= {{marginLeft: 'auto'}}
            />
            </View>

            <Text style= {styles.content}>{post.content} •2h </Text>

        {post.image && <Image 
        source= {{uri: post.image}} // correct way for all updated versions: src={post.user.image}
        style= {styles.image}
        />}
        <View style= {styles.footer}>
        <IconButton icon= "comment" text= {post.numberOfComments}/>
        <IconButton icon= "retweet" text= {post.numberOfReposts}/>
        <IconButton icon= "heart" text= {post.numberOfLikes}/>
        <IconButton icon= "chart" text= {post.impressions}/>         
        <IconButton icon= "share-apple" />  

        </View>
      </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'lightgrey',
      backgroundColor: 'white',
    },
    userImage: {
      width: 50, 
      height:50, 
      borderRadius: 50,
    },
    mainContainer: {
      marginLeft: 10,
      flex: 1,
    },
    name: {
      fontWeight: '600'
    },
    username: {
      color: 'gray',
      marginLeft: 5,
    },
    content: {
      lineHeight: 20,
      marginTop: 5,
    },
    image: {
      width: '100%',
      aspectRatio: 16/9,
      marginVertical: 10,
      borderRadius:15,
    },

    //footer
    footer: {
      flexDirection: 'row',
      marginVertical: 5,
      justifyContent: 'space-between',

    }
  });

  export default Post;