import { ADD_TO_USER } from './dataAction';

const initialState={
    user:[]
}

export function DataReducer(state = initialState, action){

    switch(action.type){

        case ADD_TO_USER : 
        const updateState =[...state.user,action.payload];

                return{
                    ...state,
                    users:updateState
                }
                
        default:
            return state;


    }



}

