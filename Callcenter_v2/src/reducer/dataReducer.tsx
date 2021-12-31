import  UserObject  from "./interfaceUser"




export function DataReducer(state : UserObject = null, action ) : UserObject{

    
    switch(action.type){

        case 'LOGIN' :
            return action.payload
        case 'LOGOUT' :
            return action.payload
        default: 
            return state

    }



}

