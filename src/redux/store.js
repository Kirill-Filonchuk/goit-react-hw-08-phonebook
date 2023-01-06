import { configureStore } from '@reduxjs/toolkit';
// , combineReducers , getDefaultMiddleware
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/contacts/filterSlice';
import { authReducer } from 'redux/auth/authSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   auth: authReducer,
// });

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    // phoneBook: persistedReducer, //in persist
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  //   middleware,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
