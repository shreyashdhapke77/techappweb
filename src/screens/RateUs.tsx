import * as React from "react";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import CustomText from "../components/common/Text";
import CustomButton from "../components/common/Button";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import { Favorite } from '@mui/icons-material';
import { APP_BG_DARK, APP_BG_LIGHT } from "../utils/colors";
import TextInputField from "../components/common/TextInputField";

const RateUs = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [message, setMessage] = React.useState<string| null>();
  return (
    <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
      <Box>
        <img src={logo} alt="Toilers" style={{ width: "200px" }} />
        <CustomText label="Please Rate Us" variant="h4" isBold={true} />
        {/* <CustomText
          label="Welcome to Toilers"
          variant="h4"
          isBold={true}
          sx={{ mt: 2 }}
        /> */}
        <CustomText label={"Our Goal is to provide workers that can you help you get your work done."} variant="h6" sx={{ my: 2 }}/>
        <CustomText label={"Our Powerful tool supports the individuals to get the workers as well the workers to get the work."} variant="h6" sx={{ mb: 2 }}/>
        <CustomText label={"Weather you are a beginner or experienced, we're excited to help you and your journey."}variant="h6"sx={{ mb: 2 }}
        />
        <Rating
          size="large"
          name="rating-controller"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ my: 2 }}
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
        <CustomText label="Your opinion matters to us!" variant="h5" sx={{mt: 2}} />
        <TextInputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(e.target.value)
            }}
            multiline={true}
            rows={5}
            label="Please leave a feedback?"
            sx={{ width: { xs: "80%", sm: "70%", lg: "50%", xl: "40%", backgroundColor: 'white' } }}
          />
        <CustomButton label="Submit" sx={{width: '300px', mb: 1, mt: 3, backgroundColor: APP_BG_DARK}}/>
        <CustomButton label="No Thanks" variant='outlined' sx={{width: '300px', color: APP_BG_DARK}}/>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: "20px",
            paddingTop: "50px",
          }}
        >
          <Favorite sx={{mr: 1, color: "#ff0000" }} />
          <CustomText label="Love from Toilers" />
        </Box>
      </Box>
      <CustomText label="Toilers™ Copyright © 2023 - 2024 TermsFeed®. All rights reserved." variant="body1" sx={{ my: 2 }}/>
    </Box>
  );
};

export default RateUs;
