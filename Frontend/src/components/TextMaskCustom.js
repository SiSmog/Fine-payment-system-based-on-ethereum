import { autocompleteClasses, Box, Container, Grid, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
export default function SearchFine() {
  return (
    <React.Fragment>
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

          <Paper sx={{ p: 10, width:50,height:50,margin:"auto"}}>
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                width: "fitContent"
              }}
            >
              <CircularProgress size={50} />
            </Box>
          </Paper>
      </Box>
    </React.Fragment>
  );
}
