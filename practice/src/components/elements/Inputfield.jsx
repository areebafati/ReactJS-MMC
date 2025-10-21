import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { Controller} from 'react-hook-form';




export default function Inputfield({ label, defaultValue, name, control , error  }) {
   
    return (
        <Box
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            autoComplete="off"
        >
            <div>
                 <Controller
                    name={name} //should be unique
                    control={control}
            
                    
                    render={({ field }) => ( 
                        
                <TextField
                    {...field}
                    label={label}
                    placeholder={defaultValue}
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : ""}



                />    
                    )
                    }
                

                />

            </div>

        </Box>



    );
}