
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// same visually hidden input, qk bura lagta hai to button k peecchy
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function FileUpload() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // create preview
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Button
        component="label"
        variant="contained" //color wala button show ho
        startIcon={<CloudUploadIcon />}
      >
        Upload your file
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>

      {/* Image Preview */}
      {previewUrl && (
        <Box mt={2} textAlign="center">
          <Avatar
            src={previewUrl}
            alt="Preview"
            variant="rounded"
            sx={{ width: 150, height: 150 }}
          />
          <Typography variant="body2" sx={{ mt: 1 }}>
            {selectedImage.name}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
