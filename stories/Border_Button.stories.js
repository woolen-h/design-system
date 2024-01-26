import * as Button from "./Button";
import './assets/css/button.css';

export default {
    title: 'Components/Button/Border Button',
    tags: ['autodocs']
  };
  const Template = ({ state, ...args }) => {
    return Button.createButton({ state, ...args });
  }
    
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
  

  export const Switch = Button.switchButton;
