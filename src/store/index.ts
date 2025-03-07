import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

const persistenceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;

    // Fase 1
    console.log({ type, payload });

    console.log(store.getState());
    next(action);

    // Fase 2
    console.log(store.getState());
  };

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      persistenceLocalStorageMiddleware,
      syncWithDatabaseMiddleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
