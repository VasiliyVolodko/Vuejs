import FilmCard from "../components/FilmCard.vue";

export default {
  title: "Example/FilmCard",
  component: FilmCard,
};

const Template = (args) => ({
  components: { FilmCard },

  setup() {
    return { args };
  },

  template: '<FilmCard v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg",
  title: "Film Film Film",
  genres: ["Drama"],
  year: "1994",
  id: 15,
};
