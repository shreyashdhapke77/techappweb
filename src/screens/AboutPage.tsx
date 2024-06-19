import '../about.css';
import pravin from '../components/assets/pravin.jpeg';
import shreyash from '../components/assets/shreyash.jpeg';
import ashish from '../components/assets/ashish.jpeg';
import logo from '../components/assets/toilers-logos/png/logo-no-background-black.png';
import ApplicationBar from '../components/ApplicationBar';

const AboutPage = () => {
        return (
        <div>
            <ApplicationBar/>
            <div className="about-section">
            <img src={logo} alt="Toilers" style={{width:'300px'}}/>
            <h1>About Us</h1>
            <p>We are Workers. We provide work and service. We are group of workers. We provide all services related to your indoor outdoor any kind of work. We provided best worker based on your location.</p>
            </div>
            <div className="about-section">
            <h2 style={{textAlign:'center'}}>Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card">
                        <img src={pravin} alt="Pravin" style={{marginTop: '30px', width:'75%'}}/>
                        <div className="container">
                            <h2>Pravin Salame</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Worked in Toilers.</p>
                            <p>pravinsalame@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                        </div>
                    </div>
            
                    <div className="column">
                        <div className="card">
                        <img src={shreyash} alt="Shreyash" style={{marginTop: '30px', width:'75%'}}/>
                        <div className="container">
                            <h2>Shreyash Dhapke</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Worked in Toilers.</p>
                            <p>shreyashdhapke@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                        </div>
                    </div>
            
                    <div className="column">
                        <div className="card">
                        <img src={ashish} alt="Ashish" style={{marginTop: '30px', width:'75%'}}/>
                        <div className="container">
                            <h2>Ashish Singh</h2>
                            <p className="title">CTO & Co-Founder</p>
                            <p>Worked in Toilers.</p>
                            <p>ashishsingh@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                        </div>
                    </div>
                </div>
                Copyright © 2023 - 2024 TermsFeed®. All rights reserved.
            </div>
            </div>
        )
}

export default AboutPage