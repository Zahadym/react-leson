import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <section className='content'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k3ORFuqBmvtmEvaDuGXxDtsJyVkDgCkLUr8qyXjyg5bNomLa"/>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        <a href='#s'>post 1</a>
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;