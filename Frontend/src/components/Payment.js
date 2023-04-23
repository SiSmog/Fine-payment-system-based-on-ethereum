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
import "./dsButton.css";
import getContract from '../services/contract';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import MetaMaskOnboarding from "@metamask/onboarding";
import base58ToHex from '../hashConversion';
import getTicketData from '../services/getTicketData';
import MetaMaskPopup from './MetaMaskPopup';
import CustomButton from './CustomButton';
import LoadingScreen from './LoadingScreen';
const theme = createTheme();

export default function Payment() {


    const [data, setData] = React.useState({})
    const [logged, setLogged] = React.useState(false)
    const [popup, setPopup] = React.useState(false)
    const [contract, setContract] = React.useState(null)
    const [value, setValue] = React.useState(0)
    const [loaded, setLoaded] = React.useState(false);
    const [pending, setPending] = React.useState(false);
    const [paid, setPaid] = React.useState(false);


    const { hash } = useParams()
    const hexHash = base58ToHex(hash)
    const cancelPopup = () => {
        setPopup(false)
    }
    const paidEventListener = (hash) => {
        if (hash == hexHash) {
            setPending(false)
            setPaid(true)
            setValue(0)
            contract.off('paid', paidEventListener)
        }

    }
    const pay = async () => {
        if (logged) {
            if (!paid) {
                await contract.pay(hexHash, { value: value }).then(() => setPending(true))
                contract.on('paid', paidEventListener)
            }
        } else {
            setPopup(true)
        }


    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
        return formattedDate
    }
    const formatTime = (dateString) => {
        const date = new Date(dateString);

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        return formattedTime
    }
    React.useEffect(() => {
        getTicketData(hash).then((res) => {
            setData(res.data.ticket)
            setValue(res.data.value)
            setLoaded(true)
            if (res.data.value == 0) {
                setPaid(true)
            }
            if (window.ethereum && window.ethereum.isMetaMask && window.ethereum.selectedAddress) {
                setLogged(true)
                setContract(getContract())
            }
        })
    }, [])
    React.useEffect(() => {
        handleLoading()
    }, [pending,])
    const handleLoading = () => {
        try{
            const button = document.querySelector(".dsButtonAnim");
            if (pending) {
                button.classList.add("loading");
            } else {
                button.classList.remove("loading");
            }
        }catch(e){}
        
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
                    if (popup) { setPopup(false) }
                })
                .catch((error) => {
                    console.log("Could not detect Account");
                });
        } else {
            console.log("Need to install MetaMask");
            onboarding.startOnboarding();
        }
    };
    const Buttons = () => {
        return (<>
            <CustomButton variant='secondary large' text="Cancel" onClick={() => cancelPopup()} />

            <CustomButton variant='primary large' text="Connect" onClick={handleLogin} />

        </>)


    }
    if(!loaded){
        return(<LoadingScreen/>)
    }else{
        return (
            <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
                <MetaMaskPopup activate={Buttons()} className={popup ? "alertContainer" : "displaynone"} icon="/MetaMask_Fox.svg.png" />
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container maxWidth="sm" sx={{ mb: 4 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography sx={{ mb: 5 }} component="h1" variant="h4" align="center">
                                Ticket
                            </Typography>
                            <React.Fragment>
                                <List disablePadding>
                                   
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Metamask" />
                                        <button className={logged ? "dsButtonAnim small success" : "dsButtonAnim small"} onClick={() => handleLogin()}>
                                            <span>Connect</span>
                                        </button>
                                    </ListItem>
                                    
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Date" />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {formatDate(data.time)}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Time" />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {formatTime(data.time)}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="First name" />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {data.firstName}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Last name" />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {data.lastName}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="ID" />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {data.id}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Driver license" />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {data.driverLicense}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Value" />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {loaded ? ethers.utils.formatEther(value.toString()) + " ETH" : ""}
                                        </Typography>
                                    </ListItem>
                                    
                                </List>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    
                                    <div className="buttonContainer">
                                        <button className={paid ? "dsButtonAnim success " : "dsButtonAnim " + (pending ? "loading" : "")} onClick={() => pay()}>
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </Box>
                            </React.Fragment>
    
                        </Paper>
                    </Container>
                </ThemeProvider>
            </Box>
        );
    }
    
}