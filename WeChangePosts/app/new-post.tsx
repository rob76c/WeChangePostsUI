import { useState } from 'react';
import {View, StyleSheet, Text, Image, TextInput, Pressable, SafeAreaView, ActivityIndicator} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { QueryCache, QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { usePostsApi } from '@/lib/api/posts';

const user = 
     {
      id: 'u1',
      username: 'Robbie',
      name: 'Robert',
      image:
        'https://firebasestorage.googleapis.com/v0/b/photos-7fc70.appspot.com/o/85124617_10157089496103042_1961321284147085312_n.jpg?alt=media&token=bfc9e521-096f-4337-b7fd-9de5b46c2ebf',
    }

export default function NewPost() {
    const[text, setText]= useState('');
    const router= useRouter();
    const {createPost} = usePostsApi();

    const queryClient= useQueryClient();

    const {mutateAsync, isLoading, isError, error} = useMutation ({
        mutationFn: createPost,
        onSuccess: (data) => {
            // queryClient.invalidateQueries({queryKey: ['posts']})
            queryClient.setQueriesData(['posts'], (existingPosts) => {
                return [
                data,
                ...existingPosts,
            ];
        });
        },
    });


    const onPostPress = async () => {
        try {
            await mutateAsync({content:text});

            setText('');
            router.back();
        } catch (e){
            console.log('Error:', e.message);
        }
    };
    
    return (
        <SafeAreaView style= {{flex: 1, backgroundColor:'white'}}>
        <View style= {styles.container}>
            <View style= {styles.buttonContainer}>

            <Link href = "../" style= {{fontSize: 20}}>
            Cancel
            </Link>
            {isLoading && <ActivityIndicator/>}

            <Pressable onPress={onPostPress} style= {styles.button}>
                <Text style ={styles.buttonText}>Post</Text>
            </Pressable>
            </View>

            <View style= {styles.inputContainer}>
            <Image source= {{uri: user.image}} style={styles.image}/>
            <TextInput 
            value= {text}
            onChangeText={setText}
            placeholder="Whats happening?" 
            multiline 
            numberOfLines={5}
            style= {{flex: 1}}
            />
        </View>

        {isError&& <Text> Error: {error.message}</Text>}
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,

    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',

    },

    image:{
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    }
});