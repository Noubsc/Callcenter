import { ADD_TO_USER } from './dataAction';

const initialState={
    users:[]
}

const DataReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_TO_USER : 
        const updateState =[...state.users,action.payload];

                return{

                    ...state,
                    users:updateState
                }
                
        default:
            return state;


    }



}

export default DataReducer;