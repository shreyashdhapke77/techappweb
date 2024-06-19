import * as React from "react";
import Rating from "@mui/material/Rating";
import ApplicationBar from "../components/ApplicationBar";
import { Box } from "@mui/material";
import CustomText from "../components/common/Text"
import CustomButton from "../components/common/Button";

const RateUs = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box>
      <Box style={{ position: "sticky", top: 0 }}>
        <ApplicationBar />
      </Box>
      <Box className="about-section">
        <CustomText label="Please Rate Us" variant="h3" isBold={true} />
        <CustomText label="Welcome to Toilers" variant="body2" />
        <CustomText label="Your opinion matters to us!" variant="h6" sx={{mt: 2}} />
        <CustomText
          label="We work super hard to make Toilers better for you, and would love to
          know how would you rate our app?"
          variant="h6"
        />
        <Rating
          size="large"
          name="rating-controller"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{my: 2}}
        />
        {value != null && value > 4 ? (
          <CustomText label="Mind Blowing!" variant="h4" isBold={true} />
        ) : value != null && value > 3 ? (
          <CustomText label="Excellent!" variant="h4" isBold={true} />
        ) : value != null && value > 2 ? (
          <CustomText label="Fantastic!" variant="h4" isBold={true} />
        ) : (
          <CustomText label="Average!" variant="h4" isBold={true} />
        )}
        <CustomButton
          label="Submit"
          sx={{width: '220px', my: 1}}
        />
        <CustomButton
          label="No Thanks"
          variant='outlined'
          sx={{width: '220px'}}
        />
        <CustomText label="Love from Toilers" variant="body1" sx={{my: 2}} />
      </Box>
    </Box>
  );
};

export default RateUs;
