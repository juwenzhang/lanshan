import {Jest01} from './Jest.vue';
import {mount} from "@vue/test-utils";

describe("HelloWorld", () => {
    it("renders properly", () => {
        const wrapper = mount(Jest01, { props: { msg: "Hello Jest" } })

        expect(wrapper.text()).toContain("Hello Jest")
    })
})