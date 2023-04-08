import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";


//rigel el matricule
import {useSelector,useDispatch} from "react-redux" 
import {setFirstName,setLastName,setId,setDriverLicense,setEmail,setPhoneNumber} from "../redux/registration"
export default function DriverForm() {

  const dispatch=useDispatch()


  const firstName=useSelector((state)=>state.registration.firstName)
  const firstNameError=useSelector((state)=>state.registrationError.firstNameError)
  const handleFirstName=(e)=>{
    dispatch(setFirstName(e.target.value))
  }
  const id=useSelector((state)=>state.registration.id)
  const idError=useSelector((state)=>state.registrationError.idError)
  const handleId = (e) => {
    const regEX = new RegExp("^[0-9]{0,8}$");
    if (regEX.test(e.target.value)) {
      dispatch(setId(e.target.value))
    }
  };

  const lastName=useSelector((state)=>state.registration.lastName)
  const lastNameError=useSelector((state)=>state.registrationError.lastNameError)
  const handleLastName=(e)=>{
    dispatch(setLastName(e.target.value))
  }

  const driverLicense=useSelector((state)=>state.registration.driverLicense)
  const driverLicenseError=useSelector((state)=>state.registrationError.driverLicenseError)

  const handleDriverLicense = (e) => {
    const regEX = new RegExp("^[0-9]{0,2}/*[0-9]{0,6}$");
    if (regEX.test(e.target.value)) {
      if (driverLicense.length == 1 && e.target.value.length == 2) {
        dispatch(setDriverLicense(e.target.value+"/"))
      }
      else{dispatch(setDriverLicense(e.target.value))}
    }
  };

  const email=useSelector((state)=>state.registration.email)
  const emailError=useSelector((state)=>state.registrationError.emailError)
  const handleEmail = (e) => {
      dispatch(setEmail(e.target.value))
  };
//    const regEX = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  const phoneNumber=useSelector((state)=>state.registration.phoneNumber)
  const phoneNumberError=useSelector((state)=>state.registrationError.phoneNumberError)

  const handlePhoneNumber = (e) => {
    const regEX = new RegExp("^[0-9]{0,8}$")
    if (regEX.test(e.target.value)) {
      dispatch(setPhoneNumber(e.target.value));
    }
  };



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Driver data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={firstName}
            error={firstNameError}
            onChange={handleFirstName}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={lastName}
            error={lastNameError}
            onChange={handleLastName}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ID"
            name="ID"
            label="ID"
            fullWidth
            value={id}
            error={idError}
            onChange={handleId}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          required
            id="Driver license"
            name="Driver license"
            label="Driver license"
            fullWidth
            value={driverLicense}
            error={driverLicenseError}
            onChange={handleDriverLicense}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            value={email}
            error={emailError}
            onChange={handleEmail}
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Phone Number"
            name="Phone Number"
            label="Phone Number"
            value={phoneNumber}
            error={phoneNumberError}
            onChange={handlePhoneNumber}
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>  
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
