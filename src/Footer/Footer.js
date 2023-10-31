import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-color">
                <div className="footer-one">
                    <img
                        className="footer-one-img"
                        src="http://hoaqua.langsonweb.com/wp-content/uploads/2020/09/logo-hoa-qua.png"
                    ></img>
                    <div className="footer-one-title">
                        <h1 className="footer-one-title-heading">Về chúng tôi</h1>
                        <p className="footer-one-title-text">
                            Chuyên cung cấp các loại hoa quả nhập khẩu, nội địa và các loại thực phẩm từ thiên nhiên
                        </p>
                    </div>
                </div>
                <div className="footer-two">
                    <h1 className="footer-two-heading">Liên hệ</h1>
                    <ul className="footer-two-list">
                        <li className="footer-two-item">
                            <a className="footer-two-link">
                                <FontAwesomeIcon className="footer-two-icon" icon={faHome} />
                                335 Cầu giấy, Hà Nội
                            </a>
                        </li>
                        <li className="footer-two-item">
                            <a className="footer-two-link">
                                <FontAwesomeIcon className="footer-two-icon" icon={faHome} />
                                0384159943 - 0384159943
                            </a>
                        </li>
                        <li className="footer-two-item">
                            <a className="footer-two-link">
                                <FontAwesomeIcon className="footer-two-icon" icon={faHome} />
                                vuhoduc40@gmail.com
                            </a>
                        </li>
                        <li className="footer-two-item">
                            <a className="footer-two-link">
                                <FontAwesomeIcon className="footer-two-icon" icon={faHome} />
                                335 Cầu giấy, Hà Nội
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-three">
                    <h1 className="footer-three-heading">Tin tức</h1>
                    <ul className="footer-three-list">
                        <li className="footer-three-item">
                            <a className="footer-three-link">
                                Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản{' '}
                            </a>
                        </li>
                        <li className="footer-three-item">
                            <a className="footer-three-link">
                                Eat Clean - bí kíp để có thân hình xinh như mơ của cô nàng 9x
                            </a>
                        </li>
                        <li className="footer-three-item">
                            <a className="footer-three-link">
                                Lấy lại vòng eo con kiến nhờ công thức đơn giản từ củ đậu và rau cải
                            </a>
                        </li>
                        <li className="footer-three-item">
                            <a className="footer-three-link">
                                KM: Tháng giải phóng mỡ thừa, da xấu, độc tố trong cơ thể
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-four">
                    <h1 className="footer-four-heading">Về chúng tôi</h1>
                    <ul className="footer-four-list">
                        <li className="footer-four-item">
                            <a className="footer-four-link">Giới thiệu</a>
                        </li>
                        <li className="footer-four-item">
                            <a className="footer-four-link">Lĩnh vực hoạt động</a>
                        </li>
                        <li className="footer-four-item">
                            <a className="footer-four-link">Chính sách </a>
                        </li>
                        <li className="footer-four-item">
                            <a className="footer-four-link">Triết lí kinh doanh</a>
                        </li>
                        <li className="footer-four-item">
                            <a className="footer-four-link">Năng lực cơ sở vật chất</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
