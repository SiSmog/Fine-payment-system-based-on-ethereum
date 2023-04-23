import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DriverForm from './DriverForm';
import VehicleForm from './VehicleForm';
import Confirm from './Confirm';
import { useSelector, useDispatch } from "react-redux"
import { setFirstNameError, setLastNameError, setIdError, setDriverLicenseError, setEmailError, setPhoneNumberError, setLicensePlateError, setSpeedLimitError, setSpeedError } from "../redux/registrationError"
import Toast from './Toast';
import "./dsButton.css"
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import register from '../services/registerService';
function getStepContent(step) {
  switch (step) {
    case 0:
      return <DriverForm />;
    case 1:
      return <VehicleForm />;
    case 2:
      return <Confirm />;
    default:
      throw new Error('Unknown step');
  }
}

const steps = ['Driver information', 'Vehicle information', 'Ticket confirmation'];

const theme = createTheme();

export default function RegisterTicket() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [pending, setPending] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  const { firstName, lastName, id, driverLicense, email, phoneNumber, licensePlateType, licensePlate, speedLimit, speed } = useSelector((state) => state.registration)
  const [toasts, setToasts] = React.useState([])

  React.useEffect(() => {
    if (activeStep == 2) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [activeStep]);
  React.useEffect(() => {
    if (disabled) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress == 100) {
            setDisabled(false)
            return 0
          } else {
            return prevProgress + 5
          }
        });

      }, 250);

      return () => {
        clearInterval(timer);
      };
    } else {
      setProgress(0);
    }

  }, [disabled]);
  const dispatch = useDispatch()
  const verifyDriverForm = () => {
    var verified = true
    if (firstName.length == 0) {
      dispatch(setFirstNameError(true))
      verified = false
    } else {
      dispatch(setFirstNameError(false))
    }
    if (lastName.length == 0) {
      dispatch(setLastNameError(true))
      verified = false
    } else {
      dispatch(setLastNameError(false))
    }
    const idRegEX = new RegExp("^[0-9]{8}$");
    if (!idRegEX.test(id)) {
      dispatch(setIdError(true))
      verified = false
    } else {
      dispatch(setIdError(false))
    }
    const driverLicenseRegEX = new RegExp("^[0-9]{2}/*[0-9]{6}$");
    if (!driverLicenseRegEX.test(driverLicense)) {
      dispatch(setDriverLicenseError(true))
      verified = false
    } else {
      dispatch(setDriverLicenseError(false))
    }
    const emailRegEX = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if (!emailRegEX.test(email)) {
      dispatch(setEmailError(true))
      verified = false
    } else {
      dispatch(setEmailError(false))
    }
    const phoneNumberRegEX = new RegExp("^[0-9]{8}$");
    if (!phoneNumberRegEX.test(phoneNumber)) {
      dispatch(setPhoneNumberError(true))
      verified = false
    } else {
      dispatch(setPhoneNumberError(false))
    }
    if (!verified) {
      setToasts([...toasts, ["Please fill out all required fields", false]])
    }
    return verified
  }
  const verifyVehicleForm = () => {
    var verified = true
    const speedLimitRegEX = new RegExp("^[0-9]{2,3}$");
    if (!speedLimitRegEX.test(speedLimit)) {
      dispatch(setSpeedLimitError(true))
      verified = false
    } else {
      dispatch(setSpeedLimitError(false))
    }
    const speedRegEX = new RegExp("^[0-9]{2,3}$");
    if (!speedRegEX.test(speed)) {
      dispatch(setSpeedError(true))
      verified = false
    } else {
      dispatch(setSpeedError(false))
    }
    switch (licensePlateType) {
      case "TU":
        const TURegEX = new RegExp("^[0-9]{1,3} TU [0-9]{1,4}$");
        if (!TURegEX.test(licensePlate)) {
          dispatch(setLicensePlateError({ value: true, index: 0 }))
          dispatch(setLicensePlateError({ value: true, index: 1 }))
          verified = false
        } else {
          dispatch(setLicensePlateError({ value: false, index: 0 }))
          dispatch(setLicensePlateError({ value: false, index: 1 }))
        }
        break;
      case "RS":
        const RSRegEX = new RegExp("^RS [0-9]{5,6}$");
        if (!RSRegEX.test(licensePlate)) {
          dispatch(setLicensePlateError({ value: true, index: 2 }))
          verified = false
        } else {
          dispatch(setLicensePlateError({ value: false, index: 2 }))
        }
        break;
      case "MOTO":
        const MOTORegEX = new RegExp("^MOTO [0-9]{5,6}$");
        if (!MOTORegEX.test(licensePlate)) {
          dispatch(setLicensePlateError({ value: true, index: 3 }))
          verified = false
        } else {
          dispatch(setLicensePlateError({ value: false, index: 3 }))
        }
        break;
    }
    if (!verified) {
      setToasts([...toasts, ["Please fill out all required fields", false]])
    }
    return verified
  }

  const handleNext = () => {
    if (activeStep == 0) {
      if (verifyDriverForm()) {
        setActiveStep(activeStep + 1);
      }
    } else {
      if (verifyVehicleForm()) {
        setActiveStep(activeStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const submitTicket = () => {
    const ticket = {
      firstName: firstName, lastName: lastName, id: id, driverLicense: driverLicense, email: email,
      phoneNumber: phoneNumber, licensePlateType: licensePlateType, licensePlate: licensePlate,
      speedLimit: speedLimit, speed: speed
    }
    setActiveStep(activeStep + 1)
    setPending(true)
    register(ticket).then((res) => {
      setStatus(res.data.registered)
      setPending(false)
    })
  }
  React.useEffect(()=>{
    if(activeStep==3){
      handleLoading()
    }
  },[pending,status])
  const handleLoading = () => {
    const button = document.querySelector(".dsButtonAnim");
    if(pending){
      button.classList.add("loading");
    }else{
      button.classList.remove("loading");
      if(status){
        button.classList.add("success");
      }else{
        button.classList.remove("success");
      }
    }
  };
  const loadingIndicator = () => {
    return <><CircularProgress color="inherit" variant='determinate' size={16} value={progress} /></>
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Ticket Registration
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" textAlign="center" gutterBottom>
                  {pending ? "Your ticket is being processed" :
                    status ? "Ticket registered successfully" : "Error while registering ticket"}
                </Typography>
                <div className="buttonContainer">
                  <button className="dsButtonAnim">
                    <span></span>
                  </button>
                </div>
                <Typography variant="subtitle1" textAlign="center">
                  {pending ? "This may take a minute" :
                    status ? "Please make sure the recipient received an email and an sms regarding his/her ticket" :
                      "Refresh and try again, if the problem persists please try again later"}
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <LoadingButton
                    variant="contained"
                    disabled={disabled}
                    loading={disabled}
                    loadingIndicator={loadingIndicator()}
                    onClick={activeStep === steps.length - 1 ? submitTicket : handleNext}
                    sx={{ mt: 3, ml: 1, px: 2 }}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </LoadingButton>
                </Box>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </ThemeProvider>
      {toasts.map((res) => {
        return <Toast text={res[0]} variant={res[1] ? "successToast" : "dangerToast"} />
      })}
    </>
  );
}