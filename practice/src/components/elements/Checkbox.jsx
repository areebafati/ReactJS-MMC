import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      
      <FormControlLabel required control={<Checkbox />} label="I agree to the terms and conditions" />
    
    </FormGroup>
  );
}

