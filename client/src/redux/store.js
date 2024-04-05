import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import themeRedecer from './theme/themeSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    user: userReducer,
    theme: themeRedecer
})
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

