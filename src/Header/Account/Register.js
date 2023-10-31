import './register.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/config-filebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sdt, setSdt] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const chuyenHuong = useNavigate();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setError('Mật khẩu không khớp');
            alert('Mật khẩu không khớp!');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Lấy UID của tài khoản người dùng mới
            const userUID = userCredential.user.uid;

            // Tạo một tài liệu Firestore để lưu thông tin người dùng
            const userDocRef = doc(db, 'users', userUID);

            // Lưu thông tin người dùng vào Firestore, bao gồm số điện thoại
            await setDoc(userDocRef, {
                email: email,
                sdt: sdt, // Lưu số điện thoại vào cơ sở dữ liệu
            });
            await alert('Đăng ký thành công!');

            chuyenHuong('/login');
        } catch (error) {
            setError(error.message);
            alert('Đăng ký thất bại!');
            document.getElementById('email').focus();
        }
    };

    // const handleXuLyMaDienThoai = () => {
    //     if (!window.recaptchaVerifier) {
    //         window.recaptchaVerifier = new RecaptchaVerifier(
    //             'recaptcha-container',
    //             {
    //                 size: 'invisible',
    //                 callback: (response) => {
    //                     onSignup();
    //                 },
    //                 'expired-callback': () => {},
    //             },
    //             auth,
    //         );
    //     }
    // };

    return (
        <div className="account">
            <div className="account-container">
                <div className="account-container-dangky">
                    <label className="account-container-label">ĐĂNG KÝ</label>
                    <div className="account-container-form">
                        <div className="account-container-form-email">
                            <label className="account-container-form-email-label">Địa chỉ email*</label>
                            <input
                                value={email}
                                id="email"
                                type="email"
                                className="account-container-form-emailRegister-input"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="account-container-form-sđt">
                            <label className="account-container-form-email-label">Nhập SĐT*</label>
                            <input
                                id="sdt"
                                className="account-container-form-emailRegister-input"
                                required
                                onChange={(e) => setSdt(e.target.value)}
                                value={sdt}
                            />
                        </div>
                        <div className="account-container-form-password">
                            <label className="account-container-form-password-label">Mật khẩu*</label>
                            <input
                                value={password}
                                type="password"
                                className="account-container-form-passwordRegister-input"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="account-container-form-password">
                            <label className="account-container-form-password-label">Nhập lại Mật khẩu*</label>
                            <input
                                id="nhapLaiMatKhau"
                                type="password"
                                className="account-container-form-enterPasswordRegister-input"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="account-container-login">
                            <div className="account-container-register-btn" onClick={handleRegister}>
                                ĐĂNG KÝ
                            </div>
                            <Link to="/login" className="account-container-login-btn">
                                ĐĂNG NHẬP
                            </Link>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <div className="account-container-forgotpassword">Quên mật khẩu?</div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
