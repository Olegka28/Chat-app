import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = state.messages.map ( message => <Message message={message.message} key={message.id} id={message.id}/>)
    let newMessageBody = state.newMessageBody;
    

    let onSendMessageClick = () => {
        props.sendMessageCreator();
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBodyCreator(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div className={classes.sendArea}>    
            <textarea placeholder='Enter your message' 
                    className={classes.textarea} 
                    value={newMessageBody} 
                    onChange={onNewMessageChange}>

                </textarea>
                <button className={classes.button} onClick={onSendMessageClick}>
                    Send
                </button>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;