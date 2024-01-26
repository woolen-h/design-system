import * as Button from "./Button";
import './assets/css/button.css';

export default {
    title: 'Components/Button/Styled Button',
    tags: ['autodocs']
  };
  const Template = ({ state, ...args }) => {
    return Button.createButton({ state, ...args });
  }
    
  export const Shadow = Template.bind({});
  Shadow.args = {
    state: "shadow",
    label: "Shadow Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Shining = Template.bind({});
  Shining.args = {
    state: "shining",
    label: "Shining Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Glow = Template.bind({});
  Glow.args = {
    state: "glow",
    label: "Glow Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const DiagonalSwipe = Template.bind({});
  DiagonalSwipe.args = {
    state: "diagonal-swipe",
    label: "<span>Diagonal Swipe Button</span>",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Flip = Template.bind({});
  Flip.args = {
    state: "flip",
    label: "",
    backgroundColor: "",
    border: "",
    borderColor: "",
    dataFront: "Front",
    dataBack: "Back",
  };
  
  export const Linebox = Template.bind({});
  Linebox.args = {
    state: "linebox",
    label: "Linebox Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Icon_Animate = Template.bind({});
  Icon_Animate.args = {
    state: "icon-animate",
    label: "<span class='circle'><span class='icon arrow'></span></span><span class='btn-text'>Icon Button</span>",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Swipe = Template.bind({});
  Swipe.args = {
    state: "swipe",
    label: "Swipe Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Bubble = Template.bind({});
  Bubble.args = {
    state: "bubble",
    label: "Bubble Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Icon_Only = Template.bind({});
  Icon_Only.args = {
    state: "icon-only",
    label: "<i class='fi fi-sr-heart'></i>",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  

  export const Switch = Button.switchButton;
