import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={css.block}>
            <div className={css.blockItem}>
                <div className={css.item + ' ' + css.active}>
                    Dimych
                </div>
                <div className={css.item}>
                    Andrey
                </div>
                <div className={css.item}>
                    Sveta
                </div>
                <div className={css.item}>
                    Sasha
                </div>
                <div className={css.item}>
                    Viktor
                </div>
                <div className={css.item}>
                    Valera
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>How is your it-kamasutra?</div>
                <div className={css.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;