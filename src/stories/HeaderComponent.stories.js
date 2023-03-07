import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  title: "Example/HeaderComponent",
  component: HeaderComponent,
};

const Template = (args) => ({
  components: { HeaderComponent },

  setup() {
    return { args };
  },

  template: '<HeaderComponent v-bind="args" />',
});

export const Primary = Template.bind({});
