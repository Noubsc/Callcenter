import { combineReducers } from 'redux';
//import thunk from 'redux-thunk';
import { DataReducer } from './dataReducer';


const rootReducer = combineReducers({   
     userData : DataReducer
  });




//export type RootState = ReturnType<typeof rootReducer>;
//export const store = createStore(rootReducer,applyMiddleware(thunk));
export default rootReducer;