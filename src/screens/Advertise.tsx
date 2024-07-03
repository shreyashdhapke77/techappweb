import { Box, Link } from "@mui/material";
import { APP_BG_LIGHT } from "../utils/colors";
import CustomText from "../components/common/Text";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
const Advertise = () => {
  return (
    <Box
      sx={{
        backgroundColor: APP_BG_LIGHT,
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <CustomText sx={{mt: 2, mb: 2}} label="Advertise With Us" variant="h5" isBold />
      <CustomText label="Toilers is the most reliable source for the free SEO, digital marketing, image and other utility tools on the internet." variant="body1" />
      <CustomText label="Thousands of users browse our website monthly to use tools online and get their task done faster." variant="body1" />
      <CustomText label="Thus, we can connect you with your targeted audience with our custom advertising solutions." variant="body1" />
      <CustomText label="Explore below to know about ads position & price list." variant="body1" />
      <CustomText sx={{mt: 2}} label="Website Stats (FY 2021-22)" variant="h5" isBold />
      <Timeline>
        <TimelineItem>
            <TimelineDot color="warning"/> 
            {/* //'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',/ */}
            {/* <CustomText label="Sessions:" variant="h6" isBold /> */}
          <TimelineContent> Sessions: 2 M+ (20 Lakhs+)</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineDot color="info"/> 
            {/* <CustomText label="Users:" variant="h6" isBold /> */}
          <TimelineContent> Users: 1.4 M+ (14 Lakhs+)</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineSeparator> */}
            <TimelineDot  color="success"/>
            {/* <TimelineConnector /> */}
            {/* <CustomText label="Page Views:" variant="h6" isBold /> */}
          <TimelineContent> Page Views: 5 M+ (50 Lakhs+)</TimelineContent>
        </TimelineItem>
      </Timeline>

{/* 
As Seen On

Search Engine Journal
Neil Patel
Backlinko
Ads Pricelist
Impressions	Cost
10,000	$15
20,000	$25
50,000	$60
100,000	$100
Ads Placements */}

        <CustomText label="Contact us on" variant="h5" sx={{mt: 2, mb: 2}}/>
        <Link variant="h5" href="#" style={{ marginTop: '5px', marginBottom: '5px', fontSize: '55' }} underline="hover">
          hello@toilers.com
        </Link>
    </Box>
  );
};

export default Advertise;
