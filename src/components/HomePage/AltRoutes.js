import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchGoogle from "./SearchGoogle";
import CurrentLocationField from "./CurrentLocationField";
import TimeSlider from "./TimeSlider";
import Schedule from "./Schedule";
import Preferences from "./Preferences";
import Box from "@mui/material/Box";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AltRoutes() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="warning"
        style={{
          borderRadius: 0,
          height: 62,
          textTransform: "none",
        }}
        className="btn btn-dark text-white btn-xl shadow mx-5 me-3 rounded-0 my-5"
        onClick={handleClickOpen}
      >
        Rutas alternas
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Rutas alternas
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <CurrentLocationField />
          <SearchGoogle />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Schedule />
            <Preferences />
          </Box>
          <TimeSlider />
          <Button
            className="my-3"
            variant="contained"
            color="warning"
            fullWidth
            style={{
              borderRadius: 0,
              height: 62,
              textTransform: "none",
              alignSelf: "center",
            }}
          >
            Buscar rutas
          </Button>
          <Box  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <img src="img/map.png" alt="map" className="img-fluid" />
          </Box>
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
