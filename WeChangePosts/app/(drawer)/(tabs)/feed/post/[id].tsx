import Post from "@/components/Post";
import { useGlobalSearchParams } from "expo-router";
import { ActivityIndicator, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/lib/api/posts";

export default function PostScreen () {
    const {id} = useGlobalSearchParams();

    const {data, isLoading, error} = useQuery ({
        queryKey: ['post',id],
        queryFn: () => getPost(id as string)
    })

    if (isLoading) {
        return <ActivityIndicator />;

    }

    if (error) {
        return <Text> Post {id} not found!</Text>
    }

    return <Post post = {data} />;
}