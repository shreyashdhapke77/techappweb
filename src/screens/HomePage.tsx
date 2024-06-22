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
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import pravin from "../components/assets/pravin.jpeg";
import shreyash from "../components/assets/shreyash.jpeg";
import ashish from "../components/assets/ashish.jpeg";
import yash from "../components/assets/yash.jpeg";
import nishant from "../components/assets/nishant.jpeg";
import yogesh from "../components/assets/yogesh.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const teamMemberDetails = [{
  name: 'Pravin Salame',
  profession: 'Carpenter',
  image: pravin,
  charges: 'Rs 549',
  contact: '+91 9371643142'
}, {
  name: 'Shreyash Dhapke',
  profession: 'Cleaner',
  image: shreyash,
  charges: 'Rs 449',
  contact: '+91 9876543210'
}, {
  name: 'Ashish Kachhawah',
  profession: 'Plumber',
  image: ashish,
  charges: 'Rs 349',
  contact: '+91 8371673142'
}, {
    name: 'Yash Mahajan',
    profession: 'Kisan',
    image: yash,
    charges: 'Rs 349',
    contact: '+91 5371673241'
}, {
  name: 'Mayur Ghatole',
    profession: 'Mistri',
    image: ashish,
    charges: 'Rs 349',
    contact: '+91 2371633248'
}, {
  name: 'Nishant Rangari',
    profession: 'Thekedar',
    image: nishant,
    charges: 'Rs 349',
    contact: '+91 8371373164'
}, {
  name: 'Yogesh Lolusare',
    profession: 'Cleaner',
    image: yogesh,
    charges: 'Rs 349',
    contact: '+91 2371643143'
}, {
  name: 'Pravin Salame',
  profession: 'Carpenter',
  image: pravin,
  charges: 'Rs 549',
  contact: '+91 9371643142'
}, {
  name: 'Shreyash Dhapke',
  profession: 'Cleaner',
  image: shreyash,
  charges: 'Rs 449',
  contact: '+91 9876543210'
}, {
  name: 'Ashish Kachhawah',
  profession: 'Plumber',
  image: ashish,
  charges: 'Rs 349',
  contact: '+91 8371673142'
}, {
    name: 'Yash Mahajan',
    profession: 'Kisan',
    image: yash,
    charges: 'Rs 349',
    contact: '+91 5371673241'
}, {
  name: 'Mayur Ghatole',
    profession: 'Mistri',
    image: ashish,
    charges: 'Rs 349',
    contact: '+91 2371633248'
}, {
  name: 'Nishant Rangari',
    profession: 'Thekedar',
    image: nishant,
    charges: 'Rs 349',
    contact: '+91 8371373164'
}, {
  name: 'Yogesh Lolusare',
    profession: 'Cleaner',
    image: yogesh,
    charges: 'Rs 349',
    contact: '+91 2371643143'
},
{
  name: 'Pravin Salame',
  profession: 'Carpenter',
  image: pravin,
  charges: 'Rs 549',
  contact: '+91 9371643142'
}, {
  name: 'Shreyash Dhapke',
  profession: 'Cleaner',
  image: shreyash,
  charges: 'Rs 449',
  contact: '+91 9876543210'
}, {
  name: 'Ashish Kachhawah',
  profession: 'Plumber',
  image: ashish,
  charges: 'Rs 349',
  contact: '+91 8371673142'
}, {
    name: 'Yash Mahajan',
    profession: 'Kisan',
    image: yash,
    charges: 'Rs 349',
    contact: '+91 5371673241'
}, {
  name: 'Mayur Ghatole',
    profession: 'Mistri',
    image: ashish,
    charges: 'Rs 349',
    contact: '+91 2371633248'
}, {
  name: 'Nishant Rangari',
    profession: 'Thekedar',
    image: nishant,
    charges: 'Rs 349',
    contact: '+91 8371373164'
}, {
  name: 'Yogesh Lolusare',
    profession: 'Cleaner',
    image: yogesh,
    charges: 'Rs 349',
    contact: '+91 2371643143'
},
{
  name: 'Pravin Salame',
  profession: 'Carpenter',
  image: pravin,
  charges: 'Rs 549',
  contact: '+91 9371643142'
}, {
  name: 'Shreyash Dhapke',
  profession: 'Cleaner',
  image: shreyash,
  charges: 'Rs 449',
  contact: '+91 9876543210'
}, {
  name: 'Ashish Kachhawah',
  profession: 'Plumber',
  image: ashish,
  charges: 'Rs 349',
  contact: '+91 8371673142'
}, {
    name: 'Yash Mahajan',
    profession: 'Kisan',
    image: yash,
    charges: 'Rs 349',
    contact: '+91 5371673241'
}, {
  name: 'Mayur Ghatole',
    profession: 'Mistri',
    image: ashish,
    charges: 'Rs 349',
    contact: '+91 2371633248'
}, {
  name: 'Nishant Rangari',
    profession: 'Thekedar',
    image: nishant,
    charges: 'Rs 349',
    contact: '+91 8371373164'
}, {
  name: 'Yogesh Lolusare',
    profession: 'Cleaner',
    image: yogesh,
    charges: 'Rs 349',
    contact: '+91 2371643143'
},
]

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

  const FormRow = ({teamMember}: any) => {
    return (
      <Grid spacing={2} style={{ display: 'flex', backgroundColor: '#01010111'}} item xs={12} sx={{
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
        'rgba(0,0,0,0.1) 99%, rgba(0,0,0,0) 100%)',
    }}>
        <Grid item xs={12} sm container>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={teamMember.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs container direction="column">
            <Box style={{margin: '5px', display: 'flex', flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
              <CustomText sx={{color: APP_BG_DARK}} variant="h6" label={teamMember.name} isBold/>
              <CustomText variant="subtitle1" label={teamMember.profession} isBold/>
              <CustomText variant="body1" label={teamMember.contact}/>
              <Box style={{margin: '5px',  display: 'flex', flexDirection: "row", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <FontAwesomeIcon size='2x' style={{margin: '5px', color: APP_BG_DARK}} icon={faFacebook} />
                <FontAwesomeIcon size='2x' style={{margin: '5px', color: APP_BG_DARK}} icon={faInstagram} />
                <FontAwesomeIcon size='2x' style={{margin: '5px', color: APP_BG_DARK}} icon={faTwitter} />
                <FontAwesomeIcon size='2x' style={{margin: '5px', color: APP_BG_DARK}} icon={faLinkedin} />
              </Box>
            </Box>
          </Grid>
          <Grid item sx={{margin: '5px', display: 'flex', flexDirection: "column", justifyContent: 'space-between'}}>
            <Box style={{margin: '5px',  display: 'flex', flexDirection: "row", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'space-between'}}>
              <CustomText variant="body2" label={'Cost: '} isBold/>
              <CustomText  sx={{color: APP_BG_DARK, ml: 1}} variant="body2" label={teamMember.charges + '/Hrs'} isBold/>
            </Box>
            <CustomButton label="Connect" sx={{ backgroundColor: APP_BG_DARK}}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
      <img src={logo} alt="Toilers" style={{ width: "200px" }} />
      <CustomText label="Join Toilers to change your life" variant="h2" isBold={true} />
      <Box sx={{ display: 'block', justifyContent: "center", alignContent: "center", alignItems: 'center', mt: 2 }}>
        {teamMemberDetails.map((teamMember) => {
          return (
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              float: 'left',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#1A202711',
            }}
          >
              <Grid container style={{margin: '1px'}} item>
                <FormRow teamMember={teamMember}/>
              </Grid>
          </Paper>
          )
        })}
        </Box>
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

const Img = styled('img')({
  margin: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
});


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
