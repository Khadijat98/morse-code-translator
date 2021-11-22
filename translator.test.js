// Need to translate english into morse code

import {it, expect, describe} from "@jest/globals"
import {translateEnglishToMorse} from "./translator.js"

// Start by translating letters (priority)
// Describe block for the letters to group them together
describe ("Translate single letters to morse code", () => {
  it("should translate a to .-", () => {
    const result = translateEnglishToMorse("a");
    expect(result).toBe(".-");
  })
  it("should translate e to .", () => {
    const result = translateEnglishToMorse("e");
    expect(result).toBe(".");
  })
  it("should translate m to --", () => {
    const result = translateEnglishToMorse("m");
    expect(result).toBe("--");
  })
  it("should translate o to ---", () => {
    const result = translateEnglishToMorse("o");
    expect(result).toBe("---");
  })
  it("should translate v to ...-", () => {
    const result = translateEnglishToMorse("v");
    expect(result).toBe("...-");
  })
})

// Can then try adding some common phrases (short words)
// Describe block for short words
describe ("Translate short words to morse code", () => {
  it("should translate hello into .... . .-.. .-.. ---", () => {
    const result = translateEnglishToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  })

  it("should translate bye into -... -.-- .", () => {
    const result = translateEnglishToMorse("bye");
    expect(result).toBe("-... -.-- .");
  })
})

// Maybe add some more complex things like punctuation i.e. invalid inputs (extra)
// 1. Write tests
// 2. Create functions for tests
// 3. Add HTML/SCSS
// 4. Add DOM elements in JS