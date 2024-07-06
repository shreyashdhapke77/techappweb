
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";
 
const Footer = () => {
    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: 'column',
          alignContent: 'space-between',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
            <h1
                style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Join Toilers to change your life!
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
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
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
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