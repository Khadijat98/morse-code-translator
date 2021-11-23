import {it, expect, describe} from "@jest/globals"
import {translateEnglishToMorse} from "./translator.js"

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

describe ("Translate words to morse code", () => {
  it("should translate hello into .... . .-.. .-.. ---", () => {
    const result = translateEnglishToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  })

  it("should translate bye into -... -.-- .", () => {
    const result = translateEnglishToMorse("bye");
    expect(result).toBe("-... -.-- .");
  })
})

describe ("Translate phrases to morse code", () => {
  it("should translate hello world into.... . .-.. .-.. --- / .-- --- .-. .-.. -..", () => {
    const result = translateEnglishToMorse("hello world");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  })

  it("should translate i love you into .. / .-.. --- ...- . / -.-- --- ..-", () => {
    const result = translateEnglishToMorse("i love you");
    expect(result).toBe(".. / .-.. --- ...- . / -.-- --- ..-");
  })
})

describe ("Translate punctuation to morse code", () => {
  it("should translate . to .-.-.-", () => {
    const result = translateEnglishToMorse(".");
    expect(result).toBe(".-.-.-");
  })
  it("should translate , to --..--", () => {
    const result = translateEnglishToMorse(",");
    expect(result).toBe("--..--");
  })
  it("should translate : to ---...", () => {
    const result = translateEnglishToMorse(":");
    expect(result).toBe("---...");
  })
})

describe ("Translate invalid symbols to invalid", () => {
  it("should translate ! to invalid input", () => {
    const result = translateEnglishToMorse("!");
    expect(result).toBe("invalid input");
  })
})