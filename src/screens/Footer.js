
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
    FullRow,
    BottomText,
    FullColumn,
} from "./FooterStyle";
import tools2 from "../components/assets/toilers-logos/tools2.png";
import mobileApp from "../components/assets/toilers-logos/mobileApp.png";
import { SocialIcon } from 'react-social-icons'
import { Divider } from "@mui/material";

const Footer = () => {
    return (
        <>
            <FullColumn style={{
                        color: "Black",
                        padding: '25px',
                        background: 'white',
                        textAlign: "center",
                        justifyContent: 'center',
                        marginTop: "10px",
                    }}>
                <h1
                >
                    For better experience,download the Toilers app now
                </h1>
                <img src={mobileApp} alt="mobile"/>
            </FullColumn>
        <Box>
            <FullRow>
            <h1
                    style={{
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    Join Toilers to change your life!
                </h1>
                <img style={{ width: "150px", height: '150px', marginRLeft:2 }} className="FR" alt='tools' src={tools2} />
                </FullRow>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Toilers</Heading>
                        <FooterLink href="#">
                        Who we are
                        </FooterLink>
                        <FooterLink href="#">
                        Help & Support
                        </FooterLink>
                        <FooterLink href="#">
                        Partner with us
                        </FooterLink>
                        <FooterLink href="#">
                        Legal
                        </FooterLink>
                        <FooterLink href="#">
                        Terms & Conditions
                        </FooterLink>
                        <FooterLink href="#">
                        Cookie Policy
                        </FooterLink>
                        <FooterLink href="#">
                        Privacy Policy
                        </FooterLink>
                        <FooterLink href="#">
                        Investor Relations
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Links</Heading>
                        <FooterLink href="#">
                            About Us
                        </FooterLink>
                        <FooterLink href="#">
                            Contact Us
                        </FooterLink>
                        <FooterLink href="#">
                            Rate Us
                        </FooterLink>
                        <FooterLink href="#">
                            Blog
                        </FooterLink>
                        <FooterLink href="#">
                            Community
                        </FooterLink>
                        <FooterLink href="#">
                            Advertise with Us
                        </FooterLink>
                        <FooterLink href="#">
                            Join Us
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                           Nagpur
                        </FooterLink>
                        <FooterLink href="#">
                            Pune
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                        <FooterLink href="#">
                            Chennai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                        {/* 
                        
                        <SocialIcon className='zoom-icon' style={{ marginRight: '8px'}} url="https://share.com/toilers" title='Sign In With instagram' type='instagram'/>
                        <SocialIcon className='zoom-icon' url="https://www.linkedin.com/in/toilers-app-331551315/" title='linkedIn' type='linkedin' /> */}
                        <SocialIcon className='zoom-icon' style={{ marginRight: '8px'}} url="https://www.facebook.com/people/Toilers-App/pfbid0uCTtCqSFBHtAqyRjeCPvrGKknR2WVYR45EoixRTwRo3n6vDQJEsVUMu44c3tcW7pl/" title='facebook' type='facebook'/>
                        <span
                            style={{
                                marginLeft: "10px",
                            }}
                        >
                            Facebook
                        </span>
                        </FooterLink>
                        <FooterLink href="#">
                        <SocialIcon className='zoom-icon' style={{ marginRight: '8px'}} url="https://instagram.com/toilers" title='instagram' type='facebook'/>

                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                        </FooterLink>
                        <FooterLink href="#">
                        <SocialIcon className='zoom-icon' style={{ marginRight: '8px'}} url="https://x.com/toilersapp" />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                        </FooterLink>
                        <FooterLink href="#">
                        <SocialIcon className='zoom-icon' style={{ marginRight: '8px'}} url="https://youtube.com/toilersapp" />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                        </FooterLink>
                        <FooterLink href="#">
                        <SocialIcon className='zoom-icon' url="https://www.linkedin.com/in/toilers-app-331551315/" title='linkedIn' type='linkedin' />
                            <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Linked In
                                </span>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
            <Divider/>
            <BottomText>
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 
                </BottomText>
            <BottomText>
                Toilers™. Copyright © 2023 - 2024. All rights reserved.
            </BottomText>
        </Box>
        </>
    );
};
export default Footer;