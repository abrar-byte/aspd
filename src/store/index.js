import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { RootReducer, blacklist } from './reducer'

const persistConfig = {
  key: 'root',
  // blacklist,
  storage
}
const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(
  persistedReducer,
  // composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export const persistor = persistStore(store)
