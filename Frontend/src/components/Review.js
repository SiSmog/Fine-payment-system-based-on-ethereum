import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import LicensePlate from "./License";
import { useSelector } from 'react-redux';
const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  const firstName=useSelector((state)=>state.registration.firstName)
  const lastName=useSelector((state)=>state.registration.lastName)
  const id=useSelector((state)=>state.registration.id)
  const driverLicense=useSelector((state)=>state.registration.driverLicense)
  const email=useSelector((state)=>state.registration.email)
  const phoneNumber=useSelector((state)=>state.registration.phoneNumber)


  const licensePlate=useSelector((state)=>state.registration.licensePlate)

  return (
    <React.Fragment>
      <List disablePadding>
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
      <LicensePlate text={licensePlate} />

      
    </React.Fragment>
  );
}