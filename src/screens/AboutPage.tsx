import "../about.css";
import pravin from "../components/assets/pravin.jpeg";
import shreyash from "../components/assets/shreyash.jpeg";
import ashish from "../components/assets/ashish.jpeg";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import ApplicationBar from "../components/ApplicationBar";
import { Box, Link } from "@mui/material";
import CustomText from "../components/common/Text";
import CustomButton from "../components/common/Button";

const teamMemberDetails = [
  {
    name: "Pravin Salame",
    position: "CEO & Founder",
    designation: "Working in Toiler",
    email: "pravinsalame@gmail.com",
    image: pravin,
  },
  {
    name: "Shreyash Dhapke",
    position: "CEO & Founder",
    designation: "Working in Toiler",
    email: "shreyashdhapke77@gmail.com",
    image: shreyash,
  },
  {
    name: "Ashishsingh Kachhawah",
    position: "CTO & Co-Founder",
    designation: "Working in Toiler",
    email: "askachhawah23@gmail.com",
    image: ashish,
  },
];

const AboutPage = () => {
  return (
    <Box>
      <Box style={{position: 'sticky', top: 0}}>
        <ApplicationBar />
      </Box>
      <Box className="about-section">
        <img src={logo} alt="Toilers" style={{ width: "300px" }} />
        <CustomText label="About Us" variant="h2" isBold={true} />
        <CustomText
          label="We are Workers. We provide work and service. We are group of workers.
            We provide all services related to your indoor outdoor any kind of
            work. We provided best worker based on your location."
        />
      </Box>
      <Box className="about-section">
        <CustomText label="Our Team" variant="h5" isBold={true} />
        <Box className="row">
          {teamMemberDetails.map((teamMember) => {
            return (
              <Box className="column">
                <Box className="card">
                  <img
                    src={teamMember.image}
                    alt="Pravin"
                    style={{
                      marginTop: "30px",
                      width: "75%",
                      borderRadius: "20px",
                    }}
                  />
                  <Box className="container">
                    <CustomText
                      label={teamMember.name}
                      variant="h5"
                      isBold={true}
                      sx={{ my: 2 }}
                    />
                    <CustomText
                      label={teamMember.position}
                      variant="body1"
                      sx={{ my: 2 }}
                    />
                    <CustomText
                      label={teamMember.designation}
                      variant="body1"
                      sx={{ my: 2 }}
                    />
                    <Link>{teamMember.email}</Link>
                    <CustomButton
                      label="Contact"
                      sx={{my: 2, backgroundColor: '#233565'}}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <CustomText
          label="Copyright © 2023 - 2024 TermsFeed®. All rights reserved."
          variant="body1"
          sx={{ my: 2 }}
        />
      </Box>
    </Box>
  );
};

export default AboutPage;
