import * as React from "react";
import Rating from "@mui/material/Rating";
import ApplicationBar from "../components/ApplicationBar";
import { Box } from "@mui/material";
import CustomText from "../components/common/Text"
import CustomButton from "../components/common/Button";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";

const RateUs = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box>
      <Box className="about-section">
        <CustomText label="Please Rate Us" variant="h2" isBold={true} />
        <img src={logo} alt="Toilers" style={{ width: "300px" }} />
        <CustomText label="Welcome to Toilers" variant="h4" isBold={true} sx={{mt: 2}} />
        <CustomText label="Your opinion matters to us!" variant="h5" sx={{mt: 2}} />
        <CustomText
          label={"Our Goal is to provide workers that can you help you get your work done."}
          variant="h5"
          sx={{my: 2}}
        />
        <CustomText
          label={"Our Powerful tool supports the individuals to get the workers as well the workers to get the work."}
          variant="h5"
          sx={{mb: 2}}
        />
        <CustomText
          label={"Weather you are a beginner or experienced, we're excited to help you and your journey."}
          variant="h5"
          sx={{mb: 2}}
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
          sx={{width: '220px', mb: 1, mt: 3}}
        />
        <CustomButton
          label="No Thanks"
          variant='outlined'
          sx={{width: '220px'}}
        />
        <CustomText label="Love from Toilers" variant="body1" sx={{my: 3}} />
      </Box>
    </Box>
  );
};

export default RateUs;
