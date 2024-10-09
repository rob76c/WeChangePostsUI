import { router, useSegments } from "expo-router";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import * as SecureStore  from 'expo-secure-store';

const AuthContext= createContext({});

const AuthContextProvidor = ({children}: PropsWithChildren) => {
    const [authToken, setAuthToken] = useState<string | null>(null);
    const segments = useSegments();
    console.log(segments);

    console.log("Auth token=", authToken);

    useEffect(() => {
        const isAuthGroup= segments[0] == '(auth)';

        if (!authToken && !isAuthGroup) {
            console.log("User is not authenticated and connot see this page");
            router.replace('../signIn');
        }
        if (authToken && isAuthGroup) {
            router.replace('/');
        }

    }, [segments, authToken]);

    useEffect(() => {
        const loadAuthToken= async () => {
            const res = await SecureStore.getItemAsync('authToken');
            if (res) {
            setAuthToken(res);
            }
        };
        loadAuthToken();
    }, []);

    const updateAuthToken = async (newToken: string) => {
        await SecureStore.setItemAsync('authToken', newToken);
        setAuthToken(newToken);
    };

    return (
        <AuthContext.Provider value={{authToken, updateAuthToken}} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvidor;

export const useAuth = () => useContext(AuthContext);