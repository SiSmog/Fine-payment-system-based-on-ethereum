import { configureStore } from "@reduxjs/toolkit";
import registration from "./registration";
import registrationError from "./registrationError";
export default configureStore({
    reducer:{registration:registration,registrationError:registrationError}
})