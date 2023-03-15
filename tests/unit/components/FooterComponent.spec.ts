import { mount } from "@vue/test-utils";
import FooterComponent from "@/components/FooterComponent.vue";

describe("FooterComponent.vue", () => {
  it("renders with correct text", () => {
    const wrapper = mount(FooterComponent)
    expect(wrapper.find('h2').text()).toMatch("netflixroulette");
  });
});
