import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Product from "@/components/Product.vue";

describe("Product.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Product, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
