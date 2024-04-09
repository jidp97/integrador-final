import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export default function Preferences() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" style={{
        borderRadius: 0,
        height: 42,
        textTransform: "none",
        alignSelf: "center"
      }} startIcon={<SyncAltIcon />}>
        Preferencias
      </Button>
    </Stack>
  );
}