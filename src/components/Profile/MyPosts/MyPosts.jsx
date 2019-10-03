import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message={'Hi, how are you'} likeCounts={'22'}/>
                <Post message={'It\'s my first post'} likeCounts={'15'}/>
                <Post message={'Yo'} likeCounts={'9'}/>
            </div>
        </div>
    );
}

export default MyPosts;