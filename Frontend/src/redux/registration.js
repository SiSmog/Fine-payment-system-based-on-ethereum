import {createSlice} from "@reduxjs/toolkit"

const registrationSlice= createSlice({
    name:"registration",
    initialState:{
        firstName:"test",
        lastName:"",
        id:"",
        driverLicense:"",
        email:"",
        phoneNumber:"",
        licensePlate:"",
        speedLimit:"",
        speed:""
    },
    reducers:{
        setFirstName: (state,value)=>{state.firstName=value.payload},
        setLastName: (state,value)=>{state.lastName=value.payload},
        setId: (state,value)=>{state.id=value.payload},
        setDriverLicense: (state,value)=>{state.driverLicense=value.payload},
        setEmail: (state,value)=>{state.email=value.payload},
        setPhoneNumber: (state,value)=>{state.phoneNumber=value.payload},
        setLicensePlate: (state,value)=>{state.licensePlate=value.payload},
        setSpeedLimit: (state,value)=>{state.speedLimit=value.payload},
        setSpeed: (state,value)=>{state.speed=value.payload},
    }
})
export const {setFirstName,setLastName,setId,setDriverLicense,setEmail,setPhoneNumber,setLicensePlate,setSpeedLimit,setSpeed}=registrationSlice.actions

export default registrationSlice.reducer