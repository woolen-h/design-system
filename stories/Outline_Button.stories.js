import * as Button from "./Button";
import './assets/css/button.css';

export default {
    title: 'Components/Button/Outline Button',
    tags: ['autodocs']
  };
  const Template = ({ state, ...args }) => {
    return Button.createButton({ state, ...args });
  }
  
  export const Default = Template.bind({});
  Default.args = {
    state: "default",
    label: "Default Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Primary = Template.bind({});
  Primary.args = {
    state: "outline primary",
    label: "Primary Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Success = Template.bind({});
  Success.args = {
    state: "outline success",
    label: "Success Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Danger = Template.bind({});
  Danger.args = {
    state: "outline danger",
    label: "Danger Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Warning = Template.bind({});
  Warning.args = {
    state: "outline warning",
    label: "Warning Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Info = Template.bind({});
  Info.args = {
    state: "outline info",
    label: "Info Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Light = Template.bind({});
  Light.args = {
    state: "outline light",
    label: "Light Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Dark = Template.bind({});
  Dark.args = {
    state: "outline dark",
    label: "Dark Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  