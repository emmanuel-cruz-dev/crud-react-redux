import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Emmanuel Cruz",
    email: "yazmanito@gmail.com",
    github: "emmanuel-cruz-dev",
  },
  {
    id: "2",
    name: "John Doe",
    email: "leo@gmail.com",
    github: "leo",
  },
  {
    id: "3",
    name: "Midu Dev",
    email: "midudev@gmail.com",
    github: "midudev",
  },
];

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = () => {
  const persistedState = localStorage.getItem("__redux__state__");
  if (persistedState) return JSON.parse(persistedState).users;
  return DEFAULT_STATE;
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
