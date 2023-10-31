import './formContact.css';

const FormContact = () => {
    return (
        <div className="contact-form-two">
            <label className="contact-form-two-form-lable">LIÊN HỆ TƯ VẤN MUA HÀNG</label>
            <input className="contact-form-two-form-inputOne" placeholder="Họ tên của bạn..." />
            <input className="contact-form-two-form-inputTwo" placeholder="Số điện thoại..." />
            <textarea
                rows="10"
                cols="40"
                className="news-action-contact-form-inputText"
                placeholder="Nội dung cần tư vấn..."
            />
            <button className="contact-form-two-btn">Gửi liên hệ</button>
        </div>
    );
};
export default FormContact;
