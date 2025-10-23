// import React from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { Button, TextField, Box } from "@mui/material";

// export default function FriendsForm() {
//   // Initialize form
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       friends: [{ name: "", age: "" }] // start with one empty friend
//     }
//   });

//   // useFieldArray to manage 'friends' array
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "friends", // must match key in defaultValues
//   });

//   // Handle form submission
//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     alert(JSON.stringify(data, null, 2));
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h2>Friends List</h2>

//         {fields.map((field, index) => (
//           <Box key={field.id} sx={{ display: "flex", gap: 2, mb: 2 }}>
//             {/* Name Field */}
//             <TextField
//               label="Name"
//               {...control.register(`friends.${index}.name`)}
//               variant="outlined"
//             />

//             {/* Age Field */}
//             <TextField
//               label="Age"
//               {...control.register(`friends.${index}.age`)}
//               variant="outlined"
//               type="number"
//             />

//             {/* Remove Button */}
//             <Button
//               variant="outlined"
//               color="error"
//               onClick={() => remove(index)}
//             >
//               Remove
//             </Button>
//           </Box>
//         ))}

//         {/* Add new friend */}
//         <Button
//           variant="contained"
//           onClick={() => append({ name: "", age: "" })}
//           sx={{ mr: 2 }}
//         >
//           ➕ Add Friend
//         </Button>

//         {/* Submit */}
//         <Button type="submit" variant="contained" color="success">
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// }

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";

export default function FriendsForm() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      friends: [{ name: "Areeba" }, { name: "Sara" }],
    },
  });

  const { fields, append, remove, prepend, insert, swap, move, update, replace } =
    useFieldArray({
      control,
      name: "friends",   //hmari field array ka naam
    });

  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Box key={field.id} sx={{ mb: 2 }}>
          <TextField
            {...register(`friends.${index}.name`)}
            label={`Friend ${index + 1}`}
          />
        </Box>
      ))}

      <Button variant="outlined" color="success" onClick={() => append({ name: "New Friend" })}>Append</Button>
      <Button  variant="outlined" color="info" onClick={() => prepend({ name: "First Friend" })}>Prepend</Button>
      <Button  variant="outlined" color="inherit" onClick={() => insert(1, { name: "Inserted Friend" })}>Insert</Button>
      <Button  variant="outlined" color="primary" onClick={() => swap(0, 1)}>Swap 1 & 2</Button>
      <Button  variant="outlined" color="secondary" onClick={() => move(fields.length - 1, 0)}>Move last to first</Button>
        <Button
            variant="outlined"
               color="error"
               onClick={() => remove(fields.length - 1)}
             >
            Remove
           </Button>
      <Button  variant="outlined" color="secondary" onClick={() => update(0, { name: "Updated Areeba" })}>Update 1st</Button>
      <Button  variant="outlined" color="success"
        onClick={() =>
          replace([{ name: "Only One Left" }, { name: "And Another" }])
        }
      >
        Replace All
      </Button>
<br />
      <Button type="submit" variant="contained" sx={{ ml: 2 }}>
        Submit
      </Button>
    </form>
  );
}

