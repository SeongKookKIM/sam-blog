import { createSlice } from "@reduxjs/toolkit";

// 메뉴 반응형 토글 slice
const MenuToggleSlice = createSlice({
  name: "MenuToggleSlice",
  initialState: false,
  reducers: {
    handlerMenuTogglebtn(state, action) {
      console.log(state);
      return action.payload;
    },
  },
});
export const { handlerMenuTogglebtn } = MenuToggleSlice.actions;

export default MenuToggleSlice;
