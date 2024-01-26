import './assets/css/alert.css';

export const DefaultAlert = ({
    state = "",
    label = "This is Alert!",
}) => {
    const alert = document.createElement("div");
    alert.className = [`alert alert-${state}`];
    alert.innerText = label;

    return alert;
};

export const IconAlert = ({
    state = "",
    label = "This is Alert!",
    icon_name = ""
}) => {
    const alert = document.createElement("div"); // 변경: 새로운 div 엘리먼트 생성
    const icon = document.createElement("i");
    const text = document.createElement("span");

    alert.classList.add("alert");
    alert.classList.add("alert-icon");

    icon_name.split(" ").forEach(className => icon.classList.add(className));

    // state 변수가 주어진 경우 icon의 클래스명을 설정합니다.
    if (state) {
        alert.classList.add(state);
    }

    alert.appendChild(icon); // 변경: icon을 alert 엘리먼트의 자식으로 추가
    alert.appendChild(text); // 변경: text를 alert 엘리먼트의 자식으로 추가
    text.innerText = label; // 변경: alert 엘리먼트의 텍스트 설정

    return alert.outerHTML;
};