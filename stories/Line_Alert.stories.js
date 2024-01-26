import * as Alert from "./Alert";
import './assets/css/alert.css';

export default {
    title: 'Components/Alert/Line Alert',
    tags: ['autodocs']
  };
  const Template = ({ state, ...args }) => {
    return Alert.DefaultAlert({ state, ...args });
  }

  export const Default = Template.bind({});
  Default.args = {
    state: "line",
  };

  export const Primary = Template.bind({});
  Primary.args = {
    state: "line primary",
  };

  export const Success = Template.bind({});
  Success.args = {
    state: "line success",
  };

  export const Danger = Template.bind({});
  Danger.args = {
    state: "line danger",
  };

  export const Warning = Template.bind({});
  Warning.args = {
    state: "line warning",
  };

  export const Info = Template.bind({});
  Info.args = {
    state: "line info",
  };

  export const Light = Template.bind({});
  Light.args = {
    state: "line light",
  };

  export const Dark = Template.bind({});
  Dark.args = {
    state: "line dark",
  };