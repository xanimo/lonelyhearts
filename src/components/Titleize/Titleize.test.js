import { titleize } from './Titleize';

test("to captestalize first letter of each word", () => {
expect(titleize("this is lowcase")).toBe("This Is Lowcase");
});	

test("should append period to leading ttestles", () => {
expect(titleize("dr zhivago")).toBe("Dr. Zhivago");
});	

test("to not change properly cased strings", () => {
expect(titleize("This Is Mixed")).toBe("This Is Mixed");
});	

test("should add periods to properly captestalized ttestle", () => {
expect(titleize("Mr Alexander Pushkin")).toBe("Mr. Alexander Pushkin");
});	

test("to properly case mixed strings", () => {
expect(titleize("this IS mixed and hAS 2 NUMBERS 92.")).toBe("This Is Mixed And Has 2 Numbers 92.");
});	
