import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../config/config-filebase';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';

const LoginWithPhone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);

    const handleSendCode = async () => {
        const appVerifier = new RecaptchaVerifier('recaptcha-container');
        try {
            const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setConfirmationResult(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleVerifyCode = async () => {
        try {
            const credential = PhoneAuthProvider.credential(confirmationResult.verificationId, code);
            await auth.signInWithCredential(credential);
            // Đăng nhập thành công, bạn có thể thực hiện chuyển hướng hoặc thực hiện các hành động khác.
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="tel"
                placeholder="Số điện thoại"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSendCode}>Gửi mã xác thực</button>
            <div id="recaptcha-container"></div>
            <input type="text" placeholder="Mã xác thực" value={code} onChange={(e) => setCode(e.target.value)} />
            <button onClick={handleVerifyCode}>Xác thực</button>
        </div>
    );
};

export default LoginWithPhone;
