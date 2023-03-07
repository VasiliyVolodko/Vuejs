import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  title: "Example/ButtonComponent",
  component: ButtonComponent,
};

const Template = (args) => ({
  components: { ButtonComponent },

  setup() {
    return { args };
  },

  template: '<ButtonComponent v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  active: false,
  text: "Test Text",
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  text: "Test Text",
};
