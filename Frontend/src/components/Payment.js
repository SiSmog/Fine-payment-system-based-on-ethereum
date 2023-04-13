import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, } from "react-redux"
import Toast from './Toast';
import "./Loading.css";
import LoadingButton from '@mui/lab/LoadingButton';
import getContract from '../services/contract';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import MetaMaskOnboarding from "@metamask/onboarding";
const theme = createTheme();

export default function Payment() {

    const { firstName, lastName, id, driverLicense, email, phoneNumber, licensePlateType, licensePlate, speedLimit, speed } = useSelector((state) => state.registration)
    const { hash } = useParams()
    const [data, setData] = React.useState({})
    const [logged, setLogged] = React.useState(false)
    const [contract, setContract] = React.useState(null)
    const [value, setValue] = React.useState(0)
    const [pending, setPending] = React.useState(false);

    const fetchValue = async () => {
        setValue(await contract.getRegistrationValue(hash))
    }
    const pay=async()=>{
        setPending(true)
        await contract.pay(hash,{value:value}).then((res)=>{
            console.log(res)
            setPending(false)
        }
        )
    }
    React.useEffect(() => {
        if(logged){
            fetchValue()
        }
    }, [logged,pending])
    React.useEffect(()=>{
        handleLoading()
      },[pending,])
    const handleLoading = () => {
        const button = document.querySelector(".dsButtonAnim");
        if(pending){
          button.classList.add("loading");
        }else{
          button.classList.remove("loading");
        }
      };
      const forwarderOrigin = "http://localhost:3000";
      const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
      const handleLogin = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
          console.log("MetaMask Here!");
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((result) => {
              console.log(result);
              setLogged(true);
              setContract(getContract())
            })
            .catch((error) => {
              console.log("Could not detect Account");
            });
        } else {
          console.log("Need to install MetaMask");
          onboarding.startOnboarding();
        }
      };

    const [toasts, setToasts] = React.useState([])
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" align="center">
                            Ticket
                        </Typography>
                        <React.Fragment>
                            <List disablePadding>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Metamask" />
                                    <Button onClick={handleLogin}>
                                        Connect
                                    </Button>
                                </ListItem>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Value" />
                                    <Typography sx={{ fontWeight: 700 }}>
                                        {ethers.utils.formatEther(value.toString())} ETH
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="First name" />
                                    <Typography sx={{ fontWeight: 700 }}>
                                        {firstName}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Last name" />
                                    <Typography sx={{ fontWeight: 700 }}>
                                        {lastName}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="ID" />
                                    <Typography sx={{ fontWeight: 700 }}>
                                        {id}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Driver license" />
                                    <Typography sx={{ fontWeight: 700 }}>
                                        {driverLicense}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Email" />
                                    <Typography sx={{ fontWeight: 700 }}>
                                        {email}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Phone number" />
                                    <Typography sx={{ fontWeight: 700 }}>
                                        {phoneNumber}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                                <div className="buttonContainer">
                                    <button className="dsButtonAnim" onClick={()=>pay()}>
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </Box>
                        </React.Fragment>

                    </Paper>
                </Container>
            </ThemeProvider>
            {toasts.map((res) => {
                return <Toast key={res} text={res[0]} variant={res[1] ? "successToast" : "dangerToast"} />
            })}
        </>
    );
}