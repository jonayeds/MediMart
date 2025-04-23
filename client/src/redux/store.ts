import {combineReducers, configureStore} from "@reduxjs/toolkit"
import authReducer from "@/redux/features/auth/authSlice"
import {  FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from "redux-persist"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/lib/persistStore"


const persistConfig = {
    key:"root",
    storage,
    whitelist:["auth"]
}

const rootReducer = combineReducers({
    auth:authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store