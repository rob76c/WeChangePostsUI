import { API_URL, authToken } from "./config";

export const listPosts= async () => {
      const res = await fetch(`${API_URL}/post`, {
        headers: {
          Authorization:`Bearer ${authToken}`,
         
        },
      });
      if (res.status !== 200) {
        throw new Error ("Error fetching posts!");
      }
      return await res.json();
};