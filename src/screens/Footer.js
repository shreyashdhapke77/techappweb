
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
    FullRow,
} from "./FooterStyle";
import tools2 from "../components/assets/toilers-logos/tools2.png";
// import circleTool from "../components/assets/toilers-logos/circle-tools.png";
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <Box>
            <FullRow>
            <h1
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "10px",
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
                    </Column>
                </Row>
            </FooterContainer>
            <h4
                style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "100px",
                }}
            >
                Toilers™. Copyright © 2023 - 2024 Toilers™. All rights reserved.
            </h4>
        </Box>
    );
};
export default Footer;