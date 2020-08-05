import * as actionsType from './../actions/actions';

const initialState = {
    counter : 0,
    isDecrementPossible : false
};

const calculationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsType.INCR : 
            return {
                ...state,
                counter : state.counter+1,
                isDecrementPossible : false

            }
        case actionsType.DECR :
            return {
                ...state,
                counter : state.counter-1 > 0 ? state.counter-1 : 0,
                isDecrementPossible : (state.counter-1 > 0) ? false : true
            }
        case actionsType.ADD : 
            return {
                ...state,
                counter : state.counter + 5,
                isDecrementPossible : false,
            }
        case actionsType.SUBTRACT :
            return {
                ...state,
                counter : (state.counter-5 > 0 ) ? state.counter-5 : 0,
                isDecrementPossible : (state.counter-5 > 0) ? false : true
            }
    }
    return state;
};

export default calculationsReducer;