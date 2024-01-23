import './assets/css/alert.css';

export const createAlert = ({
    state = "",
    label = "This is Alert!",
}) => {
    const alert = document.createElement("div");
    alert.className = [`alert alert-${state}`];
    alert.innerText = label;

    return alert;
};
