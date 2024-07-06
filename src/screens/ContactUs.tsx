import { Box, Link, Slide } from "@mui/material";
import CustomButton from "../components/common/Button";
import TextInputField from "../components/common/TextInputField";
import CustomText from "../components/common/Text";
import { Call, Place, MailOutline } from "@mui/icons-material";
import worker6 from "../components/assets/Worker/worker6.png";

const ContactUs = () => {
  const contactDetails = {
    name: '',
    email: '',
    message: ''
  }
  return (
    <Box
      sx={{
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img src={worker6} alt="Toilers" style={{ width: "200px" }} />
        <Slide direction="up" in mountOnEnter unmountOnExit>
          <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
            <CustomText label="Please Contact Us" variant="h4" isBold />
            <CustomText label="For any feedback, suggestion or advertising queries mail us on" variant="h5" sx={{mt: 2, mb: 2}}/>
            <Link variant="h5" href="#" style={{ marginTop: '5px', marginBottom: '5px', fontSize: '55' }} underline="hover">
              hello@toilers.com
            </Link>
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
              }}
            />
          </Box>
        </Slide>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
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
        </Slide>
        {/* window.open("https://maps.google.com?q="+your_lat+","+your_lng ) */}
        <Slide direction='right' in={true} mountOnEnter unmountOnExit>
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
        </Slide>
      </Box>
      <CustomText  label=" Toilers™. Copyright © 2023 - 2024 Toilers™. All rights reserved." variant="body1" sx={{ my: 2 }} />
    </Box>
  );
};

export default ContactUs;
