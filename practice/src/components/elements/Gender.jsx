import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Controller } from 'react-hook-form';

export default function RowRadioButtonsGroup({ name, control, error }) {
  return (
    <Controller
      name={name} // should be unique
      control={control}
      render={({ field }) => (
        <FormControl>
          <FormLabel id={`${name}-label`}>Gender</FormLabel>
          <RadioGroup
            {...field}
            row
            aria-labelledby={`${name}-label`}
            name={name}
            control={control}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          
          {error && (
            <Typography variant="caption" color="error" sx={{ mt: 1 }}>
              {error.message}
            </Typography>
          )}
        </FormControl>
      )}
    />
  );
}
