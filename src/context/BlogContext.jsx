import React, { createContext, useEffect, useState } from 'react'



export const BlogContext = createContext();

function BlogContextProvider({children}) {
  const [posts, setPosts] = useState([])
  const [Loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getPosts = async() => {
    try {
      setLoading(true);

      //TODO: Implement the api call
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      if(!res.ok) { return; }

      const data = await res.json();
      setPosts(data)
      console.log(data)
    } catch (error) {
      console.log(error)
      setError(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPosts();
  }, [])
  return (
    <BlogContext.Provider value={{ posts, Loading ,error}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider

