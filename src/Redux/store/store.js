import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Reducer/productSlice";

export default configureStore({
  reducer: {
    product: productSlice,
  },
});
