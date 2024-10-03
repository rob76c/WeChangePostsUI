import posts from "@/assets/data/posts";
import Post from "@/components/Post";
import { useGlobalSearchParams } from "expo-router";
import { Text } from "react-native";


export default function PostScreen () {
    const {id} = useGlobalSearchParams();

    const post= posts.find((t) => t.id === id);


    if (!post) {
        return <Text> Post {id} not found!</Text>;
    }

    return <Post post = {post} />;
}