import { configureStore } from "@reduxjs/toolkit";
import { api } from "./feature/api/apiSlice";


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});


export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;