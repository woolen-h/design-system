import './assets/css/button.css';

export const createButton = ({
    state = "",
    backgroundColor = "",
    border = "",
    borderColor = "",
    label = "Button",
    onClick,
    dataBack = "",
    dataFront = "",
}) => {
    const btn = document.createElement("button");
    btn.className = [`btn ${state}-btn`];
    btn.style.backgroundColor = backgroundColor;
    btn.style.border = border;
    btn.style.borderColor = borderColor;
    btn.innerHTML = label;
    btn.addEventListener("click", onClick);
    btn.dataset.back = dataBack;
    btn.dataset.front = dataFront;

    return btn;
};

export const switchButton = () => {
    return (
        '<div class="btn switch-btn">' +
            '<input type="checkbox" class="checkbox" id="checkbox" />' +
            '<label class="switch" for="checkbox">' +
                '<span class="slider"></span>' +
            '</label>' +
        '</div>'
    )
};
