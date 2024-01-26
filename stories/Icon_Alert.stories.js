import * as Alert from "./Alert";
import './assets/css/alert.css';

export default {
    title: 'Components/Alert/Icon Alert'
  };
  const Template = ({ state, ...args }) => {
    return Alert.IconAlert({ state, ...args });
  }

  export const Icon_Default = Template.bind({});
  Icon_Default.args = {
    state: "",
    icon_name: "fi fi-ss-bell",
  };

  export const Icon_Primary = Template.bind({});
  Icon_Primary.args = {
    state: "primary",
    icon_name: "fi fi-ss-interrogation",
  };

  export const Icon_Success = Template.bind({});
  Icon_Success.args = {
    state: "success",
    icon_name: "fi fi-ss-check-circle",
  };

  export const Icon_Danger = Template.bind({});
  Icon_Danger.args = {
    state: "danger",
    icon_name: "fi fi-ss-light-emergency",
  };

  export const Icon_Warning = Template.bind({});
  Icon_Warning.args = {
    state: "warning",
    icon_name: "fi fi-ss-shield-exclamation",
  };

  export const Icon_Info = Template.bind({});
  Icon_Info.args = {
    state: "info",
    icon_name: "fi fi-ss-info",
  };

  export const Icon_Light = Template.bind({});
  Icon_Light.args = {
    state: "light",
    icon_name: "fi fi-ss-bell",
  };

  export const Icon_Dark = Template.bind({});
  Icon_Dark.args = {
    state: "dark",
    icon_name: "fi fi-ss-bell",
  };