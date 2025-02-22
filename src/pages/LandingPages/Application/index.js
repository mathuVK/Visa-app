/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from "react";
// @mui material components
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


// Material Kit 2 React examples
import DefaultNavbar from "examples/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import { Box,Container, Grid, Card, TextField, Select, MenuItem, FormControl, InputLabel, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});



function Application() {
  const visaTypes = ["Tourist", "Business", "Transit"];
  const nationalities = ["Sri Lanka", "India", "Pakistan", "Bangladesh"];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    visaType: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    passportNumber: "",
    nationality: "",
    address: "",
    travelFrom: "",
    travelTo: "",
    passportCopy: null,
    photo: null,
    ticket: null,
    hotelBooking: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
           Start your Application Today
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            Welcome to the Visa Application Portal!    We&apos;re here to guide you through the process and make your visa application experience as smooth as possible
            </MKTypography>
       
       
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {/* Left Side: Blog Card */}
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Gain Insights on the Visa Process"
              description="Fill out the required fields with accurate personal details. After completing your application and uploading all necessary documents, you will be asked to make a payment for the visa processing fee."
              action={{
                type: "internal",
                route: "/view/visapaymentsdetails",
                color: "info",
                label: "Find visa payment",
              }}
            />
            </Grid>
               {/* Right Side: Visa Application Form */}
          <Grid item xs={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h4" mb={3} textAlign="center">
                UAE Visa Application
              </Typography>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                 <FormControl fullWidth margin="normal" sx={{ minWidth: 120 }}>
  <InputLabel shrink={formData.visaType !== ''}>Visa Type</InputLabel>
  <Select
    name="visaType"
    value={formData.visaType}
    onChange={handleChange}
    required
    sx={{
      '& .MuiSelect-select': {
        padding: '12px 14px', // Adjust padding if needed
        height: '40px', // Set desired height
      },
      '& .MuiInputBase-root': {
        height: '40px', // Ensure the overall height is set for the root
        display: 'flex',
        alignItems: 'center', // Centers the text vertically
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.23)', // Border color on focus
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.87)', // Border color on hover
      },
    }}
  >
    {visaTypes.map((type) => (
      <MenuItem key={type} value={type}>
        {type}
      </MenuItem>
    ))}
  </Select>
</FormControl>

                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                 <Button
  variant="contained"
  onClick={handleNext}
  sx={{
    mt: 2,
    color: "white", // Ensure text is clearly visible
    backgroundColor: "#1976d2", // Primary blue background
    "&:hover": {
      backgroundColor: "#1565c0", // Darker blue on hover
    },
    "&:focus": { outline: "none" }, // Removes focus outline
    "&:active": {
      backgroundColor: "#1565c0",
      border: "1px solid #bdbdbd", // Ash-colored border on click
    },
  }}
  endIcon={<ArrowForwardIcon />}
>
  Next
