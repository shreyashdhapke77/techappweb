import Grid from '@mui/material/Grid';
import ApplicationBar from '../components/ApplicationBar';
import { Box, Link } from "@mui/material";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomButton from '../components/common/Button';
import TextInputField from "../components/common/TextInputField";
import CustomText from "../components/common/Text";
import { Call, Place, MailOutline } from '@mui/icons-material';

const ContactUs = () => {
    return (
        <Box style={{backgroundColor: '#88d8bc'}}>
            <Box style={{position: 'sticky', top: 0}}>
                <ApplicationBar />
            </Box>
            <Box className="about-section">
                <img src={logo} alt="Toilers" style={{ width: "300px" }} />
                <CustomText
                    label="Please fill in your details below."
                />
                <Box sx={{ flexDirection: 'column', display: "flex", alignContent: 'center', justifyContent: 'center', width: '50%', marginTop: '20px' }}>
                    <TextInputField label="Enter Your Name"/>
                    <TextInputField label="Enter Your Email"/>
                    <TextInputField multiline={true} label="Enter Your Message"
                    />
                    <CustomButton
                        label="Submit Now"
                        sx={{my: 2, backgroundColor: '#233565'}}
                    />
                </Box>
            </Box>
            <Box className="about-section" sx={{ flexDirection: 'column', display: "flex", alignContent: 'center', justifyContent: 'center', width: '50%', marginTop: '20px' }}>
                <CustomText isBold={true}
                    label="Address"
                />
                <Place/>
                <CustomText
                    label="Akashan Apartment, Busiplex, Above ICICI Bank,"
                />
                <CustomText
                    label="Ramdaspeth, Near Lokmat Square,"
                />
                <CustomText
                    label="Nagpur 440003"
                />
            </Box> 
            <Box sx={{ flexDirection: 'row', display: "flex", alignContent: 'center', justifyContent: 'center', width: '50%', marginTop: '20px' }}>
                <Box sx={{ flexDirection: 'column', display: "flex", alignContent: 'center', justifyContent: 'center', width: '50%', marginTop: '20px' }}>
                    <Box>
                        <MailOutline/>
                        <CustomText isBold={true}
                            label="Mail Us"
                        />
                        <Link style={{marginTop: '5px'}} underline="hover">info@toilers.com</Link>
                        <Link style={{marginTop: '5px'}} underline="hover">info@toilers.com</Link>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ flexDirection: 'column', display: "flex", alignContent: 'center', justifyContent: 'center', width: '50%', marginTop: '20px' }}>
                    <Call/>
                    <CustomText isBold={true}
                        label="Telephone"
                    />
                    <Link style={{marginTop: '5px'}} underline="hover"><Call/>(+91) 78879 07023"</Link>
                    <Link style={{marginTop: '5px'}} underline="hover"><Call/>(+91) 93716 43142"</Link>
                    <Link style={{marginTop: '5px'}} underline="hover"><Call/>(+91) 83084 32734"</Link>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUs