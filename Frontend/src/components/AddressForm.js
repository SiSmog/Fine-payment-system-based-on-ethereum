import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//rigel el matricule
import {useSelector,useDispatch} from "react-redux" 
import {setFirstName,setLastName,setId,setDriverLicense,setEmail,setPhoneNumber} from "../redux/registration"
export default function AddressForm() {

  const dispatch=useDispatch()


  const firstName=useSelector((state)=>state.registration.firstName)
  const handleFirstName=(e)=>{
    dispatch(setFirstName(e.target.value))
  }
  const id=useSelector((state)=>state.registration.id)
  const handleId = (e) => {
    const regEX = new RegExp("^[0-9]{0,8}$");
    if (regEX.test(e.target.value)) {
      dispatch(setId(e.target.value))
    }
  };

  const lastName=useSelector((state)=>state.registration.lastName)
  const handleLastName=(e)=>{
    dispatch(setLastName(e.target.value))
  }

  const driverLicense=useSelector((state)=>state.registration.driverLicense)

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
  const handleEmail = (e) => {
      dispatch(setEmail(e.target.value))
  };
//    const regEX = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  const phoneNumber=useSelector((state)=>state.registration.phoneNumber)

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
            onChange={handleLastName}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CIN"
            name="CIN"
            label="CIN"
            fullWidth
            value={id}
            onChange={handleId}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Driver license"
            fullWidth
            value={driverLicense}
            onChange={handleDriverLicense}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            value={email}
            onChange={handleEmail}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            value={phoneNumber}
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
