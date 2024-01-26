import * as Alert from "./Alert";
import './assets/css/alert.css';

export default {
    title: 'Alert/Icon Alert'
  };
  const Template = ({ state, ...args }) => {
    return Alert.DefaultAlert({ state, ...args });
  }

  export const Icon_Default = Template.bind({});
  Icon_Default.args = {
    state: "icon",
  };

  export const Icon_Primary = Template.bind({});
  Icon_Primary.args = {
    state: "icon-primary",
  };

  export const Icon_Success = Template.bind({});
  Icon_Success.args = {
    state: "icon-success",
  };

  export const Icon_Danger = Template.bind({});
  Icon_Danger.args = {
    state: "icon-danger",
  };

  export const Icon_Warning = Template.bind({});
  Icon_Warning.args = {
    state: "icon-warning",
  };

  export const Icon_Info = Template.bind({});
  Icon_Info.args = {
    state: "icon-info",
  };

  export const Icon_Dark = Template.bind({});
  Icon_Dark.args = {
    state: "icon-dark",
  };

  export const Icon_Light = Template.bind({});
  Icon_Light.args = {
    state: "icon-light",
  };