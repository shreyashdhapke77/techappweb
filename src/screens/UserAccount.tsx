import { Box } from "@mui/material";
import CustomText from "../components/common/Text";
import worker22 from "../components/assets/Worker/worker22.png";
const UserAccount = () => {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <img src={worker22} alt="Toilers" style={{ width: "200px" }} />
      <CustomText
        label="Join Toilers to change your life"
        variant="h4"
        isBold={true}
      />
    </Box>
  );
};

export default UserAccount;
