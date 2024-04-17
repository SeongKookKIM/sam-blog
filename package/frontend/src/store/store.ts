import { configureStore } from "@reduxjs/toolkit";
import MenuToggleSlice from "../features/common/components/Menu/redux/MenuSlice";

const store = configureStore({
  reducer: {
    MenuToggleSlice: MenuToggleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
