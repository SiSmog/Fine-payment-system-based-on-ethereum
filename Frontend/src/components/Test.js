import { useState } from 'react';
import { Grid, TextField } from '@mui/material';

function handleField1Change() {
        const handleInput = (event) => {
          let value = event.target.value;
      
          // If the input doesn't include "RT", add it between the numbers
          if (!value.includes("RT")) {
            const regex = /^(\d{1,3})\s*(\d{1,4})$/;
            if (regex.test(value)) {
              value = value.replace(regex, "$1 RT $2");
            }
          }
      
          // Update the input field value to include "RT"
          event.target.value = value;
          
          const regex = /^(\d{1,3})\sRT\s(\d{1,4})$/;
          if (regex.test(value)) {
            console.log("Valid input:", value);
          } else {
            console.log("Invalid input:", value);
          }
        };
      
        return (
          <TextField
            label="Input"
            variant="outlined"
            onChange={handleInput}
            inputProps={{ pattern: "^\\d{1,3}\\sRT\\s\\d{1,4}$" }}
          />
        );
      }
      
  
export default handleField1Change ;