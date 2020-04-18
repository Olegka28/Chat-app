import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage 
    }

}


const DialogsContainer = connect(mapStateToProps, {sendMessageCreator, updateNewMessageBodyCreator}) (Dialogs)

export default DialogsContainer;