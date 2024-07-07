import "../styles/About.css";
import pravin from "../components/assets/pravin.jpeg";
import shreyash from "../components/assets/shreyash.jpeg";
import yash from "../components/assets/yash.jpeg";
import nishant from "../components/assets/nishant.jpeg";
import yogesh from "../components/assets/yogesh.jpg";
import worker21 from "../components/assets/Worker/worker21.png";
import { Avatar, Box, Link, Slide, Zoom } from "@mui/material";
import CustomText from "../components/common/Text";
import CustomButton from "../components/common/Button";
import { SocialIcon } from "react-social-icons";

const teamMemberDetails = [
  {
    name: "Pravin Salame",
    position: "CEO & Co-founder",
    designation:
      "Pravin is responsible for marketing and product growth at Toilers. When not busy at Toilers, Pravin enjoys immersing himself in interesting experiences be it running marathons, music, cricket or cooking his wife Jyoti's favourite dishes.",
    email: "pravinsalame@gmail.com",
    contactNumber: "+91 9371643142",
    image: pravin,
  },
  {
    name: "Shreyash Dhapke",
    position: "CEO & Co-founder",
    designation:
      "Shreyash leads technology and product development at Toilers. In his free time, Shreyash loves to venture outdoors and try his balance while slacklining and bouldering. Shreyash is a music enthusiast who does not miss any opportunity to groove to Westcoast Swing and Rock-n-Roll.",
    email: "shreyashdhapke77@gmail.com",
    contactNumber: "+91 9371643142",
    image: shreyash,
  },
];

