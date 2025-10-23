
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function CustomButton({name='Submit', type='submit', onClick}) {
  
  return (
    <>
      <Button color={type === 'button' ? 'secondary' : 'primary'} variant="outlined" type={type}  onClick={onClick}>{name}</Button>

    </>
  )
}

export default CustomButton