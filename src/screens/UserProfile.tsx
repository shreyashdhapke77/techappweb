import { Box } from "@mui/material"
import { APP_BG_LIGHT } from "../utils/colors"
import CustomText from "../components/common/Text";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";

const UserProfile = () => {
    return (
        <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
            <img src={logo} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Toilers to change your life" variant="h3" isBold={true} />
        </Box>
    )
}

export default UserProfile