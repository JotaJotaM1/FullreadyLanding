import "./footer.css";
import logoFooter from '../assets/logoFooter.png';

const Footer = () => {
    return (
        <footer>
            <div className='cnt-mediaQuery1024'>
                <div className='cnt-SocialIcons'>
                    <div className='cnt-imgLogoFooter'>
                        <img src={logoFooter} alt='logoFooter'></img>
                        <p className='textFooter'>FULL READY, ENJOY THE BALANCE</p>
                    </div>
                    <div className='cnt-UlSocialFooter'>
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com/share/1EddbWbd3T/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/officialfullready?igsh=MW03Nzc2dmgxNzNvbQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.tiktok.com/@fullreadyofficial?_t=ZP-8wFARRI0O59&_r=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <i className="bi bi-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className='cnt-legalTerm'>
                    <div className='cnt-Copyright'>
                        <p className='textCopy'>Copyright @ 2024 Full Ready. All right reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;