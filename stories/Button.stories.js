import { createButton } from "./Button";
import './assets/css/button.css';

export default {
    title: 'Components/Button'
  };
  const Template = ({ state, ...args }) => {
    return createButton({ state, ...args });
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
  
  export const Outline_Primary = Template.bind({});
  Outline_Primary.args = {
    state: "outline primary",
    label: "Outline Primary Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Outline_Success = Template.bind({});
  Outline_Success.args = {
    state: "outline success",
    label: "Outline Success Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Outline_Danger = Template.bind({});
  Outline_Danger.args = {
    state: "outline danger",
    label: "Outline Danger Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Outline_Warning = Template.bind({});
  Outline_Warning.args = {
    state: "outline warning",
    label: "Outline Warning Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Outline_Info = Template.bind({});
  Outline_Info.args = {
    state: "outline info",
    label: "Outline Info Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Outline_Light = Template.bind({});
  Outline_Light.args = {
    state: "outline light",
    label: "Outline Light Button",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };
  
  export const Outline_Dark = Template.bind({});
  Outline_Dark.args = {
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
  
  export const DiagonalSwipe = Template.bind({});
  DiagonalSwipe.args = {
    state: "diagonal-swipe",
    label: "<span>Diagonal Swipe Button</span>",
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
  
  export const Icon_Only = Template.bind({});
  Icon_Only.args = {
    state: "icon-only",
    label: "<i class='fi fi-sr-heart'></i>",
    backgroundColor: "",
    border: "",
    borderColor: "",
  };