import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { isRejected, isFulfilled } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE } from 'redux-persist';
import { PERSIST, PURGE, REGISTER } from 'redux-persist';

import { filterReducer } from './slice';
import { contactsAPI } from './contactsAPI';

const rtkQueryErrorLogger = api => next => action => {
  if (isRejected(action)) {
    console.warn('Rejected!');
    console.log(action.error.message);
  }
  if (isFulfilled(action)) {
    console.warn('Fulfilled!');
  }
  return next(action);
};

// ----------------persistReducer---------------- //

const rootPersistConfig = {
  key: 'phoneBook',
  storage,
  blacklist: ['contactsAPI'],
};

const rootReducer = combineReducers({
  [contactsAPI.reducerPath]: contactsAPI.reducer,
  filter: filterReducer,
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

// ----------------configureStore---------------- //

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsAPI.middleware,
    rtkQueryErrorLogger,
  ],
});

// -----------------persistStore----------------- //

export const persistor = persistStore(store);
