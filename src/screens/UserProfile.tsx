import { Box } from "@mui/material";
import { APP_BG_LIGHT } from "../utils/colors";

const UserProfile = () => {
  return (
    <Box
      sx={{
        backgroundColor: APP_BG_LIGHT,
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <h1>This is User Profile Page</h1>
      <h1>Coming Soon ....</h1>
    </Box>
  );
};

export default UserProfile;
