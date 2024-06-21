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
            <Box style={{width: '50%'}}>
                <img src={logo} alt="Toilers" style={{ width: "300px" }} />
                <CustomText
                    label="Please fill in your details below."
                />
                {/* sx={{ flexDirection: 'column', display: "flex", alignContent: 'center', justifyContent: 'center'}} */}
                <Box>
                    <TextInputField label="Enter Your Name"/>
                    <TextInputField label="Enter Your Email"/>
                    <TextInputField multiline={true} label="Enter Your Message"
                    />
                    <CustomButton
                        label="Submit Now"
                        sx={{my: 2, backgroundColor: '#0096FF'}}
                    />
                </Box>
                <Box sx={{ flexDirection: 'column', display: "flex", alignContent: 'center', justifyContent: 'center',  marginTop: '20px' }}>
                    <Box>
                        <Place style={{color: '#ff0000'}}/>
                        <CustomText isBold={true}
                            label="Address"
                        />
                    </Box>
                    <Link style={{marginTop: '5px'}} underline="hover">Akashan Apartment, Busiplex, Above ICICI Bank,</Link>
                    <Link style={{marginTop: '5px'}} underline="hover">Ramdaspeth, Near Lokmat Square</Link>
                    <Link style={{marginTop: '5px'}} underline="hover">Nagpur, 440003</Link>
                </Box> 
                <Box sx={{ flexDirection: 'row', display: "flex", alignContent: 'flex-start', justifyContent: 'space-evenly', marginTop: '20px', paddingBottom: '100px' }}>
                    <Box sx={{ flexDirection: 'column', display: "flex", alignContent: 'flex-start', justifyContent: 'center' }}>
                        <Box>
                            <MailOutline style={{color: '#1111ff'}}/>
                            <CustomText isBold={true}
                                label="Mail Us"
                            />
                        </Box>
                        <Link style={{marginTop: '5px'}} underline="hover">info@toilers.com</Link>
                        <Link style={{marginTop: '5px'}} underline="hover">info@toilers.com</Link>
                        
                    </Box>
                    <Box>
                        <Box sx={{ flexDirection: 'column', display: "flex", alignContent: 'flex-start', justifyContent: 'center' }}>
                        <Box>
                            <Call style={{color: '#00A36C'}}/>
                            <CustomText isBold={true}
                                label="Telephone"
                            />
                        </Box>
                        <Link style={{marginTop: '5px'}} underline="hover">(+91) 78879 07023"</Link>
                        <Link style={{marginTop: '5px'}} underline="hover">(+91) 93716 43142"</Link>
                        <Link style={{marginTop: '5px'}} underline="hover">(+91) 83084 32734"</Link>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUs