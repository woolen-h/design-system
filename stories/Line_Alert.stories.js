import * as Alert from "./Alert";
import './assets/css/alert.css';

export default {
    title: 'Alert/Line Alert'
  };
  const Template = ({ state, ...args }) => {
    return Alert.DefaultAlert({ state, ...args });
  }

  export const Line_Default = Template.bind({});
  Line_Default.args = {
    state: "icon-line",
  };

  export const Line_Primary = Template.bind({});
  Line_Primary.args = {
    state: "icon-line primary",
  };

  export const Line_Success = Template.bind({});
  Line_Success.args = {
    state: "icon-line success",
  };

  export const Line_Danger = Template.bind({});
  Line_Danger.args = {
    state: "icon-line danger",
  };

  export const Line_Warning = Template.bind({});
  Line_Warning.args = {
    state: "icon-line warning",
  };

  export const Line_Info = Template.bind({});
  Line_Info.args = {
    state: "icon-line info",
  };

  export const Line_Dark = Template.bind({});
  Line_Dark.args = {
    state: "icon-line dark",
  };

  export const Line_Light = Template.bind({});
  Line_Light.args = {
    state: "icon-line light",
  };