import CustomButton from "../components/common/Button";
import CustomText from "../components/common/Text";
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
import * as React from "react";
import { TransitionProps } from "@mui/material/transitions";
import pravin from "../components/assets/pravin.jpeg";
import yogesh from "../components/assets/yogesh.jpg";
import shreyash from "../components/assets/shreyash1.jpg";
import ashish from "../components/assets/ashish.jpeg";
import carpenter from "../components/assets/home-slider/carpenter.jpg";
import kitchen from "../components/assets/home-slider/kitchen.jpg";
import glasscleaner from "../components/assets/home-slider/glasscleaner.jpg";
import WorkerCard from "../components/common/WorkerCard";
import worker17 from "../components/assets/Worker/worker17.png";          
import Footer from "./Footer";

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
    rate: "549",
    workImages: "",
    mobileNumber: "+91 9371643142",
    email: "pravin.salame@gmail.com",
    description: 'A useful, plain-language Worker that explains the tasks, duties, function and responsibilities of a position'
  },
  {
    name: "Shreyash Dhapke",
    category: "Chef",
    profileImage: shreyash,
    rate: "549",
    workImages: glasscleaner,
    mobileNumber: "+91 7887907023",
    email: "shreyashdhapke7777@gmail.com",
    description: 'I am passionate about my work and it helps me bring my best to the role. In my previous job, my passion motivated me daily to learn new skills and help the company grow.'

  },
  {
    name: "Ashish Kachhawah",
    category: "Plumber",
    profileImage: ashish,
    rate: "349",
    workImages: carpenter,
    mobileNumber: "+91 8371673142",
    email: "ashish.kachawah@gmail.com",
    description: 'I am a driven individual who focuses on results and works well under pressure. I have helped my team shorten our production time by two weeks.'
  },
  {
    name: "Yash Mahajan",
    category: "Carpenter",
    profileImage: ashish,
    rate: "149",
    workImages: kitchen,
    mobileNumber: "+91 8371673142",
    email: "yash.mahajan@gmail.com",
    description: "I am a people's person. I enjoy working with teams and meeting new people as it inspires me to work on new ideas and collaborative methods."
  },
  {
    name: "Rahul Banginwar",
    category: "Doctor",
    profileImage: ashish,
    rate: "349",
    workImages: glasscleaner,
    mobileNumber: "+91 8371673142",
    email: "ashish.kachawah@gmail.com",
    description: "I am a perfectionist who pays attention to every detail. I ensure everything is in place for a project to be successful."
  },
  {
    name: "Yogesh Lolusare",
    category: "Painter",
    profileImage: yogesh,
    rate: "312",
    workImages: kitchen,
    mobileNumber: "+91 8371673142",
    email: "yogesh.lolusare@gmail.com",
    description: "I am a creative person. I do not limit my thoughts and explore different ways of solving problems through creative thinking."
  },
  {
    name: "Nishant Patel",
    category: "Driver",
    profileImage: ashish,
    rate: "1349",
    workImages: glasscleaner,
    mobileNumber: "+91 8371673142",
    email: "nishant.patel@gmail.com",
    description: "I would describe myself as a creative, initiative, go-getter and someone who faces challenges head-on to ensure the company is ahead of its competition."
  },
  {
    name: "Amitabh Patel",
    category: "Cleaner",
    profileImage: ashish,
    rate: "49",
    workImages: carpenter,
    mobileNumber: "+91 8371673142",
    email: "amitabh.patel@gmail.com",
    description: "I would describe myself as driven, competitive and organised, the person who takes ownership of the situation and is adaptable to changes."
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
    <Box sx={{ paddingTop: "50px" }}>
      <Box sx={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', height: '320px'}}>
        <img id="float" src={worker17} alt="Toilers" style={{ width: "300px", height: '300px' }} />
      </Box>
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
                  description={teamMember.description}
                  workImages={teamMember.workImages}
                  rate={teamMember.rate}
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
            sx={{ width: "200px", mb: 1, mt: 3 }}
            disabled={!accepted}
            label={"I Agree"}
            onClick={handleClose}
          />
          <CustomButton
            sx={{ width: "200px", mb: 1, mt: 3 }}
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

export default HomePage;
