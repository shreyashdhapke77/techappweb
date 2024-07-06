import { Box } from "@mui/material"
import CustomText from "../components/common/Text";
import worker7 from "../components/assets/Worker/worker7.png";

const Dashboard = () => {
    return (
        <Box sx={{ paddingTop: '50px' }}>
            <img src={worker7} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Toilers to change your life" variant="h4" isBold={true} />
        </Box>
    )
}

export default Dashboard;
