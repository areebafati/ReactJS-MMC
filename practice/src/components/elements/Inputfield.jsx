import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { Controller, useController } from 'react-hook-form';




export default function Inputfield({ label, defaultValue, name, control , }) {
   
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            autoComplete="off"
        >
            <div>
                 <Controller
                    name={name} //should be unique
                    control={control}
                    // rules={{ required: "name is required" }}
                    
                    render={({ field }) => ( 
                        
                <TextField
                    {...field}
                    label={label}
                    placeholder={defaultValue}
                    // control={control}
                    fullWidth
                    // error={!!fieldState.error}
                    // helperText={fieldState.error?.message}



                />    
                    )
                    }
                

                />

            </div>

        </Box>



    );
}