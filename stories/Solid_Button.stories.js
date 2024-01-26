import * as Button from "./Button";
import './assets/css/button.css';

export default {
    title: 'Components/Button/Solid Button',
    tags: ['autodocs']
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

  export const Switch = Button.switchButton;
