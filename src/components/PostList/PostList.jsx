import React, { useContext } from "react";
// import PostItem from "../PostItem/PostItem";
import { BlogContext } from "../../context/BlogContext";
import LoadingItem from "../LoadingItem/LoadingItem";
import ErorrItem from "../ErorrItem/ErorrItem";
import PostItem from "../blogitems";
function PostList() {
  const { posts, Loading, error } = useContext(BlogContext);
  //  console.log(posts )

  if (Loading) {
    return <LoadingItem />;
  }
  if(error) {
    return <ErorrItem />
  }
  return (
  <div>
    <h1>
      PostList
    </h1>
  </div>
  );
}

export default PostList;
