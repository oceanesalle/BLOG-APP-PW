import React from 'react'
import Post from './Post/Post';
import useStyles from './style';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <div>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts