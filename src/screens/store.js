import { createStore } from 'redux';

const INITIAL_STORE = {
    mentories:
    [
        {
            id: 0,
            name: 'Guilherme Gelmi',
            sub: 'matematica',
            datetime: '24/01/2020 00:00'
        },
        {
            id: 1,
            name: 'Guilherme Salvo',
            sub: 'portugues',
            datetime: '12/01/2008 00:00'
        }
    ],
    requestCard:{
        name: '',
        sub: '',
        datetime: '',
    }
}

function reducer(state = INITIAL_STORE, action) {
    switch (action.type) {
        case "ADD_MENTORIES":
            const newMentories = ({
                id: state.mentories[state.mentories.length-1].id+1,
                name: action.name,
                sub: action.sub,
                datetime: action.datetime,
            });
            console.log(newMentories);
            console.log(state.mentories.concat(newMentories))
            return { ...state, mentories: state.mentories.concat(newMentories)}
        case "CHANGE_NAME":
            return { ...state, requestCard:{name: action.name}}
        case "CHANGE_SUB":
            return { ...state, requestCard:{sub: action.sub}}
        case "CHANGE_DATETIME":
            return { ...state, requestCard:{datetime: action.datetime}}
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;