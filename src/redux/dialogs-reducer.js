const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {messages: [{id: 1, message: 'Hizzz'},
{id: 1, message: 'Hello'},
{id: 2, message: 'Halo'},
{id: 3, message: 'Joomble'},
{id: 4, message: 'Factor'}],
dialogs: [{id: 1, name: 'Oleg'},
{id: 2, name: 'Ruslan'},
{id: 3, name: 'Danil'},
{id: 4, name: 'Bogdan'},
{id: 5, name: 'Fedor'},
{id: 6, name: 'Sveta'},
{id: 7, name: 'Ira'},
{id: 8, name: 'Masha'},
{id: 9, name: 'Anastasia'}
],
newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, 
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state, 
            newMessageBody: "",
            messages: [...state.messages, {id: 5, message: body}]
        };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;