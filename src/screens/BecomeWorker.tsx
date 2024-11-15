import CustomText from "../components/common/Text";
import { Box, Chip } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MdPhone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";
import worker3 from "../components/assets/Worker/worker3.png";
import { APP_BG_DARK, APP_BG_LIGHT } from "../utils/colors";
const teamMemberDetails = [
  {
    name: "Pravin",
    email: "pravinsalame@gmail.com",
    contactNumber: "+91 9371643142",
  },
  {
    name: "Shreyash",
    email: "shreyashdhapke777@gmail.com",
    contactNumber: "+91 7887907023",
  },
  {
    name: "Ashish Patel",
    email: "ashish.patel@gmail.com",
    contactNumber: "+91 7887907023",
  },
  {
    name: "Yash",
    email: "yashmishra@gmail.com",
    contactNumber: "+91 7887907023",
  },
];

const BecomeWorker = () => {
  let isTrue = false;
  const theme = useTheme();
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <img src={worker3} alt="Toilers" style={{ width: "200px" }} />
      <CustomText
        label="Join Toilers to change your life"
        variant="h5"
        isBold={true}
      />
      <CustomText
        sx={{ margin: "25px", marginX: "50px" }}
        label="This Feature is coming soon...."
        variant="h5"
      />
      <CustomText
        sx={{ margin: "25px", marginX: "50px" }}
        label="For Now to become a worker in Toilers app please contact our support Team"
        variant="h5"
      />
      <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
        <CustomText label="Our Support Team" variant="h4" isBold={true} />
        <Box
          sx={{
            display: { xs: "block", md: "block", lg: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          {teamMemberDetails.map((teamMember) => {
            return (
              <Box
                className="column"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  className={
                    theme.palette.mode === "dark" ? "card" : "card-light"
                  }
                  sx={{ width: "100%" }}
                >
                  <SupportAgentIcon
                    style={{
                      color:
                        theme.palette.mode === "dark"
                          ? APP_BG_LIGHT
                          : APP_BG_DARK,
                    }}
                    sx={{ fontSize: 100 }}
                  />
                  <CustomText
                    label={`Hi I am ${teamMember.name}`}
                    variant="h6"
                    isBold={true}
                  />
                  <CustomText label="How can I help you ?" variant="body2" />
                  {isTrue ? (isTrue = false) : (isTrue = true)}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      my: 3,
                      mx: 3,
                    }}
                  >
                    <Chip
                      icon={
                        <MdPhone style={{ color: isTrue ? "red" : "green" }} />
                      }
                      label={teamMember.contactNumber}
                      sx={{ mb: 1 }}
                    />
                    <Chip
                      icon={
                        <EmailIcon
                          style={{
                            color:
                              theme.palette.mode === "dark"
                                ? APP_BG_LIGHT
                                : APP_BG_DARK,
                          }}
                        />
                      }
                      label={teamMember.email}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default BecomeWorker;
