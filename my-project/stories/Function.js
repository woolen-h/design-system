import './assets/css/function.css';
import './assets/css/button.css';

export const generateOTP = () => {
    document.addEventListener('DOMContentLoaded', () => {
        function generate() {
        let OTP = '';
        for(let i=1; i<=6; i++) {
            OTP += Math.floor(Math.random() * 10);
        }

        document.querySelector('#otpTextBox').value = OTP;
    }

    generate();

    document.querySelector('#generateButton').addEventListener('click', generate);
    });

    return '<div class="otp"><input type="text" id="otpTextBox" readonly /><button class="btn primary-btn" id="generateButton">Generate</button></div>'
};

