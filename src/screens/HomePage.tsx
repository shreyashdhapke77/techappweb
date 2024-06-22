import CustomButton from "../components/common/Button";
import CustomText from "../components/common/Text";
import { APP_BG_DARK, APP_BG_LIGHT } from "../utils/colors";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HomePage = () => {
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    accepted: false
  })
  const { accepted } = state;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      accepted: !accepted,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
      <img src={logo} alt="Toilers" style={{ width: "200px" }} />
      <CustomText label="Join Toilers to change your life" variant="h2" isBold={true} />
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Please read and accept privacy policy"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <iframe
                  title="Web View"
                  src="https://www.freeprivacypolicy.com/live/def4f73f-183c-4c1e-9e95-19af44c670a5"
                  style={{ width: '550px', height: '500px' }}
                />
                <FormControlLabel control={<Checkbox onChange={handleChange}/>} label="I have read and understand the above privacy policy" />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <CustomButton sx={{width: '200px', mb: 1, mt: 3, backgroundColor: APP_BG_DARK}} disabled={!accepted} label={'I Agree'} onClick={handleClose}/>
            <CustomButton sx={{width: '200px', mb: 1, mt: 3, color: APP_BG_DARK}} variant='outlined' disabled={!accepted} label={'Disagree'} onClick={handleClose}/>
          </DialogActions>
        </Dialog>
    </Box>
  );
};

const style = {
  top: '10%',
  height: '80%',
  left: '10%',
  width: '80%',
  backgroundColor: 'red',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default HomePage;
