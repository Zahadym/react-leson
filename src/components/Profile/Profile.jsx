import React from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section className={css.block}>
            <ProfileInfo />
            <MyPosts/>
        </section>
    );
}

export default Profile;