import * as Button from "./Button";
import './assets/css/button.css';

export default {
    title: 'Button/Solid Button'
  };
  const Template = ({ state, ...args }) => {
    return Button.createButton({ state, ...args });
  }
  
  export const Primary = Template.bind({});
  Primary.args = {
    state: "primary",
    label: "Primary Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Success = Template.bind({});
  Success.args = {
    state: "success",
    label: "Success Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Danger = Template.bind({});
  Danger.args = {
    state: "danger",
    label: "Danger Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Warning = Template.bind({});
  Warning.args = {
    state: "warning",
    label: "Warning Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Info = Template.bind({});
  Info.args = {
    state: "info",
    label: "Info Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Light = Template.bind({});
  Light.args = {
    state: "light",
    label: "Light Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Dark = Template.bind({});
  Dark.args = {
    state: "dark",
    label: "Dark Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Link = Template.bind({});
  Link.args = {
    state: "link",
    label: "Link Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
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

  export const Switch = Button.switchButton;
