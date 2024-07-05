import * as React from 'react';
import { Box } from "@mui/material"
import { APP_BG_LIGHT } from "../utils/colors"
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
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
    <img src={logo} alt="Toilers" style={{ width: "200px" }} />
    <CustomText label="Join Toilers to change your life" variant="h4" isBold={true} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CustomText variant="h6" label='Text in a modal'/>
          <CustomText sx={{ mt: 2 }} label=' Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'/>
        </Box>
      </Modal>
    </Box>
  );
}

export default UserAccount;
