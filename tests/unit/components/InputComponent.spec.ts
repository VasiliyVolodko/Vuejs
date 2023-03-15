import { mount } from "@vue/test-utils";
import InputComponent from "@/components/InputComponent.vue";

describe("InputComponent.vue", () => {
  let defaultProps: InstanceType<typeof InputComponent>

  beforeEach(() => {
    defaultProps = {
      type: "text",
      disabled: false,
      placeholder: "placeholder",
      width: "100px",
      height: "50px",
    }
  })
  it("renders with correct placeholder", () => {
    const wrapper = mount(InputComponent, {
      props: {
        ...defaultProps
      },
    });
    const input = wrapper.find("input");
    input.element.placeholder
    expect(input.element.placeholder).toBe(defaultProps.placeholder);
  });

  it("inputs corrects value", async () => {
    const wrapper = mount(InputComponent, {
      props: {
        ...defaultProps
      },
    });
    const input = wrapper.find("input");
    await input.setValue('hello')
    expect(input.element.value).toBe("hello");
  });
});
