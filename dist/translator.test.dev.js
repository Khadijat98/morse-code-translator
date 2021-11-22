"use strict";

var _globals = require("@jest/globals");

var _translator = require("./translator.js");

// Need to translate english into morse code
(0, _globals.describe)("Translate single letters to morse code", function () {
  (0, _globals.it)("should translate a to .-", function () {
    var result = (0, _translator.translateEnglishToMorse)("a");
    (0, _globals.expect)(result).toBe(".-");
  });
  (0, _globals.it)("should translate e to .", function () {
    var result = (0, _translator.translateEnglishToMorse)("e");
    (0, _globals.expect)(result).toBe(".");
  });
  (0, _globals.it)("should translate m to --", function () {
    var result = (0, _translator.translateEnglishToMorse)("m");
    (0, _globals.expect)(result).toBe("--");
  });
  (0, _globals.it)("should translate o to ---", function () {
    var result = (0, _translator.translateEnglishToMorse)("o");
    (0, _globals.expect)(result).toBe("---");
  });
  (0, _globals.it)("should translate v to ...-", function () {
    var result = (0, _translator.translateEnglishToMorse)("v");
    (0, _globals.expect)(result).toBe("...-");
  });
}); // Can then try adding some common phrases (short words)
// Describe block for short words

(0, _globals.describe)("Translate short words to morse code", function () {
  (0, _globals.it)("should translate hello into .... . .-.. .-.. ---", function () {
    var result = (0, _translator.translateEnglishToMorse)("hello");
    (0, _globals.expect)(result).toBe(".... . .-.. .-.. ---");
  });
  (0, _globals.it)("should translate bye into -... -.-- .", function () {
    var result = (0, _translator.translateEnglishToMorse)("bye");
    (0, _globals.expect)(result).toBe("-... -.-- .");
  });
}); // Maybe add some more complex things like punctuation i.e. invalid inputs (extra)
// 1. Write tests
// 2. Create functions for tests
// 3. Add HTML/SCSS
// 4. Add DOM elements in JS