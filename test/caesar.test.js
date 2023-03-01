// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe ("caesar", () => {
    it("should  return false if shift value is not present", () => {
        const input = "thinkful";
        const actual = caesar(input);
        expect(actual).to.be.false;
    });
    it("should return false if shift value is greater than 25", () => {
        const input = "thinkful";
        const shift = 26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("should return false if shift value is less than -25", () => {
        const input = "thinkful";
        const shift = -99;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("should encode a given string by a given shift value", () => {
        const input = "thinkful";
        const shift = 3;
        const expected = "wklqnixo";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should pass through non-letter characters", () => {
        const input = "bpqa%qa-i_amkzmb umaaiom!";
        const shift = -8;
        const expected = "this%is-a_secret message!";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should encode a pangram", () => {
        const input = "Veldt jynx grimps waqf zho buck";
        const shift = 14;
        const expected = ("jszrh xmbl ufwadg koet nvc piqy");
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should decode a pangram", () => {
        const input = "jszrh xmbl ufwadg koet nvc piqy";
        const shift = 14;
        const expected = ("veldt jynx grimps waqf zho buck");
        const actual = caesar(input, shift, false);
        expect(actual).to.equal(expected);
    });
    it("should encode a pangram with negative shift", () => {
        const input = "Veldt jynx grimps waqf zho buck";
        const shift = -14;
        const expected = ("hqxpf vkzj sduybe imcr lta ngow");
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should decode a pangram with a negative shift", () => {
        const input = "hqxpf vkzj sduybe imcr lta ngow";
        const shift = -14;
        const expected = ("veldt jynx grimps waqf zho buck");
        const actual = caesar(input, shift, false);
        expect(actual).to.equal(expected);
    });
});