import { Box, Link } from "@mui/material";
import CustomText from "./common/Text";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import worker18 from "../components/assets/Worker/worker18.png";

const Advertise = () => {
  return (
    <Box
      sx={{
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <img
        src={worker18}
        alt="Toilers"
        style={{ width: "250px", objectFit: "scale-down" }}
      />

      <CustomText
        sx={{ mt: 2, mb: 2 }}
        label="Advertise With Us"
        variant="h5"
        isBold
      />
      <CustomText
        label="Toilers is the most reliable source for the free SEO, digital marketing, image and other utility tools on the internet."
        variant="body1"
      />
      <CustomText
        label="Thousands of users browse our website monthly to use tools online and get their task done faster."
        variant="body1"
      />
      <CustomText
        label="Thus, we can connect you with your targeted audience with our custom advertising solutions."
        variant="body1"
      />
      <CustomText
        label="Explore below to know about ads position & price list."
        variant="body1"
      />
      <CustomText
        sx={{ mt: 2 }}
        label="Website Stats (FY 2021-22)"
        variant="h5"
        isBold
      />
      <Timeline>
        <TimelineItem>
          <TimelineDot color="warning" />
          <TimelineContent> Sessions: 2 M+ (20 Lakhs+)</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot color="info" />
          <TimelineContent> Users: 1.4 M+ (14 Lakhs+)</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot color="success" />
          <TimelineContent> Page Views: 5 M+ (50 Lakhs+)</TimelineContent>
        </TimelineItem>
      </Timeline>
      <CustomText label="Contact us on" variant="h5" sx={{ mt: 2, mb: 2 }} />
      <Link
        variant="h5"
        href="#"
        style={{ marginTop: "5px", marginBottom: "5px", fontSize: "55" }}
        underline="hover"
      >
        hello@toilers.com
      </Link>
    </Box>
  );
};

export default Advertise;
