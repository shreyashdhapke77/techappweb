import { Box } from "@mui/material"
import ApplicationBar from "../components/ApplicationBar"
import { APP_BG_LIGHT } from "../utils/colors"
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomText from "../components/common/Text";

const Dashboard = () => {
    return (
        <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
            <img src={logo} alt="Toilers" style={{ width: "300px" }} />
            <CustomText label="Join Toilers to change your life" variant="h3" isBold={true} />
        </Box>
    )
}

export default Dashboard