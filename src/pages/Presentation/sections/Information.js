import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Import MUI Icons
import PassportIcon from "@mui/icons-material/RememberMe"; // Passport-related icon
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"; // Camera icon for photos
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"; // Flight ticket icon
import HotelIcon from "@mui/icons-material/Hotel"; // Hotel booking icon

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    UAE Visa
                    <br />
                    Requirements
                  </>
                }
                description="All the MUI components that you need in a development have been re-designed with the new look."
              />
              <RotatingCardBack
                image={bgBack}
                title="Visa Price Calculator"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/view/visapaymentsdetails",
                  label: "view payment",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<PassportIcon />}
                  title="Passport"
                  description="Valid for at least 6 months from date of travel"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<PhotoCameraIcon/>}
                  title="Photos"
                  description="2 recent passport-size photographs with white background"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<FlightTakeoffIcon />}
                  title="Flight Tickets"
                  description="Return flight booking confirmation"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<HotelIcon/>} 
                  title="Hotel Booking"
                  description="Confirmed hotel reservation for the duration of stay"
              />

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
