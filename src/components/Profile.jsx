import React from 'react';
import css from './Profile.module.css';

const Profile = () => {
    return (
        <section className={css.content}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k3ORFuqBmvtmEvaDuGXxDtsJyVkDgCkLUr8qyXjyg5bNomLa"/>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={css.posts}>
                    <div className={css.item}>
                        <a className={css.link} href='#s'>post 1</a>
                    </div>
                    <div className={css.item}>
                        <a className={css.link} href='#s'>post 2</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;