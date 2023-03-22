import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
  const [CIN, setCIN] = React.useState("");
  const handleCIN = (e) => {
    const regEX = new RegExp("^[0-9]{0,8}$");
    console.log(e.target.value);
    if (regEX.test(e.target.value)) {
      setCIN(e.target.value);
    }
  };
  const [license, setLicense] = React.useState("");
  const handleLicense = (e) => {
    const regEX = new RegExp("^[0-9]{0,2}/*[0-9]{0,6}$");
    if (regEX.test(e.target.value)) {
      if (license.length == 1 && e.target.value.length == 2) {
        setLicense(e.target.value + "/");
      }
      else{setLicense(e.target.value)}
    }
  };
  const [email, setEmail] = React.useState("");
  const handleEmail = (e) => {
    const regEX = {};
    console.log(e.target.value);   
    if (regEX.test(e.target.value)) {
      setEmail(e.target.value);
    }
  };
  const [phone, setPhone] = React.useState("");
  const handlePhone = (e) => {
    const regEX = new RegExp("^[0-9]{0,8}$")
    console.log(e.target.value);
    if (regEX.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };
  const [firstName, setFirstName] = React.useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const [lastName, setLastName] = React.useState("");
  const handleLastName = (e) => {
      setLastName(e.target.value);  
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
            value={CIN}
            onChange={handleCIN}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Driver license"
            fullWidth
            value={license}
            onChange={handleLicense}
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
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            value={phone}
            onChange={handlePhone}
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
