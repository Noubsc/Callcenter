import { combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { DataReducer } from './dataReducer';
const rootReducer = combineReducers({   
    user: DataReducer
  });

export type RootState = ReturnType<typeof rootReducer>;
//export const store = createStore(rootReducer,applyMiddleware(thunk));
// export default rootReducer;