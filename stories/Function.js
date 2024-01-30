import "./assets/css/function.css";
import "./assets/css/button.css";

export const generateOTP = () => {
  document.addEventListener("DOMContentLoaded", () => {
    function generate() {
      let OTP = "";
      // OTP의 값 스트링으로 기본 지정
      for (let i = 1; i <= 6; i++) {
        // 1부터 6까지의 값을 반복하는 루프를 정의
        OTP += Math.floor(Math.random() * 10);
        // Math.random() 함수는 0 이상 1 미만의 임의의 실수를 생성
        // * 10을 하면 0 이상 10 미만의 값을 생성하게 됨 (소수점 포함)
        // Math.floor() 함수를 사용하면 해당 값을 내림하여 소수점을 제거하고 0부터 9 사이의 정수를 얻을 수 있음
      }

      document.querySelector("#otpTextBox").value = OTP;
      // ID가 otpTextBox인 요소를 선택하여 해당 요소의 value 속성에 OTP 변수 값을 할당
    }

    generate();
    // 스크립트가 실행될 때 generate 함수를 호출하여 초기 OTP를 생성하고 해당 값을 otpTextBox에 할당

    document
      .querySelector("#generateButton")
      .addEventListener("click", generate);
    // ID가 generateButton인 요소를 선택하고 해당 요소에 click 이벤트 리스너를 추가
    // 이벤트가 발생하면 generate 함수가 호출되어 새로운 OTP가 생성되고 화면에 표시됨
  });

  return (
    '<div class="otp">' +
      '<input type="text" id="otpTextBox" readonly />' +
      '<button class="btn primary-btn" id="generateButton">' +
        'Generate' +
      '</button>' +
    '</div>'
  );
};
