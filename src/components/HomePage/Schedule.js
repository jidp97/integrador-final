import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function Schedule() {
  const [opt, setOpt] = React.useState('');

  const handleChange = (event) => {
    setOpt(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="my-2" >
      <FormControl>
        <Select
          value={opt}
          hiddenlabel
          onChange={handleChange}
          defaultValue='10'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}><ScheduleIcon/>{"   "} Salir ahora</MenuItem>
          <MenuItem value={20}><ScheduleIcon/>{"   "} Programar horario</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}