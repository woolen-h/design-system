import * as Button from "./Button";
import './assets/css/button.css';

export default {
    title: 'Button/Outline Button'
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
    label: "Outline Warning Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Info = Template.bind({});
  Info.args = {
    state: "outline info",
    label: "Outline Info Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Light = Template.bind({});
  Light.args = {
    state: "outline light",
    label: "Outline Light Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Dark = Template.bind({});
  Dark.args = {
    state: "outline dark",
    label: "Outline Dark Button",
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
  
  export const Border_01 = Template.bind({});
  Border_01.args = {
    state: "border-01",
    label: "<svg><rect x='0' y='0' fill='none' width='100%' height='100%'><p>Border Button 01</p></rect></svg>",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Border_02 = Template.bind({});
  Border_02.args = {
    state: "border-02",
    label: "Border Button 02",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Border_03 = Template.bind({});
  Border_03.args = {
    state: "border-03",
    label: "Border Button 03",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Border_04 = Template.bind({});
  Border_04.args = {
    state: "border-04",
    label: "Border Button 04",
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
  