import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Controller } from 'react-hook-form';

const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
  { value: 'RS', label: 'Rs' },
];

export default function SelectCurrency({ name, control, error }) {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      
      noValidate
      autoComplete="off"
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            value={field.value || ''}
            select
            label="Select Currency"
            error={!!error}
            helperText={error ? error.message : ""}
            id="outlined-select-currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>
  );
}

