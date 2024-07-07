import "../styles/ContactUs.css"
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
    <Box className="main">
      <Box sx={{ width: "100%" }}>
        <img src={worker6} alt="Toilers" style={{ width: "200px" }} />
        <Slide direction="up" in mountOnEnter unmountOnExit>
          <Box className="body" sx={{ mt: 2 }}>
            <CustomText label="Please Contact Us" variant="h4" isBold />
            <CustomText label="For any feedback, suggestion or advertising queries mail us on" variant="h5" sx={{mt: 2, mb: 2}}/>
            <Link variant="h5" href="#" className="link" underline="hover">
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
          <Box sx={{mt: 2}} className="address">
            <Box>
              <Place style={{ color: "#ff0000" }} />
              <CustomText variant="h6" isBold={true} label="Address" />
            </Box>
            <Link onClick={() => window.open("https://maps.google.com?q="+21.134167+','+79.075890 )} className="address-margin" underline="hover">
              Akashan Apartment, Busiplex, Above ICICI Bank,
            </Link>
            <Link onClick={() => window.open("https://maps.google.com?q="+21.134167+','+79.075890 )} className="address-margin" underline="hover">
              Ramdaspeth, Near Lokmat Square
            </Link>
            <Link onClick={() => window.open("https://maps.google.com?q="+21.134167+','+79.075890 )} className="address-margin" underline="hover">
              Nagpur, 440003
            </Link>
          </Box>
        </Slide>
        <Slide direction='right' in={true} mountOnEnter unmountOnExit>
        <Box className="email-phone-body" sx={{mt: 3}}>
          <Box className="email-view">
            <Box>
              <MailOutline style={{ color: "#1111ff" }} />
              <CustomText variant="h6" isBold={true} label="Mail Us" />
            </Box>
            <Link className="address-margin" underline="hover">
              info@toilers.com
            </Link>
            <Link className="address-margin" underline="hover">
              support@toilers.com
            </Link>
          </Box>
          <Box sx={{mb: 2}} className="mobile-view">
            <Box>
              <Call sx={{ fontSize: 'large', color: "#00A36C" }} />
              <CustomText variant="h6" isBold={true} label="Telephone" />
            </Box>
              <Link className="address-margin" underline="hover">
                (+91) 78879 07023
              </Link>
              <Link className="address-margin" underline="hover">
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
