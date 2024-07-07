import { Box } from "@mui/material";
import worker8 from "../components/assets/Worker/worker8.png";
import CustomText from "../components/common/Text";

const FindWorker = () => {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <img src={worker8} alt="Toilers" style={{ width: "200px" }} />
      <CustomText
        label="Join Toilers to change your life"
        variant="h4"
        isBold={true}
      />
    </Box>
  );
};

export default FindWorker;
