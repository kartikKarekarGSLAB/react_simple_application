import * as actionsType from './../actions/actions';

const initialState = {
    persons : []
};

const calculationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsType.ADD_PERSON : 
            return {
                ...state,
                persons : state.persons.concat([{ id:new Date(), name: action.name, age: action.age}]),
            }
        case actionsType.DELETE_PERSON :
            return {
                ...state,
                persons : state.persons.filter( (person) => person.id !== action.deletedId),
            }
    }
    return state;
};

export default calculationsReducer;