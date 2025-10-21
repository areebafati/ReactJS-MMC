
import './App.css'
import CountrySelect from './components/elements/CountrySelect'
import FileUpload from './components/elements/FileUpload'
import Textarea from './components/elements/Textarea'
import CustomButton from './components/elements/Button'
import Grid from '@mui/material/Grid';
import Inputfield from './components/elements/Inputfield'
import { useForm, } from "react-hook-form";
import { userSchema } from './schemas/validation'
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxLabels from './components/elements/Checkbox'
import RowRadioButtonsGroup from './components/elements/Gender'


function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),



  });



  const Submit = (data) => {
    console.log("Form data:", data);
  };




  return (
    <>
      <h1>FORM !</h1>
      <form onSubmit={handleSubmit(Submit)}>
        <Grid container spacing={1}>

          <Grid size={4}>
            <Inputfield name="firstname" placeholder="your first name " control={control} label="First Name"  error={errors.firstname} />
          </Grid>


          <Grid size={4}>

            <Inputfield name="lastname" placeholder="your last name " control={control} label="Last Name"error={errors.lastname} />

          </Grid>


          <Grid size={4}>
            <Inputfield name="age" placeholder="your Age " control={control} label="Age"error={errors.age} />

          </Grid>

          <Grid size={8}>
            < CountrySelect  name ="country" control={control} error={errors.country} />
          </Grid>

          <Grid size={4}>
            <FileUpload   name="upload" control={control} error={errors.upload} />
          </Grid>

        

           <Grid size={12}>
            <RowRadioButtonsGroup name="gender" control={control} error={errors.gender}  />
          </Grid>

           <Grid size={12}>
            <CheckboxLabels
            //  name="terms" control={control} error={errors.terms} 
             />
          </Grid>

           <Grid size={12}>
            <CustomButton   />
          </Grid>






        </Grid>


      </form>









    </>
  );
}


export default App;
