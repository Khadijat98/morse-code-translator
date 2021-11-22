// Need to translate english into morse code

import {it, expect, describe} from "@jest/globals"
import {translate} from "./translator.js"

// Start by translating letters (priority)
// Describe block for the letters to group them together
describe ("Translate single letters to morse code", () => {
  it("should translate a to .-", () => {
    const result = translate("a");
    expect(result).toBe(".-");
  })
  it("should translate e to .", () => {
    const result = translate("e");
    expect(result).toBe(".");
  })
  it("should translate m to --", () => {
    const result = translate("m");
    expect(result).toBe("--");
  })
  it("should translate o to ---", () => {
    const result = translate("o");
    expect(result).toBe("---");
  })
  it("should translate v to ...-", () => {
    const result = translate("v");
    expect(result).toBe("...-");
  })
})

// Can then try adding some common phrases (short words)
  // break word into letters
  // for each word find the translation
  // string the words back together
// Maybe add some more complex things like punctuation, spaces (extra)
// 1. Write tests
// 2. Create functions for tests
// 3. Add HTML/SCSS
// 4. Add DOM elements in JS