import * as React from "react";
import "../styles/RateUs.css";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import CustomText from "../components/common/Text";
import CustomButton from "../components/common/Button";
import { Favorite } from "@mui/icons-material";
import TextInputField from "../components/common/TextInputField";
import { APP_BG_DARK } from "../utils/colors";
import worker10 from "../components/assets/Worker/worker10.png";

const RateUs = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [message, setMessage] = React.useState<string | null>();
  console.log("Typed Message ===> ", message);

  const getRatingLabel = (value: number | null) => {
    if (value != null && value > 4) return "Mind Blowing!";
    else if (value != null && value > 3) return "Excellent!";
    else if (value != null && value > 2) return "Fantastic!";
    else return "Average!";
  };
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Box>
        <img src={worker10} alt="Toilers" style={{ width: "200px" }} />
        <CustomText label="Please Rate Us" variant="h4" isBold={true} />
        <CustomText
          label={
            "Our Goal is to provide workers that can you help you get your work done."
          }
          variant="h6"
          sx={{ my: 2 }}
        />
        <CustomText
          label={
            "Our Powerful tool supports the individuals to get the workers as well the workers to get the work."
          }
          variant="h6"
          sx={{ mb: 2 }}
        />
        <CustomText
          label={
            "Weather you are a beginner or experienced, we're excited to help you and your journey."
          }
          variant="h6"
          sx={{ mb: 2 }}
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
        <CustomText label={getRatingLabel(value)} variant="h4" isBold={true} />
        <CustomText
          label="Your opinion matters to us!"
          variant="h5"
          sx={{ mt: 2 }}
        />
        <TextInputField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(e.target.value);
          }}
          multiline={true}
          rows={5}
          label="Please leave a feedback?"
          sx={{ width: { xs: "80%", sm: "70%", lg: "50%", xl: "40%" } }}
        />
        <CustomButton
          label="Submit"
          sx={{ width: "300px", mb: 1, mt: 3, backgroundColor: APP_BG_DARK }}
        />
        <CustomButton
          label="No Thanks"
          variant="outlined"
          sx={{ width: "300px", color: APP_BG_DARK }}
        />
        <Box className="footer-text">
          <Favorite sx={{ mr: 1, color: "#ff0000" }} />
          <CustomText label="Love from Toilers" />
        </Box>
      </Box>
      <CustomText
        label="Copyright © 2023 - 2024 Toilers™. All rights reserved."
        variant="body1"
        sx={{ my: 2 }}
      />
    </Box>
  );
};

export default RateUs;
