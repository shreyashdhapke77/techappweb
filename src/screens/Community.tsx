import { Box } from "@mui/material"
import { APP_BG_LIGHT } from "../utils/colors";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomText from "../components/common/Text";

const Community = () => {
    return (
        <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
            <img src={logo} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Our Community" variant="h4" isBold={true} />
            <CustomText label="Joining the Toilers as a Community member is a great introduction to the quickly evolving and specialized field of your work." variant="body1" />
            <CustomText label="Membership is free and gives you the opportunity to expand your professional development by networking with seekers worldwide." variant="body1" />
            <CustomText label="Plus, you’ll have the opportunity to be a guest blogger or a facilitator giving you more exposure on the field." variant="body1" />
            <CustomText label="And you’ll get complimentary access to our signature Journal of Online Learning (formerly JALN), topical newsletters and a number of our exclusive online webinars." variant="body1" />
        </Box>
    )
}

export default Community