const UsersReducer = (state = [], action) => {

    switch(action.type){

        case "Login" : return state.concat([action.data]);
        default : break;


    }



}

export default UsersReducer;