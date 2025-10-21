
import './App.css'
import CountrySelect from './components/elements/CountrySelect'
import FileUpload from './components/elements/FileUpload'
import Textarea from './components/elements/Textarea'
import CustomButton from './components/elements/Button'
import Grid from '@mui/material/Grid';
import Inputfield from './components/elements/Inputfield'
import { useForm, Controller } from "react-hook-form";

function App() {
  const { control, handleSubmit, } = useForm({
    // defaultValues: {
    //   fullName: "",
    //   firstName: "",
    //   age: "",
    // },
  });



  const onSubmit = (data) => {
    console.log("Form data:", data);
  };




return (
  <>
    <h1>FORM !</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>

        <Grid size={4}>
          <Inputfield name="firstName" placeholder="your first name " control={control} label="First Name" rules={{ required: true }} />

        </Grid>


        <Grid size={4}>
         
        
          <Inputfield name="Last Name" placeholder="your last name " control={control} label="Last Name"  rules={{
                required: true,
                minLength: { value: 3, message: "Must be at least 3 characters" },
              }} />

        </Grid>


        <Grid size={4}>
           <Inputfield name="Age" placeholder="your Age " control={control} label="Age" rules={{
                required: true,
                min: { value: 18, message: "Must be at least 18" },
              }} />

        
        </Grid>

        <Grid size={12}>
          <CustomButton />
        </Grid>



      </Grid>


    </form>









  </>
);
}


export default App;
