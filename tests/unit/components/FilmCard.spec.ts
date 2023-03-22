import { mount } from "@vue/test-utils";
import FilmCard from "@/components/FilmCard.vue";

describe("FilmCard.vue", () => {
  let defaultProps: InstanceType<typeof FilmCard>;

  beforeEach(() => {
    defaultProps = {
      url: "some url",
      title: "title",
      genres: ["genre1", "genre2"],
      year: "1992",
      id: 10,
    };
  });
  it("renders with correct title", () => {
    const wrapper = mount(FilmCard, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find(".title").text()).toMatch(defaultProps.title);
  });

  it("renders with correct genres", () => {
    const wrapper = mount(FilmCard, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find(".year").text()).toMatch(defaultProps.year);
  });

  it("renders with correct text", () => {
    const wrapper = mount(FilmCard, {
      props: {
        ...defaultProps,
      },
    });
    expect(wrapper.find(".genres").text()).toMatch(
      defaultProps.genres.join(", ")
    );
  });
});