const AboutPage = () => {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Box>
        <Zoom
          in={true}
          style={{
            transitionDelay: true ? "100ms" : "0ms",
            transitionDuration: "500ms",
          }}
        >
          <img src={worker21} alt="Toilers" style={{ width: "300px" }} />
        </Zoom>
        <CustomText label="About Us" variant="h4" isBold={true} />
        <CustomText
          sx={{ margin: "25px", marginX: "50px", my: 2 }}
          label="We are Workers. We provide work and service. We are group of workers.
            We provide all services related to your indoor outdoor any kind of
            work. We provided best worker based on your location. Toilers is a online platform offering a variety of services at home. 
            Customers use our platform to book services such as carpentry, appliance repair, painting, plumbing, beauty treatments, haircuts, 
            massage therapy, cleaning etc. These services are delivered in the comfort of their home and at a time of their choosing.
             We promise our customers a high quality, standardized and reliable service experience. To fulfill this promise,
             we work closely with our hand-picked service partners, enabling them with technology, training, products, tools,
             financing, insurance and brand, helping them succeed and deliver on this promise.
            Our Vision: Empower millions of professionals worldwide to deliver services at home like never experienced before"
          variant="h6"
        />
        <CustomText
          sx={{ margin: "25px" }}
          isBold
          label="How We help you"
          variant="h4"
        />
        <CustomText
          sx={{ margin: "25px", marginX: "50px" }}
          label="Toilers provides a platform that allows skilled and experienced professionals to connect with users looking for specific services.
          Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date."
          variant="h6"
        />
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "row",
            alignContent: "space-evenly",
            justifyContent: "space-evenly",
            alignItems: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText
              sx={{ margin: "25px" }}
              isBold
              label="45,000+"
              variant="h4"
            />
            <CustomText
              sx={{ margin: "25px" }}
              label="Trained Professionals"
              variant="h5"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText
              sx={{ margin: "25px" }}
              isBold
              label="10 Million+"
              variant="h4"
            />
            <CustomText
              sx={{ margin: "25px" }}
              label="Happy Customers"
              variant="h5"
            />
          </Box>
        </Box>
      </Box>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
          <CustomText label="Our Team" variant="h4" isBold={true} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              mt: 2,
              paddingTop: "120px",
            }}
          >
            {teamMemberDetails.map((teamMember) => {
              return (
                <Box
                  className="column"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box className="card" sx={{ width: "90%", height: "525px" }}>
                    <img
                      className="hover-zoom"
                      src={teamMember.image}
                      alt={teamMember.name}
                      style={{
                        marginTop: "-90px",
                        width: "200px",
                        height: "200px",
                        borderRadius: "100px",
                      }}
                    />
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignContent: "space-between",
                      }}
                      sx={{ mt: 2 }}
                    >
                      <Box sx={{ mx: 2 }}>
                        <CustomText
                          className="hover-zoom"
                          label={teamMember.name}
                          variant="h5"
                          isBold={true}
                          sx={{ my: 1 }}
                        />
                        <CustomText
                          className="hover-zoom"
                          isBold
                          label={teamMember.position}
                          variant="body1"
                          sx={{ my: 1 }}
                        />
                        <Box sx={{ my: 1 }}>
                          <SocialIcon
                            className="zoom-icon"
                            style={{ marginRight: "8px" }}
                            url="https://x.com/toilersapp"
                          />
                          <SocialIcon
                            className="zoom-icon"
                            style={{ marginRight: "8px" }}
                            url="https://www.facebook.com/people/Toilers-App/pfbid0uCTtCqSFBHtAqyRjeCPvrGKknR2WVYR45EoixRTwRo3n6vDQJEsVUMu44c3tcW7pl/"
                            title="facebook"
                            type="facebook"
                          />
                          <SocialIcon
                            className="zoom-icon"
                            style={{ marginRight: "8px" }}
                            url="https://share.com/toilers"
                            title="Sign In With instagram"
                            type="instagram"
                          />
                          <SocialIcon
                            className="zoom-icon"
                            style={{ marginRight: "8px" }}
                            url="https://instagram.com/toilers"
                            title="instagram"
                            type="facebook"
                          />
                          <SocialIcon
                            className="zoom-icon"
                            url="https://www.linkedin.com/in/toilers-app-331551315/"
                            title="linkedIn"
                            type="linkedin"
                          />
                        </Box>
                        <CustomText
                          label={teamMember.designation}
                          align="left"
                          variant="body1"
                          sx={{ my: 1, height: "180px" }}
                        />
                        <Link
                          style={{ marginBottom: "25px" }}
                          onClick={() =>
                            window.open(
                              `mailto:${teamMember.email}?subject=Subject&body=Body%20goes%20here`
                            )
                          }
                        >
                          {teamMember.email}
                        </Link>
                      </Box>
                      <CustomButton
                        label="Contact"
                        onClick={() =>
                          (window.location.href = teamMember.contactNumber)
                        }
                        sx={{
                          mt: 1,
                          backgroundColor: "#233565",
                          borderBottomLeftRadius: "20px",
                          borderBottomRightRadius: "20px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ mb: 2, display: "flex", flexDirection: "column" }}>
            <CustomText
              sx={{ margin: "25px" }}
              isBold
              label="Our Investors"
              variant="h4"
            />
          </Box>
          <Box sx={{ mb: 2, display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                mb: 2,
                display: "flex",
                flexDirection: "row",
                alignContent: "space-evenly",
                justifyContent: "space-evenly",
                alignItems: "space-evenly",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText
                  sx={{ mb: 2 }}
                  variant="h6"
                  label="Nishant Rangari"
                />
                <Avatar
                  className="hover-zoom"
                  alt="Nishant Rangari"
                  sx={{ width: 100, height: 100 }}
                  src={nishant}
                />
                <CustomText sx={{ mt: 2 }} variant="h7" label="Urban Theka" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText
                  sx={{ mb: 2 }}
                  variant="h6"
                  label="Yogesh Lolusare"
                />
                <Avatar
                  className="zoom-icon"
                  alt="Yogesh Lolusare"
                  sx={{ width: 100, height: 100 }}
                  src={yogesh}
                />
                <CustomText
                  sx={{ mt: 2 }}
                  variant="h7"
                  label="Enjoy Programming"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText sx={{ mb: 2 }} variant="h6" label="Yash Mahajan" />

                <Avatar
                  className="zoom-icon"
                  alt="Yash Mahajan"
                  sx={{ width: 100, height: 100 }}
                  src={yash}
                />
                <CustomText sx={{ mt: 2 }} variant="h7" label="Green Farms" />
              </Box>
            </Box>

            <CustomText label={"Reach Out"} variant="h5" sx={{ mt: 2 }} />
            <CustomText
              label={
                "For media queries, please get in touch with us on email at media@toilers.comm"
              }
              variant="body1"
              sx={{ my: 2 }}
            />
          </Box>
        </Box>
      </Slide>
      <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
        <CustomText
          label=" Toilers™. Copyright © 2023 - 2024 Toilers™. All rights reserved."
          variant="body1"
          sx={{ my: 2 }}
        />
      </Box>
    </Box>
  );
};

export default AboutPage;
