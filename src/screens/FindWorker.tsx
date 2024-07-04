import { Box } from "@mui/material"
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomText from "../components/common/Text";

const FindWorker = () => {
    return (
        <Box sx={{ paddingTop: '50px' }}>
             <img src={logo} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Toilers to change your life" variant="h4" isBold={true} />
        </Box>
    )
}

export default FindWorker;
