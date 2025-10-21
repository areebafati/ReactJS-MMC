import {object, string , number , mixed, boolean} from 'yup';

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/gif'];







export const userSchema = object({
    firstname: string().required("First Name is required").min(3, "Name must be at least 3 characters"),
    lastname: string().required("Last Name is required").min(3, "Name must be at least 3 characters"),
    age: number().required("Age is required").min(18, "Age must be at least 18"),
    country: mixed().required("Country is required"),
    upload: mixed().required('A file is required'),
    gender: string().required('Please select your gender.'),
    // check: boolean(). oneOf([true]) .required("you must accept the terms and conditions"),
    









    // .test(
    //         'fileSize',
    //         'File size must be less than 4MB',
    //         (value) => {
    //             // Check if a file is present and its size
    //             return value && value.size <= 4000000; // 2MB in bytes
    //         }
    //     )
        // .test(
        //     'fileFormat',
        //     'Only JPG and PNG files are allowed',
        //     (value) => {
        //         console.log(value, "format")
        //         // Check if a file is present and its type
        //         return value && SUPPORTED_FORMATS.includes(value.type);
        //     }
        // )


//           .test("fileSize", "File size must be less than 4MB", (value) => {
//     if (!value) return false; // ❗ must return false if empty
//     return value.size <= 4_000_000; // 4MB
//   })
//   .test("fileFormat", "Only JPG, PNG, and GIF files are allowed", (value) => {
//     if (!value) return false; // ❗ must check existence
//     return SUPPORTED_FORMATS.includes(value.type);
//      }),
});
       
