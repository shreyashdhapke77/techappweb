import * as React from 'react';
import { Box } from "@mui/material"
import CustomText from "../components/common/Text";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserAccount = () => {
    return (
        <Box sx={{ paddingTop: '50px' }}>
            <img src={logo} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Toilers to change your life" variant="h4" isBold={true} />
        </Box>
  );
}

export default UserAccount;
