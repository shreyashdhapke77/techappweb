import { Box, Link } from "@mui/material";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomButton from "../components/common/Button";
import TextInputField from "../components/common/TextInputField";
import CustomText from "../components/common/Text";
import { Call, Place, MailOutline } from "@mui/icons-material";
import { APP_BG_DARK, APP_BG_LIGHT } from "../utils/colors";

const ContactUs = () => {
  const contactDetails = {
    name: '',
    email: '',
    message: ''
  }
  return (
    <Box
      sx={{
        backgroundColor: APP_BG_LIGHT,
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img src={logo} alt="Toilers" style={{ width: "200px" }} />
        <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
          <CustomText label="Please Contact Us" variant="h3" isBold={true} />
          <TextInputField
            label="Enter Your Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              contactDetails.name = e.target.value
            }}
            sx={{ width: { xs: "80%", sm: "70%", lg: "60%", xl: "50%" } }}
          />
          <TextInputField
            label="Enter Your Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              contactDetails.email = e.target.value
            }}
            sx={{ width: { xs: "80%", sm: "70%", lg: "60%", xl: "50%" } }}
          />
          <TextInputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              contactDetails.message = e.target.value
              console.log('contactDetails - ', contactDetails)
              console.log('>>> ', contactDetails.name.length === 0, contactDetails.email.length === 0, contactDetails.message.length === 0, ' >>> == >> ', !(contactDetails.name.length === 0 && contactDetails.email.length === 0 && contactDetails.message.length === 0))
            }}
            multiline={true}
            rows={5}
            label="How can we help you serve better ?"
            sx={{ width: { xs: "80%", sm: "70%", lg: "60%", xl: "50%" } }}
          />
          <CustomButton
            disabled={!(contactDetails.name.length === 0 && contactDetails.email.length === 0 && contactDetails.message.length === 0)}
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
            mt: 2,
          }}
        >
          <Box>
            <Place style={{ color: "#ff0000" }} />
            <CustomText isBold={true} label="Address" />
          </Box>
          <Link onClick={() => window.open("https://maps.google.com?q="+21.134167+','+79.075890 )} style={{ marginTop: "5px" }} underline="hover">
            Akashan Apartment, Busiplex, Above ICICI Bank,
          </Link>
          <Link onClick={() => window.open("https://maps.google.com?q="+21.134167+','+79.075890 )} style={{ marginTop: "5px" }} underline="hover">
            Ramdaspeth, Near Lokmat Square
          </Link>
          <Link onClick={() => window.open("https://maps.google.com?q="+21.134167+','+79.075890 )} style={{ marginTop: "5px" }} underline="hover">
            Nagpur, 440003
          </Link>
        </Box>
        {/* window.open("https://maps.google.com?q="+your_lat+","+your_lng ) */}
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
              support@toilers.com
            </Link>
          </Box>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              alignContent: "flex-start",
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
