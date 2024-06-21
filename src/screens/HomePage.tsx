import { Box } from "@mui/material";
import { APP_BG_LIGHT } from "../utils/colors";
import { AutoPlaySwipeView } from "../components/AutoPlaySwipeView";
const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: APP_BG_LIGHT,
        // paddingTop: "20px",
        // paddingBottom: "20px",
      }}
    >
      <AutoPlaySwipeView />
    </Box>
  );
};

export default HomePage;
