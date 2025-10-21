import {object, string , number } from 'yup';

export const userSchema = object({
    firstname: string().required("Name is required").min(3, "Name must be at least 3 characters"),
    lastname: string().required("Name is required").min(3, "Name must be at least 3 characters"),
    age: number().required("Age is required").min(18, "Age must be at least 18"),
    // country: string().required("Country is required"),
    upload: string().required("File is required"),
    
});