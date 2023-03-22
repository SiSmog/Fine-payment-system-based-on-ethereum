import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

export default function PaymentForm() {
  const [typeOfCarPlateLicence, setTypeOfCarPlateLicence] = React.useState("");
  const [tuValue, setTuValue] = React.useState("");
  const [rsValue, setRsValue] = React.useState("");
  const [motoValue, setMotoValue] = React.useState("");
  // add more state variables for each option

  const handleChange = (event) => {
    setTypeOfCarPlateLicence(event.target.value);
  };

  const [limitSpeed, setLimitSpeed] = React.useState("");
  const handleLimitSpeed = (e) => {
    const regEX = new RegExp("^[0-9]{0,3}$")
    console.log(e.target.value);
    if (regEX.test(e.target.value)) {
      setLimitSpeed(e.target.value);
    }
  };

  const [actualSpeed, setActualSpeed] = React.useState("");
  const handleActualSpeed = (e) => {
    const regEX = new RegExp("^[0-9]{0,3}$")
    console.log(e.target.value);
    if (regEX.test(e.target.value)) {
      setActualSpeed(e.target.value);
    }
  };
  const [serieTU, setSerieTU] = React.useState("");
  const handleSerieTU = (e) => {
    const regEX = new RegExp("^[0-9]{0,3}$")
    console.log(e.target.value);
    if (regEX.test(e.target.value)) {
      setSerieTU(e.target.value);
    }
  };
  const [numeroTU, setNumeroTU] = React.useState("");
  const handleNumeroTU = (e) => {
    const regEX = new RegExp("^[0-9]{0,4}$")
    console.log(e.target.value);
    if (regEX.test(e.target.value)) {
      setNumeroTU(e.target.value);
    }
  };



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
        }}
      >
            <Grid item xs={6}>
                <TextField
                  label="Limit Speed "
                  value={limitSpeed}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">Km/H</InputAdornment>,
                  }}
                  onChange={handleLimitSpeed}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Actual Speed"
                  value={actualSpeed}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">Km/H</InputAdornment>,
                  }}
                  onChange={handleActualSpeed}
                  fullWidth
                />
              </Grid>
        <Grid item xs={12} >
          <InputLabel id="demo-simple-select-label">
            Car plate Licence
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={typeOfCarPlateLicence}
            label="Licence Plate"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={"TU"}>Série Normale (TU) تونس</MenuItem>
            <MenuItem value={"RS"}>Régime Suspensif (RS) ن ت</MenuItem>
            <MenuItem value={"MOTO"}>Moto (MOTO) د ن</MenuItem>
            {/* add more menu items for each option */}
          </Select>
          </Grid>
          <Grid item container spacing={2}>
          {typeOfCarPlateLicence === "TU" && (
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Serie"
                  value={serieTU}
                  onChange={handleSerieTU}
                  fullWidth
                />
              </Grid>

              
              <Grid item xs={6}>
                <TextField
                  label="N°"
                  value={numeroTU}
                  onChange={handleNumeroTU}
                  fullWidth
                />
              </Grid>
            </Grid>
          )}

          {typeOfCarPlateLicence === "RS" && (
            <Grid item xs={12}>
              <TextField
                label="RS value"
                value={rsValue}
                onChange={(event) => setRsValue(event.target.value)}
                fullWidth
              />
            </Grid>
          )}

          {typeOfCarPlateLicence === "MOTO" && (
            <Grid item xs={12} >
              <TextField
                label="MOTO value"
                value={motoValue}
                onChange={(event) => setMotoValue(event.target.value)}
                fullWidth
              />
            </Grid>
          )}

          {/* add more text fields for each option */}
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
