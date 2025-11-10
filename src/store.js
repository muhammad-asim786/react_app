// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0,
  isAuthenticated: false,
  user: null
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        isAuthenticated: true,
        user: action.payload
      };
    case 'LOGOUT':
      return { 
        ...state, 
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

// Create store
export const store = createStore(rootReducer);