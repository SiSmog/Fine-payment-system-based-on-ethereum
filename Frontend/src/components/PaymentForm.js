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


import {useSelector,useDispatch} from "react-redux" 
import {setLicensePlateType,setLicensePlate,setSpeedLimit,setSpeed} from "../redux/registration"



const getLicensePlate=(type,value)=>{
  switch(type){
    case "TU":
      return value[0]+" TU "+value[1]
    case "RS":
      return "RS "+value[0]
    case "MOTO":
      return "MOTO "+value[0]
  }
}
export default function PaymentForm() {



  const dispatch=useDispatch()
  const speedLimit=useSelector((state)=>state.registration.speedLimit)
  const speed=useSelector((state)=>state.registration.speed)
  const licensePlateType=useSelector((state)=>state.registration.licensePlateType)
  const licensePlate=useSelector((state)=>state.registration.licensePlate)

  const [rsValue, setRsValue] = React.useState("");
  const [motoValue, setMotoValue] = React.useState("");
  // add more state variables for each option

  const handleChange = (e) => {
    dispatch(setLicensePlateType(e.target.value))
  };

  const handleSpeedLimit = (e) => {
    const regEX = new RegExp("^[0-9]{0,3}$")
    if (regEX.test(e.target.value)) {
      dispatch(setSpeedLimit(e.target.value))
    }
  };

  const handleSpeed = (e) => {
    const regEX = new RegExp("^[0-9]{0,3}$")
    if (regEX.test(e.target.value)) {
      dispatch(setSpeed(e.target.value))
    }
  };
  const [serieTU, setSerieTU] = React.useState("");
  const handleSerieTU = (e) => {
    const regEX = new RegExp("^[0-9]{0,3}$")
    if (regEX.test(e.target.value)) {
      setSerieTU(e.target.value);
    }
  };
  const [numeroTU, setNumeroTU] = React.useState("");
  const handleNumeroTU = (e) => {
    const regEX = new RegExp("^[0-9]{0,4}$")
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
                  value={speedLimit}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">Km/H</InputAdornment>,
                  }}
                  onChange={handleSpeedLimit}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Actual Speed"
                  value={speed}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">Km/H</InputAdornment>,
                  }}
                  onChange={handleSpeed}
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
            value={licensePlateType}
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
          {licensePlateType === "TU" && (
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

          {licensePlateType === "RS" && (
            <Grid item xs={12}>
              <TextField
                label="RS value"
                value={rsValue}
                onChange={(event) => setRsValue(event.target.value)}
                fullWidth
              />
            </Grid>
          )}

          {licensePlateType === "MOTO" && (
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
