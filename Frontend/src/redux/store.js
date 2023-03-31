import { configureStore } from "@reduxjs/toolkit";
import registration from "./registration";
export default configureStore({
    reducer:{registration:registration}
})