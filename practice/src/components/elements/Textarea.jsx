import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textarea() {
  return (
    <Box 
      component="form"
      sx={{ '& .MuiTextField-root': { m: 3, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
          <TextField
          id="outlined-multiline-static"
          label="Bio"
          multiline
          rows={4}
          placeholder="Your Bio Here"
        />
        
      </div>
    </Box>
  );
}
