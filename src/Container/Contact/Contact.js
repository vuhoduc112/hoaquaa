import MapComponent from '../../MapComponent/MapComponent';
import FormContact from '../FormContact/FormContact';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './contact.css';
const Contact = () => {
    return (
        <div className="contact">
            <MapComponent />
            <div className="contact-form">
                <div className="contact-form-one">
                    <ul className="contact-form-one-list">
                        <h1 className="contact-form-one-list-heading">LIÊN HỆ VỚI CHÚNG TÔI</h1>
                        <li className="contact-form-one-list-item">
                            <span className="contact-form-one-list-item-bold">Trụ sở chính:</span> 180 – 182 Lý Chính
                            Thắng, Phường 9, Quận 3, TP Hồ Chí Minh
                        </li>
                        <li className="contact-form-one-list-item">
                            <span className="contact-form-one-list-item-bold">Chi nhánh:</span> Tầng 4, số 01 ngõ 120
                            Trường Chinh, Thanh Xuân , Hà Nội
                        </li>
                        <li className="contact-form-one-list-item">
                            <span className="contact-form-one-list-item-bold">Hotline:</span> 0384.159.943.
                        </li>
                        <li className="contact-form-one-list-item">
                            <span className="contact-form-one-list-item-bold">Email:</span> vuhoduc40@gmail.com
                        </li>
                        <li className="contact-form-one-list-item">
                            <span className="contact-form-one-list-item-bold">Website:</span> www.topweb.com.vn
                        </li>
                    </ul>
                    <div>
                        <FacebookOutlinedIcon fontSize="large" color="primary" style={{ margin: '0 8px' }} />
                        <InstagramIcon fontSize="large" color="primary" style={{ margin: '0 8px' }} />
                        <EmailIcon fontSize="large" color="primary" style={{ margin: '0 8px' }} />
                        <CallIcon fontSize="large" color="primary" style={{ margin: '0 8px' }} />
                        <LinkedInIcon fontSize="large" color="primary" style={{ margin: '0 8px' }} />
                    </div>
                </div>
                <FormContact />
            </div>
        </div>
    );
};
export default Contact;
