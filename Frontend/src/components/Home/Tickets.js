import * as React from 'react';
import PaymentsIcon from '@mui/icons-material/Payments';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




export default function Tickets() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    return formattedDate
}

  const rows =useSelector((state) => state.history.data)
  if (rows.length > 0) {
    return (
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>

            List Fine
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>License Plate</TableCell>
                <TableCell align="right">Pay</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.hash}>
                  <TableCell>{formatDate(row.data.time)}</TableCell>
                  <TableCell>{row.data.firstName+" "+row.data.lastName}</TableCell>

                  <TableCell>{row.data.licensePlate}</TableCell>
                  <TableCell align="right"><Link to={"http://localhost:3000/ticket/"+row.hash}><PaymentsIcon></PaymentsIcon></Link></TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>

        </Paper>
      </Grid>
    );
  }
}
