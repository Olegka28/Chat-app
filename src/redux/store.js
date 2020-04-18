import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer.js.js";
import sidebarReducer from "./sitebar-reduser";


let store ={
    _callSubscriber () {
        console.log('State change');
    },
    _state: {
        profilePage: {posts: [{id: 1, message: 'Hizzz', likesCount: 12}, 
        {id: 1, message: 'Hello', likesCount: 99}],
        newPostText: '1'},
        dialogsPage: {messages: [{id: 1, message: 'Hizzz'},
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
    },
        siteBar: {friends: [{id: 1, name: 'Anastasia'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Ruslan'}]}
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = sidebarReducer(this._state.siteBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;