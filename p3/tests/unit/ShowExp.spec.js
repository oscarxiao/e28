import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ShowExp from "@/components/ShowExp.vue";

describe("ShowExp.vue", () => {
  it("shows an experiment", () => {
    let exp = {
      name: "eOX1",
      description: "Regular 369AM MIRA",
      pepA: 5000,
      pepB: 6000,
    };
    const wrapper = shallowMount(ShowExp, {
      propsData: { exp },
    });
    expect(wrapper.text()).to.include(exp.name);
    let foundExp = wrapper.find("[data-test='unit-test-showexp']").exists();
    expect(foundExp).to.equal(true);
  });
});
