import { StyleSheet, View, FlatList} from 'react-native';

import posts from '@/assets/data/posts';
import Post from '@/components/Post';

export default function TabOneScreen() {
  return (
    <View style= {styles.page} >
      <FlatList 
      data= {posts} 
      renderItem={ ({item}) => <Post post= {item} />}
       />
    </View>
 
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
