import * as React from "react";
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ApplicationBar from '../components/ApplicationBar';
import { Box } from "@mui/material";

// const RateUs = () => {
//   return (
//     <div>
//       This is Rate Us
//     </div>
//   )
// }
const RateUs = () => {
    const [value, setValue] = React.useState<number | null>(2);
    const [open, setOpen] = React.useState(true);

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
      
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <Box style={{flexGrow: 1, height: '100%'}}>
        <ApplicationBar/>
        <Box className="about-section" style={{flexGrow: 1, height: '100%'}}>
          <h1>Please Rate Us</h1>
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to CaterServ</small>
            <p>Your opinion matters to us!</p>
            <p>We work super hard to make Toilers better for you, and would love to know how would you rate our app?</p>
            <Rating
              size='large'
              name="rating-controller"
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
            />
            { (value != null && value > 4) ? <h1>Mind Blowing!</h1> : (value != null && value > 3) ? <h1>Excellent!</h1> : (value != null && value > 2) ? <h1>Fantastic!</h1> : <h1>Average!</h1> }
            <div>
              <button style={{ border: 'none', outline: '0', display: 'inline-block', padding: '8px', color: 'white', backgroundColor: '#1cd651', textAlign: 'center', width: '250px'}}>Submit</button>
            </div>
            <div><button style={{ marginTop: '10px', border: 'none', outline: '0', display: 'inline-block', padding: '8px', color: 'white', backgroundColor: 'gray', textAlign: 'center', width: '250px'}}>No Thanks</button></div>
            <p>Love from Toilers</p>
            </Box>
      </Box>
    // </Dialog>
  )
}

{/* // <Dialog
//   fullScreen
//   open={open}
//   onClose={handleClose}
//   TransitionComponent={Transition}
//   > */}
export default RateUs