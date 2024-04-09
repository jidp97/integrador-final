import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function CustomMarks() {
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <Box sx={{ width: 400 }}>
      <Slider
        marks={marks}
        step={15}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setVal(val - 15)}
          sx={{ cursor: 'pointer' }}
        >
            <ArrowBackIosIcon style={{width: 15}} />
          - 15 min
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(val + 15)}
          sx={{ cursor: 'pointer' }}
        >
           + 15 min {''}
            <ArrowForwardIosIcon style={{width: 15}} />
        </Typography>
      </Box>
    </Box>
  );
}
