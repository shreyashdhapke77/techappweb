import * as React from "react";
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const RateUs = () => {
    const [value, setValue] = React.useState<number | null>(2);
    const [open, setOpen] = React.useState(false);

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

    const showRateUs = () => {
        return(
        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        >
        <Rating
            name="rating-controller"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        />
        </Dialog>
        );
      }
    return showRateUs()
}

export default RateUs