</Button>
</Box>

                  </>
                )}
                
                {step === 2 && (
                  <>
                    <TextField fullWidth label="First Name" name="firstName" onChange={handleChange} required margin="normal" />
                    <TextField fullWidth label="Last Name" name="lastName" onChange={handleChange} required margin="normal" />
                    <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} required margin="normal" />
                    <TextField fullWidth label="Mobile Number" name="mobileNumber" onChange={handleChange} required margin="normal" />
                    <TextField fullWidth label="Passport Number" name="passportNumber" onChange={handleChange} required margin="normal" />
                    
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Nationality</InputLabel>
                      <Select name="nationality" value={formData.nationality} onChange={handleChange} required>
                        {nationalities.map((nation) => (
                          <MenuItem key={nation} value={nation}>{nation}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField fullWidth label="Address" name="address" onChange={handleChange} required margin="normal" />
                  
                        <Stack direction="row" spacing={2}>
   <Button
  variant="outlined"
  onClick={handlePrevious}
  sx={{
    mt: 2,
    mr: 1,
    color: "#1976d2", // Primary blue text color
    border: "1px solid #1976d2", // Blue border instead of pink
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.08)", // Light blue background on hover
      borderColor: "#1565c0", // Darker blue border on hover
    },
    "&:focus": { outline: "none" }, // Removes focus outline
    "&:active": { border: "1px solid #bdbdbd", color: "#333" }, // Ash border on click
  }}
  startIcon={<ArrowBackIcon />}
>
  Previous
</Button>

  <Button
  variant="contained"
  onClick={handleNext}
  sx={{
    mt: 2,
    color: "white", // Ensure text is clearly visible
    backgroundColor: "#1976d2", // Primary blue background
    "&:hover": {
      backgroundColor: "#1565c0", // Darker blue on hover
    },
    "&:focus": { outline: "none" }, // Removes focus outline
    "&:active": {
      backgroundColor: "#1565c0",
      border: "1px solid #bdbdbd", // Ash-colored border on click
    },
  }}
  endIcon={<ArrowForwardIcon />}
>
  Next
</Button>

    </Stack>
                  </>
                )}
                
                {step === 3 && (
              <>
  <TextField
    fullWidth
    label="Travel From"
    name="travelFrom"
    type="date"
    onChange={handleChange}
    required
    margin="normal"
    InputLabelProps={{ shrink: true }} // Ensures label is visible
  />
  <TextField
    fullWidth
    label="Travel To"
    name="travelTo"
    type="date"
    onChange={handleChange}
    required
    margin="normal"
    InputLabelProps={{ shrink: true }}
  />
 <Button
  variant="outlined"
  onClick={handlePrevious}
  sx={{
    mt: 2,
    mr: 1,
    color: "#1976d2", // Primary blue text color
    border: "1px solid #1976d2", // Blue border instead of pink
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.08)", // Light blue background on hover
      borderColor: "#1565c0", // Darker blue border on hover
    },
    "&:focus": { outline: "none" }, // Removes focus outline
    "&:active": { border: "1px solid #bdbdbd", color: "#333" }, // Ash border on click
  }}
  startIcon={<ArrowBackIcon />}
>
  Previous
</Button>

 <Button
  variant="contained"
  onClick={handleNext}
  sx={{
    mt: 2,
    color: "white", // Ensure text is clearly visible
    backgroundColor: "#1976d2", // Primary blue background
    "&:hover": {
      backgroundColor: "#1565c0", // Darker blue on hover
    },
    "&:focus": { outline: "none" }, // Removes focus outline
    "&:active": {
      backgroundColor: "#1565c0",
      border: "1px solid #bdbdbd", // Ash-colored border on click
    },
  }}
  endIcon={<ArrowForwardIcon />}
>
  Next
</Button>

</>

                )}
            {step === 4 && (
  <>
    <Typography variant="h6" mt={2}>
      Upload Required Documents
    </Typography>

    <Grid container spacing={2} sx={{ mt: 2 }}>
      {[
        { name: "passportCopy", label: "Upload Passport Copy" },
        { name: "photo", label: "Upload Photo" },
        { name: "ticket", label: "Upload Ticket" },
        { name: "hotelBooking", label: "Upload Hotel Booking" },
      ].map((file, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Button
            component="label"
            variant="contained"
            fullWidth
            startIcon={<CloudUploadIcon />}
            sx={{
              height: 90, 
              // width:250,// Reduced height from 150px to 80px
              padding: "8px", // Adjust padding for a more compact look
              fontSize: "0.875rem", // Smaller font size
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              color: "#333",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            {file.label}
            <VisuallyHiddenInput type="file" name={file.name} onChange={handleFileChange} />
          </Button>
        </Grid>
      ))}
    </Grid>

    <Button
  variant="outlined"
  onClick={handlePrevious}
  sx={{
    mt: 2,
    mr: 1,
    color: "#1976d2", // Primary blue text color
    border: "1px solid #1976d2", // Blue border instead of pink
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.08)", // Light blue background on hover
      borderColor: "#1565c0", // Darker blue border on hover
    },
    "&:focus": { outline: "none" }, // Removes focus outline
    "&:active": { border: "1px solid #bdbdbd", color: "#333" }, // Ash border on click
  }}
  startIcon={<ArrowBackIcon />}
>
  Previous
</Button>
 <Button
  variant="contained"
  onClick={handleNext}
  sx={{
    mt: 2,
    color: "white", // Ensure text is clearly visible
    backgroundColor: "#1976d2", // Primary blue background
    "&:hover": {
      backgroundColor: "#1565c0", // Darker blue on hover
    },
    "&:focus": { outline: "none" }, // Removes focus outline
    "&:active": {
      backgroundColor: "#1565c0",
      border: "1px solid #bdbdbd", // Ash-colored border on click
    },
  }}
  endIcon={<ArrowForwardIcon />}
>
  Submit
</Button>

  </>
)}

              </form>
            </Card>
          </Grid>
          </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Application;
