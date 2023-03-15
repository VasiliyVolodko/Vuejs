import { mount } from "@vue/test-utils";
import ButtonComponent from "@/components/ButtonComponent.vue";

describe("ButtonComponent.vue", () => {
  let defaultProps: InstanceType<typeof ButtonComponent>

  beforeEach(() => {
    defaultProps = {
      text: "test",
      disabled: false,
      active: false,
      width: "100px",
      height: "80px",
      onClick: jest.fn()
    }
  })
  it("renders button with correct text", () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        ...defaultProps
      },
    });
    expect(wrapper.text()).toMatch(defaultProps.text);
  });

  it("should call onClick prop on click", () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        ...defaultProps
      },
    });
    wrapper.find('button').trigger('click');
    expect(defaultProps.onClick).toBeCalled();
  });

  it("should not call onClick prop on click if disabled is true", () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        ...defaultProps,
        disabled: true
      },
    });
    wrapper.find('button').trigger('click');
    expect(defaultProps.onClick).not.toBeCalled();
  });
});
