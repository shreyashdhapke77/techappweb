import Grid from '@mui/material/Grid';
import ApplicationBar from '../components/ApplicationBar';

const ContactUs = () => {
    return (
        <div style={{backgroundColor: '#88d8bc' }} className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
        <ApplicationBar/>
        <div className="container">
            <div className="p-5 bg-light rounded contact-form">
                <div className="row g-4">
                    <div className="col-12">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Get in touch</small>
                        <h1 className="display-5 mb-0">Contact Us For Any Queries!</h1>
                    </div>
                    <div style={{flex: 'center'}} className="row-md-6 row-lg-7">
                        <p className="mb-4">The contact form is to get customer details.<a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <Grid container spacing={2}>
                            <input type="text" style={{width: '100px'}} className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name"/>
                            <input type="email" style={{width: '100px'}} className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Enter Your Email"/>
                            <textarea style={{width: '200px'}} className="w-100 form-control mb-4 p-3 border-primary bg-light" rows={4} cols={10} placeholder="Enter Your Message"></textarea>
                            <button className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Submit Now</button>
                        </Grid>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div>
                            <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div className="">
                                    <h4>Address</h4>
                                    <p>Akashan Apartment, Busiplex, Above ICICI Bank,</p>
                                    <p>Ramdaspeth, Near Lokmat Square,</p>
                                    <p>Nagpur 440003</p>
                                </div>
                            </div>
                            <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div className="">
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">info@Toilers.com</p>
                                    <p className="mb-0">support@Toilers.com</p>
                                </div>
                            </div>
                            <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div className="">
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+91) 78879 07023</p>
                                    <p className="mb-2">(+91) 93716 43142</p>
                                    <p className="mb-0">(+91) 83084 32734</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactUs