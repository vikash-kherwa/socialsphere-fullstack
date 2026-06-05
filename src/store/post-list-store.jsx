import axios from "axios";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post._id !== action.payload.postId,
    );
    return newPostList;
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
    return newPostList;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
    return newPostList;
  }return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = async (postData) => {
    try {
      const res = await axios.post("http://localhost:5000/posts", postData);

      dispatchPostList({
        type: "ADD_POST",
        payload: res.data.post,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${postId}`);

      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
