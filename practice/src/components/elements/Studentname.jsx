import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Controller } from 'react-hook-form';

export default function Studentname({ name, label, placeholder, control, error }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Controller
        name={name}
        control={control}  
        render={({ field }) => (
          <TextField
            // id="input-with-icon-textfield"
            {...field}
            label={label}
            value={field.value || ''}
            placeholder={placeholder}
            variant="standard"
            error={!!error}
            helperText={error ? error.message : ""}
 
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
           
          />
        )}
      />
    </Box>
  );
}
