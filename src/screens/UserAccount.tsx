import * as React from 'react';
import { Box } from "@mui/material"
import CustomText from "../components/common/Text";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import worker12 from "../components/assets/Worker/worker12.png";
const UserAccount = () => {
    return (
        <Box sx={{ paddingTop: '50px' }}>
            <img src={worker12} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Toilers to change your life" variant="h4" isBold={true} />
        </Box>
  );
}

export default UserAccount;
