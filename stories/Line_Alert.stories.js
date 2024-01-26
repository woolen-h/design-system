import * as Alert from "./Alert";
import './assets/css/alert.css';

export default {
    title: 'Alert/Line_Alert'
  };
  const Template = ({ state, ...args }) => {
    return Alert.DefaultAlert({ state, ...args });
  }

  export const Line_Default = Template.bind({});
  Line_Default.args = {
    state: "line",
  };

  export const Line_Primary = Template.bind({});
  Line_Primary.args = {
    state: "line primary",
  };

  export const Line_Success = Template.bind({});
  Line_Success.args = {
    state: "line success",
  };

  export const Line_Danger = Template.bind({});
  Line_Danger.args = {
    state: "line danger",
  };

  export const Line_Warning = Template.bind({});
  Line_Warning.args = {
    state: "line warning",
  };

  export const Line_Info = Template.bind({});
  Line_Info.args = {
    state: "line info",
  };

  export const Line_Dark = Template.bind({});
  Line_Dark.args = {
    state: "line dark",
  };

  export const Line_Light = Template.bind({});
  Line_Light.args = {
    state: "line light",
  };