import { configureStore } from "@reduxjs/toolkit";
import registration from "./registration";
import registrationError from "./registrationError";
import history from "./history";
export default configureStore({
    reducer:{
            registration:registration,
            registrationError:registrationError,
            history:history
            }
})