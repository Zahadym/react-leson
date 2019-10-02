import React from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <section className={css.content}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k3ORFuqBmvtmEvaDuGXxDtsJyVkDgCkLUr8qyXjyg5bNomLa"/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </section>
    );
}

export default Profile;