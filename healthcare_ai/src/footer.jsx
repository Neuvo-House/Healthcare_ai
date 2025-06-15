import './footer.css';
import shortimage from './assets/image2.png';

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="footer-text">
                    <h1>Empowering Healthcare With <br />Cutting-Edge AI Solutions</h1>
                    <p>We provide personalizd reports, intelligent recommendations,<br />and reliable healthcare insights for a heathier future </p>
                </div>
                <div className="top-image">
                    <img src={shortimage} alt="robot" />
                </div>
            </div>
            <div className="bottom">
                <div class="bottom-container">
                    <div class="box">
                        <ul>
                             <h3>Quick Links</h3>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div class="box">
                        <h3>Socials</h3>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                    <div class="box">
                        <h3> Legals</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms Of Services</li>
                            <li>Cookie Policy</li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>
    );
}
export default Footer;