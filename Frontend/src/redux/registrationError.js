import {createSlice} from "@reduxjs/toolkit"

const registrationSlice= createSlice({
    name:"registrationError",
    initialState:{
        firstNameError:false,
        lastNameError:false,
        idError:false,
        driverLicenseError:false,
        emailError:false,
        phoneNumberError:false,
        licensePlateError:[false,false,false,false],
        speedLimitError:false,
        speedError:false
    },
    reducers:{
        setFirstNameError: (state,value)=>{state.firstNameError=value.payload},
        setLastNameError: (state,value)=>{state.lastNameError=value.payload},
        setIdError: (state,value)=>{state.idError=value.payload},
        setDriverLicenseError: (state,value)=>{state.driverLicenseError=value.payload},
        setEmailError: (state,value)=>{state.emailError=value.payload},
        setPhoneNumberError: (state,value)=>{state.phoneNumberError=value.payload},
        setLicensePlateError: (state,value)=>{state.licensePlateError[value.payload.index]=value.payload.value},
        setSpeedLimitError: (state,value)=>{state.speedLimitError=value.payload},
        setSpeedError: (state,value)=>{state.speedError=value.payload},
    }
})
export const {setFirstNameError,setLastNameError,setIdError,setDriverLicenseError,setEmailError,setPhoneNumberError,setLicensePlateError,setSpeedLimitError,setSpeedError}=registrationSlice.actions

export default registrationSlice.reducer