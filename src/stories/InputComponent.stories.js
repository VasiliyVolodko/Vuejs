import InputComponent from "../components/InputComponent.vue";

export default {
  title: "Example/Input",
  component: InputComponent,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: "text",
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { InputComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<InputComponent v-bind="args" />',
});

export const Primary = Template.bind({});
