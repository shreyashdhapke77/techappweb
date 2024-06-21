import { Box, Link } from "@mui/material";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomButton from "../components/common/Button";
import TextInputField from "../components/common/TextInputField";
import CustomText from "../components/common/Text";
import { Call, Place, MailOutline } from "@mui/icons-material";
import { APP_BG_DARK, APP_BG_LIGHT } from "../utils/colors";

const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: APP_BG_LIGHT,
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <CustomText label="Contact Us" variant="h2" isBold={true} />
        <img src={logo} alt="Toilers" style={{ width: "300px" }} />
        <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
          <TextInputField
            label="Enter Your Name"
            sx={{ width: { xs: "80%", sm: "70%", lg: "60%", xl: "50%" } }}
          />
          <TextInputField
            label="Enter Your Email"
            sx={{ width: { xs: "80%", sm: "70%", lg: "60%", xl: "50%" } }}
          />
          <TextInputField
            multiline={true}
            rows={5}
            label="How can we help you serve better ?"
            sx={{ width: { xs: "80%", sm: "70%", lg: "60%", xl: "50%" } }}
          />
          <CustomButton
            label="Submit"
            size="large"
            sx={{
              width: { xs: "80%", sm: "70%", lg: "60%", xl: "50%" },
              my: 2,
              backgroundColor: APP_BG_DARK,
            }}
          />
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Box>
            <Place style={{ color: "#ff0000" }} />
            <CustomText isBold={true} label="Address" />
          </Box>
          <Link style={{ marginTop: "5px" }} underline="hover">
            Akashan Apartment, Busiplex, Above ICICI Bank,
          </Link>
          <Link style={{ marginTop: "5px" }} underline="hover">
            Ramdaspeth, Near Lokmat Square
          </Link>
          <Link style={{ marginTop: "5px" }} underline="hover">
            Nagpur, 440003
          </Link>
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            alignContent: "flex-start",
            justifyContent: "space-evenly",
            mt: 3,
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              alignContent: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box>
              <MailOutline style={{ color: "#1111ff" }} />
              <CustomText isBold={true} label="Mail Us" />
            </Box>
            <Link style={{ marginTop: "5px" }} underline="hover">
              info@toilers.com
            </Link>
            <Link style={{ marginTop: "5px" }} underline="hover">
              info@toilers.com
            </Link>
          </Box>
          <Box
            sx={{
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Box>
              <Call style={{ color: "#00A36C" }} />
              <CustomText isBold={true} label="Telephone" />
            </Box>
            <Link style={{ marginTop: "5px" }} underline="hover">
              (+91) 78879 07023
            </Link>
            <Link style={{ marginTop: "5px" }} underline="hover">
              (+91) 93716 43142
            </Link>
          </Box>
        </Box>
      </Box>
      <CustomText
        label="Copyright © 2023 - 2024 TermsFeed®. All rights reserved."
        variant="body1"
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default ContactUs;
