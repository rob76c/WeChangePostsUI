import { createContext, PropsWithChildren, useContext } from "react";
import { API_URL } from "./config";
import { useAuth } from "@/context/AuthContext";

const PostsApiContext= createContext({});

const PostsApiContextProvider= ({children}: PropsWithChildren) => {
const {authToken}= useAuth();
  
const listPosts= async () => {
  if (!authToken) {
    return;
  }
  const res = await fetch(`${API_URL}/post`, {
    headers: {
      Authorization:`Bearer ${authToken}`,
    },
  });
  if (res.status== 400) {
    throw new Error('Not authorized, please sign in')
  }
  if (res.status !== 200) {
    throw new Error ("Error fetching posts!");
  }
  return await res.json();
};

const getPost = async (id:string) => {
  if (!authToken) {
    return;
  }
const res = await fetch(`${API_URL}/post/ ${id}`, {
    headers: {
      Authorization:`Bearer ${authToken}`,
    },
  });
  if (res.status== 400) {
    throw new Error('Not authorized, please sign in')
  }
  if (res.status !== 200) {
    throw new Error ("Error fetching posts!");
  }
  return await res.json();


}

const createPost = async (data: {content: string}) => {
  if (!authToken) {
    return;
  }
const res = await fetch(`${API_URL}/post`, {
    method: 'POST', 
    headers: {
      Authorization:`Bearer ${authToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (res.status== 400) {
    throw new Error('Not authorized, please sign in')
  }
  if (res.status !== 200) {
    throw new Error ("Error creating post!");
  }
  return await res.json();


}

    return (<PostsApiContext.Provider value={{
      listPosts,
      getPost,
      createPost,
    }}
    >
      {children}
      </PostsApiContext.Provider>

    );
};

export default PostsApiContextProvider;

export const usePostsApi = () => useContext(PostsApiContext);