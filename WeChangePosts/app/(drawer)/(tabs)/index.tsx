import { StyleSheet, View, FlatList, Pressable} from 'react-native';

import posts from '@/assets/data/posts';
import Post from '@/components/Post';
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style= {styles.page} >
      <FlatList 
      data= {posts} 
      renderItem={ ({item}) => <Post post= {item} />}
       />

        <Link href= "/new-post" asChild>
        <Entypo name="plus" size={24} color="white" style= {styles.floatingButton}
        />
        </Link>
    </View>
 
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    backgroundColor: 'gray',

    borderRadius: 25,
    padding: 15,

    position: 'absolute',
    right: 15,
    bottom: 15,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.25,
    shadowRadius: 3.65,
    elevation: 5,

    overflow: 'hidden',
  },
});
