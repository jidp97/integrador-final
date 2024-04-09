import React from "react";
import IconButton from "@mui/material/IconButton";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import LocationDisabledIcon from '@mui/icons-material/LocationDisabled';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
function CurrentLocationField() {
  const [showLocation, setShowLocation] = React.useState(true);

  const handleClickShowLocation = () => setShowLocation((show) => !show);

  const handleMouseDownLocation = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Paper
        component="form"
        className="my-2"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton
          sx={{ p: "10px" }}
          aria-label="current location"
          onClick={handleClickShowLocation}
          onMouseDown={handleMouseDownLocation}
          edge="end"
        >
          {showLocation ? <LocationDisabledIcon /> : <LocationSearchingIcon />}
        </IconButton>
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="   Usar tu ubicación actual"
        inputProps={{ 'aria-label': 'your current location' }}
        readOnly //fíjate que aquí está readonly y por eso no puedes escribir en el campo, quítalo en caso de que quieras escribir, ya sábes máquina ;)
      />
      </Paper>
    </>
  );
}

export default CurrentLocationField;
