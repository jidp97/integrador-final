import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LocationDisabledIcon from "@mui/icons-material/LocationDisabled";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

function CurrentLocationField() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBT4Ame3d86d3vtxyEnaX1i_ILjdZWSSNY`);
            const data = await response.json();
            const address = data.results[0].formatted_address;
            setLocation(address);
          } catch (err) {
            setError("Error al obtener la ubicación.");
          }
          setLoading(false);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        }
      );
    }
  }, [location]);

  const handleClickShowLocation = () => {
    if (!location) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBT4Ame3d86d3vtxyEnaX1i_ILjdZWSSNY`);
            const data = await response.json();
            const address = data.results[0].formatted_address;
            setLocation(address);
          } catch (err) {
            setError("Error al obtener la ubicación.");
          }
          setLoading(false);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        }
      );
    } else {
      setLocation(null);
    }
  };

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
          {location ? <LocationDisabledIcon /> : <LocationSearchingIcon />}
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="  Usar tu ubicación actual"
          inputProps={{
            'aria-label': 'Tu ubicación actual',
            'aria-readonly': true,
          }}
          value={location || ""}
          readOnly
        />
      </Paper>
      {loading && <p>Cargando ubicación...</p>}
      {error && <p>Error al obtener la ubicación: {error}</p>}
    </>
  );
}

export default CurrentLocationField;