import { Box } from "@mui/material"
import { APP_BG_LIGHT } from "../utils/colors";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomText from "../components/common/Text";

const Community = () => {
    return (
        <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
            <img src={logo} alt="Toilers" style={{ width: "300px" }} />
            <CustomText label="Join Our Community" variant="h3" isBold={true} />
        </Box>
    )
}

export default Community