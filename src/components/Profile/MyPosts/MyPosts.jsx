import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you', likeCount: 22},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'Yo', likeCount: 1},
        {id: 4, message: 'Yo', likeCount: 0},
        {id: 5, message: 'Yo', likeCount: 0},
        {id: 6, message: 'Yo', likeCount: 0}
    ]

    let posts = postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)
    return (
        <div className={css.block}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div className={css.btn}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;