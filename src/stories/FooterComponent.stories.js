import FooterComponent from "../components/FooterComponent.vue";

export default {
  title: "Example/FooterComponent",
  component: FooterComponent,
};

const Template = (args) => ({
  components: { FooterComponent },

  setup() {
    return { args };
  },

  template: '<FooterComponent v-bind="args" />',
});

export const Primary = Template.bind({});
