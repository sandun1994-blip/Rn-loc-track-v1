import user from './slices/user';
import {configureStore} from '@reduxjs/toolkit';
//import logger from 'redux-logger'
export const store = configureStore({
  reducer: {user},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
});

//middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
