import CustomButton from "../components/common/Button";
import TextInputField from "../components/common/TextInputField";
import CustomText from "../components/common/Text";
import { APP_BG_LIGHT } from "../utils/colors";
import { Box } from "@mui/material";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
      <img src={logo} alt="Toilers" style={{ width: "300px" }} />
      <CustomText label="Join Toilers to change your life" variant="h2" isBold={true} />
      <TextInputField
         label="Hello"
      />
      <CustomButton
         label="Submit"
      />
      <CustomText
        label="My Text"
      />
    </Box>
  );
};

export default HomePage;
