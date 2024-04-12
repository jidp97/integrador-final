import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchGoogle from './SearchGoogle';
import CurrentLocationField from './CurrentLocationField';
import TimeSlider from './TimeSlider';
import Schedule from './Schedule';
import Preferences from './Preferences';

// Styled Dialog component with enhanced styling options
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogTitle-root': {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '& .MuiDialogTitle-title': {
    fontSize: 20,
    fontWeight: 600,
  },
}));
const YOUR_INITIAL_LATITUDE = 40.7128; // Ejemplo: Latitud de Nueva York
const YOUR_INITIAL_LONGITUDE = -74.0060; // Ejemplo: Longitud de Nueva York
const YOUR_INITIAL_ZOOM_LEVEL = 12; // Ejemplo: Nivel de zoom para mostrar la ciudad

export default function AltRoutes()  {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBT4Ame3d86d3vtxyEnaX1i_ILjdZWSSNY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      // Initialize Google Maps once the script is loaded
      initializeMap();
    };

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  const handleSearchRoutes = () => {
    // Get origin and destination from user input
    const origin = CurrentLocationField(); // Replace with logic to get origin
    const destination = SearchGoogle(); // Replace with logic to get destination
  
    // Call routing API (example using Google Maps Directions API)
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyBT4Ame3d86d3vtxyEnaX1i_ILjdZWSSNY&alternatives=true&traffic_mode=driving`)
      .then(response => response.json())
      .then(data => {
        // Process and optimize routes
        const optimizedRoutes = data.routes.map(route => {
          const distance = route.legs[0].distance.value;
          const duration = route.legs[0].duration.value;
          const summary = route.summary;
          const polyline = route.overview_polyline.points;
  
          // Consider traffic conditions (if available in data)
          let trafficTime = 0;
          if (route.legs[0].traffic_speed) {
            // Extract traffic time from each step
            trafficTime = route.legs[0].steps.reduce((sum, step) => sum + step.duration.value / step.traffic_speed * 60, 0);
          }
  
          // Consider tolls (if available in data)
          let tolls = 0;
          if (route.legs[0].tolls) {
            // Extract total toll cost from the route
            tolls = route.legs[0].tolls.value;
          }
  
          // Assign a score based on user preferences (replace with your logic)
          const preferences = CurrentLocationField(); // Replace with logic to get preferences
          let score = 0;
          if (preferences.prioritizeFastest) {
            score += duration / 1000; // Lower duration gets higher score
          } else if (preferences.prioritizeShortest) {
            score += distance / 1000; // Lower distance gets higher score
          }
          if (preferences.avoidTolls) {
            score += tolls; // Higher tolls result in lower score
          }
  
          return {
            distance,
            duration,
            summary,
            polyline,
            trafficTime,
            tolls,
            score, // Score for sorting based on preferences
          };
        });
  
        // Sort routes by preference (e.g., fastest, shortest, considering traffic)
        optimizedRoutes.sort((a, b) => a.score - b.score);
  
        // Present routes to user
       // setRoutes(optimizedRoutes);
        //setSelectedRoute(null); // Reset selected route
      })
      .catch(error => {
        console.error("Error fetching routes:", error);
        // Handle errors gracefully (e.g., display an error message to the user)
      });
  };
  const initializeMap = () => {
    // Initialize Google Maps inside the map container
    const mapContainer = document.getElementById('google-map');
    const map = new window.google.maps.Map(mapContainer, {
      center: { lat: YOUR_INITIAL_LATITUDE, lng: YOUR_INITIAL_LONGITUDE },
      zoom: YOUR_INITIAL_ZOOM_LEVEL,
    });

       // Add a marker for the initial location
    new window.google.maps.Marker({
      position: { lat: YOUR_INITIAL_LATITUDE, lng: YOUR_INITIAL_LONGITUDE },
      map: map,
      title: 'Initial Location'
    });

    // Example of adding an overlay (rectangle) to the map
    new window.google.maps.Rectangle({
      bounds: {
        north: YOUR_INITIAL_LATITUDE + 0.01,
        south: YOUR_INITIAL_LATITUDE - 0.01,
        east: YOUR_INITIAL_LONGITUDE + 0.01,
        west: YOUR_INITIAL_LONGITUDE - 0.01,
      },
      editable: true,
      draggable: true,
      map: map,
    });
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="warning"
        style={{
          borderRadius: 0,
          height: 62,
          textTransform: 'none',
          backgroundColor: '#dc3545',
        }}
        className="btn btn-dark text-white btn-xl shadow mx-5 me-3 rounded-0 my-5"
        onClick={handleOpen}
      >
        Rutas alternas
      </Button>

      <StyledDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title">
          <Typography variant="h6">Rutas alternas</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Schedule />
            <Preferences />
          </Box>
          <TimeSlider />
          <Button
            variant="contained"
            color="warning"
            fullWidth
            style={{
              borderRadius: 0,
              height: 62,
              textTransform: 'none',
              backgroundColor: '#dc3545',
              alignSelf: 'center',
            }}
            className="my-3"
            onClick={() => {
              console.log('Search button clicked');
              handleSearchRoutes(origin);
            }}
          >
            Buscar rutas
          </Button>
          <Box id="google-map" sx={{ width: '100%', height: '400px' }} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </StyledDialog>
    </React.Fragment>
  );
};


