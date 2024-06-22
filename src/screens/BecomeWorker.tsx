
import CustomText from "../components/common/Text";
import { Avatar, Box, Link, ListItemAvatar } from "@mui/material";
import { APP_BG_LIGHT } from "../utils/colors";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";

const BecomeWorker = () => {
    return (
        <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
            <img src={logo} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Toilers to change your life" variant="h3" isBold={true} />
            <CustomText
                sx={{margin: '25px', marginX: '50px'}}
                label="Toilers is an app-based marketplace that empowers professionals like you to become your own boss"
                variant="h5"
            />
        </Box>
    )
}

export default BecomeWorker