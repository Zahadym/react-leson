import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
                    <div className={css.item}>
                        <img className={css.avatar} src={'data:image/jpeg;base64,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'}/>
                        <a className={css.link} href='#s'>{props.message}</a>
                        <div>
                            <span>like </span> {props.likeCount}
                        </div>
                    </div>
    );
}

export default Post;