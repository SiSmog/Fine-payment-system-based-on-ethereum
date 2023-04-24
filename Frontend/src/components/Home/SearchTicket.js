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
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { getTicketById,getTicketByLicensePlate,getTicketByDriverLicense } from '../../services/queryTicket';
import { useDispatch } from 'react-redux';
import { setHistory } from '../../redux/history';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import Toast from '../Toast';
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
export default function SearchTicket() {

  const [numeroRS, setNumeroRS] = React.useState("");
  const [numeroMOTO, setNumeroMOTO] = React.useState("");
  const [licensePlate, setLicensePlate] = React.useState("");
  const [id, setId] = React.useState("");
  const [typeOfCarPlateLicence, setTypeOfCarPlateLicence] = React.useState("TU");
  const [license, setLicense] = React.useState("");
  const [toasts, setToasts] = React.useState([])
  const [loading, setLoading] = React.useState("");
  const dispatch = useDispatch()


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
      else { setLicense(e.target.value) }
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

  const fetchTicketsById=async()=>{
    setLoading(true)
    dispatch(setHistory([]))
    await getTicketById(id).then((res)=>{
      if(res.data.length==0){
        setToasts([...toasts, ["No results found", false]])
      }
      dispatch(setHistory(res.data))
      setLoading(false)
    }
    )
  }
  const fetchTicketsByDriverLicense=async()=>{
    setLoading(true)
    dispatch(setHistory([]))
    await getTicketByDriverLicense(license).then((res)=>{
      if(res.data.length==0){
        setToasts([...toasts, ["No results found", false]])
      }
      dispatch(setHistory(res.data))
      setLoading(false)
    }
    )
  }
  const fetchTicketsByLicensePlate=async()=>{
    setLoading(true)
    dispatch(setHistory([]))
    await getTicketByLicensePlate(licensePlate).then((res)=>{
      if(res.data.length==0){
        setToasts([...toasts, ["No results found", false]])
      }
      dispatch(setHistory(res.data))
      setLoading(false)
      
    }
    )
  }
  return (
    <React.Fragment>
      <Typography component="h2" variant="h4" sx={{ textAlign: "center",py:2}} gutterBottom>
        Search ticket history
      </Typography>

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
            <Tab label="ID" />
            <Tab label="Driver license" />
            <Tab label="License plate" />
          </Tabs>
        </AppBar>
        <Grid item xs={12} >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }} >
              <TextField
                required
                id="Id"
                name="Id"
                label="ID"
                fullWidth
                value={id}
                onChange={handleId}

              />

            </Grid>
            <Grid item xs={12} sx={{ justifyContent: "center", display: "flex", py: 2 }} >
            <LoadingButton loading={loading}  variant="contained" size='large' onClick={fetchTicketsById} fullWidth>Search</LoadingButton>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }} >

              <TextField
                required
                id="state"
                name="state"
                label="Driver license"
                fullWidth
                value={license}
                onChange={handleLicense}

              />
            </Grid>

            <Grid item xs={12} sx={{ justifyContent: "center", display: "flex", py: 2 }} >
            <LoadingButton loading={loading}  variant="contained" size='large' onClick={fetchTicketsByDriverLicense} fullWidth>Search</LoadingButton>
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
                <MenuItem value={"TU"}>Serie Normale (TU) </MenuItem>
                <MenuItem value={"RS"}>Regime Suspensif (RS) </MenuItem>
                <MenuItem value={"MOTO"}>Moto (MOTO)</MenuItem>
                {/* add more menu items for each option */}
              </Select>
            </Grid>
            <Grid item xs={12}>
              {typeOfCarPlateLicence === "TU" && (
                <Grid item container spacing={3} spaIdg={2} sx={{ py: 3 }}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      label="Serial Number"
                      value={serieTU}
                      onChange={handleSerieTU}
                      fullWidth
                    />
                  </Grid>


                  <Grid item xs={6}>
                    <TextField
                      required
                      label="Plate Number"
                      value={numeroTU}
                      onChange={handleNumeroTU}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              )}

              {typeOfCarPlateLicence === "RS" && (
                <Grid item xs={12} sx={{ py: 3 }}>
                  <TextField
                    label="RS value"
                    value={numeroRS}
                    onChange={handleNumeroRS}
                    fullWidth
                  />
                </Grid>
              )}

              {typeOfCarPlateLicence === "MOTO" && (
                <Grid item xs={12} sx={{ py: 3 }}>
                  <TextField
                    label="MOTO value"
                    value={numeroMOTO}
                    onChange={handleNumeroMOTO}
                    fullWidth
                  />
                </Grid>
              )}
              <Grid item xs={12} sx={{ justifyContent: "center", display: "flex", py: 2 }} >
                <LoadingButton loading={loading}  variant="contained" size='large' onClick={fetchTicketsByLicensePlate} fullWidth>Search</LoadingButton>
              </Grid>
            </Grid>

          </TabPanel>
        </Grid>

      </Box>
      {toasts.map((res) => {
        return <Toast text={res[0]} variant={res[1] ? "successToast" : "dangerToast"} />
      })}
    </React.Fragment>
  );
}
