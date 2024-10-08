import { router, useSegments } from "expo-router";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

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

    return (
        <AuthContext.Provider value={{authToken, setAuthToken}} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvidor;

export const useAuth = () => useContext(AuthContext);