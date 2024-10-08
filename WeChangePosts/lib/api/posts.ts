import { API_URL, authToken } from "./config";

export const listPosts= async () => {
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

export const getPost = async (id:string) => {
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

export const createPost = async (data: {content: string}) => {
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