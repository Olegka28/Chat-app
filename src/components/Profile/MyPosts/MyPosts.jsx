import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let postsElements = props.posts.map ( post =>  <Post message={post.message} like={post.likesCount}/>)

   let newPostElement = React.createRef();

   let onAddPost = () => {
      props.onAddPost();
}

   let onPosteChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
}

    return  <div className={classes.myPost}>
       <h3>My post</h3>
       <div>
         <div>
            <textarea placeholder="Создать пост" onChange={onPosteChange} ref={newPostElement} 
            value={props.newPostText} cols="30" rows="3"/>
         </div>
         <div>
            <button onClick={ onAddPost }>Add post</button>
         </div>
       </div>
       <div className={classes.posts}>
          { postsElements }
      </div>
       </div>;
}

export default MyPosts;