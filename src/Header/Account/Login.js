import './login.css';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../../config/config-filebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const chuyenHuong = useNavigate();

    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Đăng nhập thành công!');
            dispatch({ type: 'LOGGED_IN' });
            chuyenHuong('/');
        } catch (error) {
            alert('Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu của bạn.');
            setEmail('');
            setPassword('');
            document.getElementById('email-input').focus();
        }
    };

    return (
        <div className="account">
            <div className="account-container">
                <div className="account-container-dangnhap">
                    <label className="account-container-label">ĐĂNG NHẬP</label>
                    <div className="account-container-form">
                        <div className="account-container-form-email">
                            <label className="account-container-form-email-label">Email*</label>
                            <input
                                id="email-input"
                                className="account-container-form-usernameLogin-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="account-container-form-password">
                            <label className="account-container-form-passwordLogin-label">Mật khẩu*</label>
                            <input
                                type="password"
                                className="account-container-form-passwordLogin-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="account-container-login">
                        <div className="account-container-login-btn" onClick={handleLogin}>
                            ĐĂNG NHẬP
                        </div>
                        <Link to="/register" className="account-container-login-btn">
                            ĐĂNG KÝ
                        </Link>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="account-container-forgotpassword">Quên mật khẩu?</div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default Login;
