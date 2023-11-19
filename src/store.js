import  { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import productsReducer from "./slices/productsSlice";
//const reducer = combineReducers({
 //productsState:productsReducer
//})


/*const store = configureStore({
    reducer,
    middleware:[thunk]
})

export default store;*/
const store = configureStore({
    reducer: {
      productsState: productsReducer,
      // Add other reducers here if needed
    },
    middleware: [thunk]
  });
  
  export default store;
