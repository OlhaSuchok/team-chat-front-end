import { configureStore } from "@reduxjs/toolkit";

import { myValueSlice } from "./message/slice";
import { myItemSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    myItem: myItemSlice.reducer,
  },
});
