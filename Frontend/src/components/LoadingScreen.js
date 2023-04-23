import { Box, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
export default function LoadingScreen() {
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

          <Paper sx={{ p: 8, width:40,height:40,margin:"auto"}}>
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                width: "fitContent"
              }}
            >
              <CircularProgress size={40}  />
            </Box>
          </Paper>
      </Box>
    </React.Fragment>
  );
}
