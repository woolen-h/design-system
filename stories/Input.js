import "./assets/css/input.css";

export const textFieldAnimate = () => {
  return (
    '<div class="text-field-animate">' +
      '<input type="text" id="userInput" required />' +
      '<label for="userInput">Enter Name</label>' +
    '</div>'
  );
};
