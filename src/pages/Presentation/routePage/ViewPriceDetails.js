import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import { Link } from "react-router-dom";
// Image for the background (you can replace with any relevant image)
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ViewPriceDetails() {
  return (
    <>
      <MKBox
        position="fixed"
        top="0"
        width="100%"
        sx={{
          zIndex: 10, // Ensure navbar is above other content
        }}
      >
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
          sx={{
            "& .MuiButton-root": {
              // Style for navbar buttons
              color: "white", // Default color
              transition: "all 0.3s ease", // Smooth transition for hover
              "&:hover": {
                color: "#00bcd4", // Highlight color on hover (you can customize)
              },
              "&.active": {
                fontWeight: "bold", // Active state style
                color: "#00bcd4", // Highlight color for active state
              },
            },
            "& .MuiTypography-root": {
              // Style for navbar typography
              color: "white", // Default color for text
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#00bcd4", // Text highlight on hover
              },
            },
          }}
        />
      </MKBox>

      <MKBox
        sx={{
          minHeight: "100vh", // Full screen height
          backgroundImage: `url(${bgImage})`, // Background image for the page
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed", // Fixed background effect
          backgroundBlendMode: "overlay", // Blending effect with a subtle grid pattern
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Darken the background a bit
        }}
      >
        <MKBox
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          sx={{
            background: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for content
            borderRadius: "16px",
            padding: "20px",
            maxWidth: "600px", // Limit width
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
          }}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              Visa Price Calculator
            </MKTypography>
          </MKBox>

          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              Select a visa type to see the price details.
            </MKTypography>

            <MKBox width="100%" component="form" method="post" autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="Select Visa Type"
                    select
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  >
                    {/* Add options dynamically */}
                  </MKInput>
                </Grid>
                <Grid item xs={12}>
                  <MKTypography variant="h5" color="text" fontWeight="bold">
                    Price: $XXX.XX
                  </MKTypography>
                </Grid>
              </Grid>

              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
              
                         <MKButton
                  component={Link}
                  to="/startyourapplication"
                  variant="gradient"
                  color="info"
                  size="large"
                >
                  Start your Application
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ViewPriceDetails;
