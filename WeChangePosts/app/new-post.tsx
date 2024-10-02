import { useState } from 'react';
import {View, StyleSheet, Text, Image, TextInput, Pressable, SafeAreaView} from 'react-native';
import { Link, useRouter } from 'expo-router';

const user = 
     {
      id: 'u1',
      username: 'VadimNotJustDev',
      name: 'Vadim',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
    }

export default function NewPost() {
    const[text, setText]= useState('');
    const router= useRouter();


    const onPostPress = () => {
        console.warn('Posting the tweet:',text );

        setText('');
        router.back();
    };
    
    return (
        <SafeAreaView style= {{flex: 1, backgroundColor:'white'}}>
        <View style= {styles.container}>
            <View style= {styles.buttonContainer}>

            <Link href = "../" style= {{fontSize: 20}}>
            Cancel
            </Link>

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