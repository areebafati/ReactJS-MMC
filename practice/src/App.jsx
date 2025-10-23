import './App.css'
import CountrySelect from './components/elements/CountrySelect'
import FileUpload from './components/elements/FileUpload'
import CustomButton from './components/elements/Button'
import Grid from '@mui/material/Grid';
import Inputfield from './components/elements/Inputfield'
import { useForm , useFieldArray} from "react-hook-form";
import { userSchema } from './schemas/validation'
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxLabels from './components/elements/Checkbox'
import RowRadioButtonsGroup from './components/elements/Gender'
import Movies from './components/elements/Movies'
import Alert from '@mui/material/Alert';
import { useState } from 'react'
import FriendsForm from './components/modules/usefields';
import Studentname from './components/elements/Studentname';
import HandlePassword from './components/elements/Pass';
import SelectCurrency from './components/elements/Currency';


function App() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const { control , handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
     defaultValues: {
    studentname: "areeba",
    fathername: "alam",
    password: "",
    currency: "",


   }


  });
  const { fields, append } = useFieldArray({
  control,
  name: "students"
});

  const Submit = (data) => {
    console.log("Form data:", data);
    // setShowSuccessAlert(true);
  };

  return (
    <>

      <h1>FORM !</h1>
      <form onSubmit={handleSubmit(Submit)}>
        {showSuccessAlert && (
          <Alert severity="success" onClose={() => setShowSuccessAlert(false)} sx={{ mt: 2 }}>
            Form submitted successfully!
          </Alert>
        )}
        {Object.keys(errors).length > 0 && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Please correct the errors in the form.
          </Alert>
        )}
        <Grid container spacing={1}>

           <Grid size={4}>
            <Inputfield name="firstname" placeholder="your first name " control={control} label="First Name" error={errors.firstname} />
          </Grid>


          <Grid size={4}>

            <Inputfield name="lastname" placeholder="your last name " control={control} label="Last Name" error={errors.lastname} />

          </Grid>


          <Grid size={4}>
            <Inputfield name="age" placeholder="your Age " control={control} label="Age" error={errors.age} />

          </Grid>

         <Grid size={8}>
            < CountrySelect name="country" control={control} error={errors.country} />
          </Grid>

          <Grid size={4}>
            <FileUpload name="upload" control={control} error={errors.upload} />
          </Grid>



          <Grid size={12}>
            <RowRadioButtonsGroup name="gender" control={control} error={errors.gender} />
          </Grid>



          <Grid size={12}>
            <Movies name="movies" control={control} error={errors.movies} />
          </Grid>

          <Grid size={12}>
            <CheckboxLabels />
          </Grid>



          <Grid size={6}>
            <CustomButton />
          </Grid>

      

        </Grid>


      </form>



    </>
  );
}

export default App;

// import './App.css'
// import Grid from '@mui/material/Grid';
// import { useForm, useFieldArray } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { userSchema } from './schemas/validation';
// import CustomButton from './components/elements/Button';
// import Studentname from './components/elements/Studentname';
// import HandlePassword from './components/elements/Pass';
// import SelectCurrency from './components/elements/Currency';
// import Alert from '@mui/material/Alert';
// import { useState } from 'react';

// function App() {
//     const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(userSchema),
//     defaultValues: {
//       students: [     //name u used , it is a key, [] it is an array coz answer array mai ayeega, studenyt naam ki array bnai hai
//         {      //object
//           studentname: "Areeba",
//           fathername: "Khan",
//           password: "",
//           currency: "",
//         },


//       ],

//     },
//   });


//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "students",
//   });


//   const Submit = (data) => {
//     console.log("Form data:", data);
//     setShowSuccessAlert(true);
//   };

//   return (
//     <>
//       <h1>Student  Form</h1>
//       <form onSubmit={handleSubmit(Submit)}>
//          {showSuccessAlert && (
//           <Alert severity="success" onClose={() => setShowSuccessAlert(false)} sx={{ mt: 2 }}>
//             Form submitted successfully!
//           </Alert>
//         )}
//         {Object.keys(errors).length > 0 && (
//           <Alert severity="error" sx={{ mt: 2 }}>
//             Please correct the errors in the form.
//           </Alert>
//         )}
//         {fields.map((field, index) => (
//           <Grid container spacing={2} key={field.id} sx={{ mb: 2 }}>

//             <Grid item xs={6}>
//               <Studentname
//                 name={`students.${index}.studentname`}
//                 label="Student Name"
//                 placeholder="Enter Student Name"
//                 control={control}
//                 error={errors.students?.[index]?.studentname}
//               />
//             </Grid>


//             <Grid item xs={6}>
//               <Studentname
//                 name={`students.${index}.fathername`}  // students. 0. studentname
//                 label="Father Name"
//                 placeholder="Enter Father Name"
//                 control={control}
//                 error={errors.students?.[index]?.fathername}
//               />
//             </Grid>


//             <Grid item xs={6}>
//               <HandlePassword
//                 name={`students.${index}.password`}
//                 control={control}
//                 error={errors.students?.[index]?.password}    //STUDENT K Andar agar error hai to uska array dekh k error message show kafrwado
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <SelectCurrency
//                 name={`students.${index}.currency`}
//                 control={control}
//                 error={errors.students?.[index]?.currency}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <CustomButton
//                 name="Remove Student"
//                 type="button"
//                 onClick={() => remove(index)}
//               />
//             </Grid>
//           </Grid>


//         ))}


     


//         <Grid item xs={12}>
//           <CustomButton
//             name="Add Student"
//             type="button"
//             onClick={() =>
//               append({
//                 studentname: "",
//                 fathername: "",
//                 password: "",
//                 currency: "",
//               })
//             }
//           />
         
//         </Grid>
        
//         <Grid item>
//           <CustomButton name="Submit" type="submit" />
//         </Grid>


//       </form>
//     </>
//   );
// }

// export default App;
