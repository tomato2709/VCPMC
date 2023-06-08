import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' 
import userSlice from "./slice/userSlice";
import usersSlice from "./slice/listUserSlice";
import recordSlice from "./slice/recordSlice";
import playlistSlice from "./slice/playlistSlice";
import deviceSlice from "./slice/deviceSlice";
import authorizedPartnerSlice from "./slice/authorizedPartner";
import unitSlice from "./slice/unitSlice";
import authContractSlice from "./slice/authorizedContract";

const persistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
	users: usersSlice.reducer,
	record: recordSlice.reducer,
	playlist: playlistSlice.reducer,
	device: deviceSlice.reducer,
	authorizedPartner: authorizedPartnerSlice.reducer,
	unit: unitSlice.reducer,
	authContract: authContractSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	})
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: ()=> typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector