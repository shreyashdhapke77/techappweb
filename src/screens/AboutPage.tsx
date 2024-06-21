import "../about.css";
import React from 'react';
import pravin from "../components/assets/pravin.jpeg";
import shreyash from "../components/assets/shreyash.jpeg";
import ashish from "../components/assets/ashish.jpeg";
import yash from "../components/assets/yash.jpeg";
import nishant from "../components/assets/nishant.jpeg";
import yogesh from "../components/assets/yogesh.jpg";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import { Avatar, Box, Link, ListItemAvatar } from "@mui/material";
import CustomText from "../components/common/Text";
import CustomButton from "../components/common/Button";
import { APP_BG_LIGHT } from "../utils/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const teamMemberDetails = [
  {
    name: "Pravin Salame",
    position: "CEO & Co-founder",
    designation: "Pravin is responsible for marketing and product growth at Toilers. When not busy at Toilers, Pravin enjoys immersing himself in interesting experiences be it running marathons, music, cricket or cooking his wife Jyoti's favourite dishes.",
    email: "pravinsalame@gmail.com",
    contactNumber:'+91 9371643142',
    image: pravin,
  },
  {
    name: "Shreyash Dhapke",
    position: "CEO & Co-founder",
    designation: "Shreyash leads technology and product development at Toilers. In his free time, Shreyash loves to venture outdoors and try his balance while slacklining and bouldering. Shreyash is a music enthusiast who does not miss any opportunity to groove to Westcoast Swing and Rock-n-Roll.",
    email: "shreyashdhapke77@gmail.com",
    contactNumber:'+91 9371643142',
    image: shreyash,
  },
  // {
  //   name: "Ashishsingh Kachhawah",
  //   position: "CTO & Co-Founder",
  //   designation: "Ashish is responsible for operations and service provider on-boarding at Toilers. When not building Toilers, Ashish likes to check out new coffee shops in Urban Theka, explore Bhandara with his Splendor and go for a run at Kasturchand Park Gardens - his favourite spot in the city.",
  //   email: "askachhawah23@gmail.com",
  //   contactNumber:'+91 9371643142',
  //   image: ashish,
  // },
  // {
  //   name: "Yash Mahajan",
  //   position: "Director",
  //   designation: "Yash is responsible for Quality at Toilers. When not building Toilers, Yash likes to check out his farm and play cricket with his friends together. He has won International cup of gully cricket thrice.",
  //   email: "yash.mahajan@gmail.com",
  //   contactNumber:'+91 9371643142',
  //   image: yash,
  // }
];

const AboutPage = () => {
  return (
    <Box style={{backgroundColor: APP_BG_LIGHT}}>
      <Box>
        <img src={logo} alt="Toilers" style={{ width: "300px" }} />
        <CustomText label="About Us" variant="h2" isBold={true} />
        <CustomText
        sx={{margin: '25px', marginX: '50px'}}
          label="We are Workers. We provide work and service. We are group of workers.
            We provide all services related to your indoor outdoor any kind of
            work. We provided best worker based on your location. Toilers is a online platform offering a variety of services at home. 
            Customers use our platform to book services such as carpentry, appliance repair, painting, plumbing, beauty treatments, haircuts, 
            massage therapy, cleaning etc. These services are delivered in the comfort of their home and at a time of their choosing.
             We promise our customers a high quality, standardized and reliable service experience. To fulfill this promise,
             we work closely with our hand-picked service partners, enabling them with technology, training, products, tools,
             financing, insurance and brand, helping them succeed and deliver on this promise.
            Our Vision: Empower millions of professionals worldwide to deliver services at home like never experienced before"
            variant="h5"
        />
        <CustomText
          sx={{margin: '25px'}}
          isBold
          label="How We help you"
            variant="h4"
        />
        <CustomText
          sx={{margin: '25px', marginX: '50px'}}
          label="Toilers provides a platform that allows skilled and experienced professionals to connect with users looking for specific services.
          Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date."
            variant="h5"
        />
        <Box sx={{mb: 2, display: 'flex', flexDirection: 'row', alignContent: 'space-evenly', justifyContent: 'space-evenly', alignItems: 'space-evenly'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <CustomText
                sx={{margin: '25px'}}
                isBold
                label="45,000+"
                  variant="h4"
              />
              <CustomText
                sx={{margin: '25px'}}
                label="Trained Professionals"
                  variant="h5"
              />
              
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <CustomText
                sx={{margin: '25px'}}
                isBold
                label="10 Million+"
                  variant="h4"
              />
              <CustomText
                sx={{margin: '25px'}}
                label="Happy Customers"
                  variant="h5"
              />
              
            </Box>
          </Box>
      </Box>
      <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
        <CustomText label="Our Team" variant="h4" isBold={true} />
        <Box sx={{ display: 'flex', justifyContent: "center", alignContent: "center", alignItems: 'center', mt: 2 }}>
          {teamMemberDetails.map((teamMember) => {
            return (
              <Box className="column" sx={{display: 'flex', justifyContent: 'center'}}>
                <Box className="card" sx={{ width: '90%', height: '600px' }}>
                  <img
                    src={teamMember.image}
                    alt="Pravin"
                    style={{
                      marginTop: "30px",
                      width: "200px",
                      height: "200px",
                      borderRadius: "100px",
                    }}
                  />
                  <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between'}}>
                    <Box sx={{mx: 2}}>
                      <CustomText
                        label={teamMember.name}
                        variant="h5"
                        isBold={true}
                        sx={{ my: 1, color: 'white' }}
                      />
                      <CustomText
                        isBold
                        label={teamMember.position}
                        variant="body1"
                        sx={{ my: 1, color: 'white' }}
                      />
                      <CustomText
                        label={teamMember.designation}
                        align="left"
                        variant="body1"
                        sx={{ my: 1, color: 'white', height: '180px'}}
                      />
                      <Box sx={{ my: 1}}>
                        <SocialIcon style={{ marginRight: '5px'}} url="https://x.com/toilersapp" />
                        <SocialIcon style={{ marginRight: '5px'}} url="https://www.facebook.com/people/Toilers-App/pfbid0uCTtCqSFBHtAqyRjeCPvrGKknR2WVYR45EoixRTwRo3n6vDQJEsVUMu44c3tcW7pl/" title='facebook' type='facebook'/>
                        <SocialIcon style={{ marginRight: '5px'}} url="https://share.com/toilers" title='Sign In With instagram' type='instagram'/>
                        <SocialIcon style={{ marginRight: '5px'}} url="https://instagram.com/toilers" title='instagram' type='facebook'/>
                        <SocialIcon url="https://www.linkedin.com/in/toilers-app-331551315/" title='linkedIn' type='linkedin' />
                      </Box>
                      <Link style={{marginTop: '25px', marginBottom: '25px'}} onClick={() => window.open(`mailto:${teamMember.email}?subject=Subject&body=Body%20goes%20here`)} sx={{ my: 2, color: 'white' }}>{teamMember.email}</Link>
                    </Box>
                      <CustomButton
                        label="Contact"
                        onClick={() => window.location.href = teamMember.contactNumber}
                        sx={{mt: 1, backgroundColor: '#233565', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
                      />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{mb: 2, display: 'flex', flexDirection: 'column'}}>
          <CustomText
            sx={{margin: '25px'}}
            isBold
            label="Our Investors"
              variant="h4"
          />
        </Box>
        <Box sx={{mb: 2, display: 'flex', flexDirection: 'column'}}>
          <Box sx={{mb: 2, display: 'flex', flexDirection: 'row', alignContent: 'space-evenly', justifyContent: 'space-evenly', alignItems: 'space-evenly'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <CustomText sx={{mb: 2}}  variant="h6" label="Nishant Rangari"/>
              <Avatar alt="Nishant Rangari" sx={{ width: 100, height: 100 }} src={nishant}/>
              <CustomText sx={{mt: 2}} variant="h7" label="Urban Theka"/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <CustomText sx={{mb: 2}}  variant="h6" label="Yogesh Lolusare"/>
              <Avatar alt="Yogesh Lolusare" sx={{ width: 100, height: 100 }} src={yogesh} />
              <CustomText sx={{mt: 2}} variant="h7" label="Enjoy Programming"/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <CustomText sx={{mb: 2}}  variant="h6" label="Yash Mahajan"/>
              <Avatar alt="Yash Mahajan" sx={{ width: 100, height: 100 }} src={yash} />
              <CustomText sx={{mt: 2}} variant="h7" label="Green Farms"/>
            </Box>
          </Box>
        <CustomText
          label={'For media queries, contact: press@toilers.com'}
          variant="body1"
          sx={{ my: 2 }}
        />
        </Box>
      </Box>
      <Box sx={{ justifyContent: "center", alignContent: "center", mt: 2 }}>
        <CustomText
          label="Copyright © 2023 - 2024 TermsFeed®. All rights reserved."
          variant="body1"
          sx={{ my: 2 }}
        />
      </Box>
    </Box>
  );
};

export default AboutPage;
