import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {TextField} from '@mui/material';
import {MenuItem} from '@mui/material';
import {InputLabel} from '@mui/material';
import {Select} from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}



export default function FloatingActionButtonZoom() {
  const [numeroRS, setNumeroRS] = React.useState("");
  const [numeroMOTO, setNumeroMOTO] = React.useState("");
  const [licensePlate, setLicensePlate] = React.useState("");
  const [id, setId] = React.useState("");
  const [typeOfCarPlateLicence, setTypeOfCarPlateLicence] = React.useState("TU");
  const [license, setLicense] = React.useState("");
  const getLicensePlate = (type, value) => {
    switch (type) {
      case "TU":
        return value[0] + " TU " + value[1]
      case "RS":
        return "RS " + value[0]
      case "MOTO":
        return "MOTO " + value[0]
    }
  }
  const handleChangetype = (event) => {
    setTypeOfCarPlateLicence(event.target.value);
  };
  const handleId = (e) => {
    const regEX = new RegExp("^[0-9]{0,8}$");
    console.log(e.target.value);
    if (regEX.test(e.target.value)) {
      setId(e.target.value);
    }
  };
  const handleLicense = (e) => {
    const regEX = new RegExp("^[0-9]{0,2}/*[0-9]{0,6}$");
    if (regEX.test(e.target.value)) {
      if (license.length === 1 && e.target.value.length === 2) {
        setLicense(e.target.value + "/");
      }
      else{setLicense(e.target.value)}
    }
  };
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [serieTU, setSerieTU] = React.useState("");
  
  const [numeroTU, setNumeroTU] = React.useState("");
  const handleSerieTU = (e) => {
    const regEX = new RegExp("^[0-9]{0,3}$")
    if (regEX.test(e.target.value)) {
      setSerieTU(e.target.value);
      setLicensePlate(getLicensePlate("TU", [e.target.value, numeroTU]))
    }
  };
  const handleNumeroTU = (e) => {
    const regEX = new RegExp("^[0-9]{0,4}$")
    if (regEX.test(e.target.value)) {
      setNumeroTU(e.target.value);
      setLicensePlate(getLicensePlate("TU", [serieTU, e.target.value]))
    }
  };
  const handleNumeroRS = (e) => {
    const regEX = new RegExp("^[0-9]{0,6}$")
    if (regEX.test(e.target.value)) {
      setNumeroRS(e.target.value);
      setLicensePlate(getLicensePlate("RS", [e.target.value]))
    }
  };
  const handleNumeroMOTO = (e) => {
    const regEX = new RegExp("^[0-9]{0,5}$")
    if (regEX.test(e.target.value)) {
      setNumeroMOTO(e.target.value);
      setLicensePlate(getLicensePlate("MOTO", [e.target.value]))
    }
  };
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="ID" {...a11yProps(0)} />
          <Tab label="Driver license" {...a11yProps(1)} />
          <Tab label="license plate" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Grid item xs={12} >
        <TabPanel  value={value} index={0} dir={theme.direction}>
        <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}} >
        <TextField
            required
            id="Id"
            name="Id"
            label="Id"
            fullWidth
            value={id}
            onChange={handleId}
            
          />
           
           </Grid>
           <Grid item xs={12} sx={{justifyContent:"center",display:"flex",py:2}} >
           <Button variant="contained">Contained</Button>
           </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}} >
            
        <TextField
            id="state"
            name="state"
            label="Driver license"
            fullWidth
            value={license}
            onChange={handleLicense}
           
          />
          </Grid>
         
           <Grid item xs={12} sx={{justifyContent:"center",display:"flex",py:2}} >
          <Button variant="contained">Contained</Button>
          </Grid>
          
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid item xs={12} >
          <InputLabel id="demo-simple-select-label">
            Car plate Licence
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={typeOfCarPlateLicence}
            label="Licence Plate"
            onChange={handleChangetype}
            fullWidth
          >
            <MenuItem value={"TU"}>Série Normale (TU) تونس</MenuItem>
            <MenuItem value={"RS"}>Régime Suspensif (RS) ن ت</MenuItem>
            <MenuItem value={"MOTO"}>Moto (MOTO) د ن</MenuItem>
            {/* add more menu items for each option */}
          </Select>
          </Grid>
          <Grid item  xs={12}>
          {typeOfCarPlateLicence === "TU" && (
            <Grid item container spacing={3} spaIdg={2} sx={{py:3}}>
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
            <Grid item xs={12} sx={{py:3}}>
              <TextField
                label="RS value"
                value={numeroRS}
                onChange={handleNumeroRS}
                fullWidth
              />
            </Grid>
          )}

          {typeOfCarPlateLicence === "MOTO" && (
            <Grid item xs={12} sx={{py:3}}>
              <TextField
                label="MOTO value"
                value={numeroMOTO}
                onChange={handleNumeroMOTO}
                fullWidth
              />
              
            </Grid>
          )}

          
<Grid item xs={12} sx={{justifyContent:"center",display:"flex",py:2}} >
           <Button variant="contained">Contained</Button>
           </Grid>
        </Grid>

        </TabPanel>
      </Grid>
     
    </Box>
  );
}