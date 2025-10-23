import { object, string, number, mixed, array } from 'yup';


// const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/gif'];


export const userSchema = object({
    firstname: string().required("First Name is required").min(3, "Name must be at least 3 characters"),
    lastname: string().required("Last Name is required").min(3, "Name must be at least 3 characters"),
    age: number().required("Age is required").min(18, "Age must be at least 18"),
    country: mixed().required("Country is required"),
    upload: mixed().required('A file is required'),
    gender: string().required('Please select your gender.'),
    movies:array().max(5,"Please select max 5 movies").required("Please select movies")
})
// import { object, string, array } from "yup";

// export const userSchema = object({
//   students: array()
//     .of(
//       object({
//         studentname: string()
//           .required("Student name is required")
//           .min(3, "Name must be at least 3 characters"),

//         fathername: string()
//           .required("Father name is required")
//           .min(3, "Name must be at least 3 characters"),

//         password: string()
//           .min(8, "Password must be at least 8 characters long")
//           .max(250, "Password cannot exceed 250 characters")
//           .matches(/[0-9]/, "Password must contain at least one number")
//           .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//           .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//           .matches(/[!@#$%^&*]/, "Password must contain at least one symbol (!@#$%^&*)")
//           .required("Password is required"),

//         currency: string().required("Currency is required"),
//       })
//     )
//     .min(1, "At least one student is required"),
// });











    


