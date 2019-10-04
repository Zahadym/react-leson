import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={css.item + ' ' + css.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={css.message}>
            {props.text}
        </div>
    );
}
const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]

    let dialogsElement = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElement = messagesData.map( mess => <Message text={mess.message}/>);

    return (
        <div className={css.block}>
            <div className={css.blockItem}>
                {dialogsElement}
            </div>
            <div className={css.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;