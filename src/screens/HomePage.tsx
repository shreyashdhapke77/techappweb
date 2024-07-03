import CustomButton from "../components/common/Button";
import CustomText from "../components/common/Text";
import { APP_BG_DARK, APP_BG_LIGHT } from "../utils/colors";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  DialogTitle,
  DialogContentText,
  Grid,
  Fade,
} from "@mui/material";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import * as React from "react";
import { TransitionProps } from "@mui/material/transitions";
import { styled } from "@mui/material/styles";
import pravin from "../components/assets/pravin.jpeg";
import shreyash from "../components/assets/shreyash1.jpg";
import ashish from "../components/assets/ashish.jpeg";
import yash from "../components/assets/yash.jpeg";
import nilesh from "../components/assets/nilesh.jpg";
import mayur from "../components/assets/mayur.jpg";
import yogesh from "../components/assets/yogesh.jpg";
import WorkerCard from "../components/common/WorkerCard";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const teamMemberDetails = [
  {
    name: "Pravin Salame",
    category: "Carpenter",
    profileImage: pravin,
    rate: "Rs 549",
    workImages: "",
    mobileNumber: "+91 9371643142",
    email: "pravin.salame@gmail.com",
  },
  {
    name: "Shreyash Dhapke",
    category: "Chef",
    profileImage: shreyash,
    rate: "Rs 549",
    workImages: "",
    mobileNumber: "+91 7887907023",
    email: "shreyashdhapke7777@gmail.com",
  },
  {
    name: "Ashish Kachhawah",
    category: "Plumber",
    profileImage: ashish,
    rate: "Rs 349",
    workImages: "",
    mobileNumber: "+91 8371673142",
    email: "ashish.kachawah@gmail.com",
  },
];

const HomePage = () => {
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    accepted: false,
  });
  const { accepted } = state;
  const handleClose = () => setOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      accepted: !accepted,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: "50px" }}>
      <img src={logo} alt="Toilers" style={{ width: "200px" }} />
      <CustomText
        label="Join Toilers to change your life"
        variant="h2"
        isBold={true}
      />
      <Fade
        in
        style={{
          transitionDelay: true ? "1000ms" : "0ms",
          transitionDuration: "1000ms",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            mt: 2,
            mx: 3,
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {teamMemberDetails.map((teamMember) => {
              return (
                <WorkerCard
                  name={teamMember.name}
                  category={teamMember.category}
                  description="Hello this is test description"
                  workImages={teamMember.workImages}
                  mobileNumber={teamMember.mobileNumber}
                  email={teamMember.email}
                />
              );
            })}
          </Grid>
        </Box>
      </Fade>
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <iframe
                title="Web View"
                src="https://www.freeprivacypolicy.com/live/def4f73f-183c-4c1e-9e95-19af44c670a5"
                style={{ width: "550px", height: "500px" }}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label="I have read and understand the above privacy policy"
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton
            sx={{ width: "200px", mb: 1, mt: 3, backgroundColor: APP_BG_DARK }}
            disabled={!accepted}
            label={"I Agree"}
            onClick={handleClose}
          />
          <CustomButton
            sx={{ width: "200px", mb: 1, mt: 3, color: APP_BG_DARK }}
            variant="outlined"
            disabled={!accepted}
            label={"Disagree"}
            onClick={handleClose}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const Img = styled("img")({
  margin: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
});

const style = {
  top: "10%",
  height: "80%",
  left: "10%",
  width: "80%",
  backgroundColor: "red",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default HomePage;
