import {
  expect
} from "chai";
import {
  shallowMount
} from "@vue/test-utils";
import Product from "@/components/ProductAdd.vue";

function randString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

describe("ProductAdd.vue", () => {
  it("Adds new product", () => {
    const wrapper = shallowMount(Product);
    const texts = wrapper.findAll('input[type=text]');
    const numbers = wrapper.findAll('input[type=number]');
    texts.forEach(element => {
      element.setValue(randString(20));
    });

    numbers.forEach(element => {
      element.setValue(Math.floor(Math.random() * 50));
    })

  });
});