import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createDebugger from 'redux-flipper';
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
import rootReducer from './rootReducer';

export type MiddlewareFunction = (store: any) => (next: any) => (action: any) => any;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['nav', 'auth'],
};

const otherMiddlewares : MiddlewareFunction[] = [];

if (__DEV__) {
  otherMiddlewares.push(createDebugger());
}

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(otherMiddlewares),
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
