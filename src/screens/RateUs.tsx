import * as React from "react";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import CustomText from "../components/common/Text";
import CustomButton from "../components/common/Button";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import { Favorite } from "@mui/icons-material";
import { APP_BG_LIGHT } from "../utils/colors";

const RateUs = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      style={{
        backgroundColor: APP_BG_LIGHT,
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <Box>
        <CustomText label="Rate Us" variant="h2" isBold={true} />
        <img src={logo} alt="Toilers" style={{ width: "300px" }} />
        <CustomText
          label="Welcome to Toilers"
          variant="h4"
          isBold={true}
          sx={{ mt: 2 }}
        />
        <CustomText
          label="Your opinion matters to us!"
          variant="h5"
          sx={{ mt: 2 }}
        />
        <CustomText
          label={
            "Our Goal is to provide workers that can you help you get your work done."
          }
          variant="h5"
          sx={{ my: 2 }}
        />
        <CustomText
          label={
            "Our Powerful tool supports the individuals to get the workers as well the workers to get the work."
          }
          variant="h5"
          sx={{ mb: 2 }}
        />
        <CustomText
          label={
            "Weather you are a beginner or experienced, we're excited to help you and your journey."
          }
          variant="h5"
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
        {value != null && value > 4 ? (
          <CustomText label="Mind Blowing!" variant="h4" isBold={true} />
        ) : value != null && value > 3 ? (
          <CustomText label="Excellent!" variant="h4" isBold={true} />
        ) : value != null && value > 2 ? (
          <CustomText label="Fantastic!" variant="h4" isBold={true} />
        ) : (
          <CustomText label="Average!" variant="h4" isBold={true} />
        )}
        <CustomButton label="Submit" sx={{ width: "220px", mb: 1, mt: 3 }} />
        <CustomButton
          label="No Thanks"
          variant="outlined"
          sx={{ width: "220px" }}
        />
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
          <Favorite style={{ color: "#ff0000" }} />
          <CustomText label="Love from Toilers" />
        </Box>
      </Box>
      <CustomText
        label="Copyright © 2023 - 2024 TermsFeed®. All rights reserved."
        variant="body1"
        sx={{ my: 2 }}
      />
    </Box>
  );
};

export default RateUs;
