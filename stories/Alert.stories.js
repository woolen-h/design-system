import { createAlert } from "./Alert";
import './assets/css/alert.css';

export default {
    title: 'Components/Alert'
  };
  const Template = ({ state, ...args }) => {
    return createAlert({ state, ...args });
  }

  export const Default = Template.bind({});
  Default.args = {
    state: "default",
  };

  export const Primary = Template.bind({});
  Primary.args = {
    state: "primary",
  };

  export const Success = Template.bind({});
  Success.args = {
    state: "success",
  };

  export const Danger = Template.bind({});
  Danger.args = {
    state: "danger",
  };

  export const Warning = Template.bind({});
  Warning.args = {
    state: "warning",
  };

  export const Info = Template.bind({});
  Info.args = {
    state: "info",
  };

  export const Light = Template.bind({});
  Light.args = {
    state: "light",
  };

  export const Dark = Template.bind({});
  Dark.args = {
    state: "dark",
  };