import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/HeaderComponent.vue";
const mockRoute = {
  params: {
    id: 1
  }
}
const mockRouter = {
  push: jest.fn()
}
describe("HeaderComponent.vue", () => {
  it("renders with correct text", () => {
    const wrapper = mount(HeaderComponent, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })
    expect(wrapper.find('h1').text()).toMatch("netflixroulette");
  });

  it("should call router on click h1", async () => {
    const wrapper = mount(HeaderComponent, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })
    const h1 = wrapper.find('h1');
    await h1.trigger("click")
    expect(mockRouter.push).toHaveBeenCalled();
  });
});
