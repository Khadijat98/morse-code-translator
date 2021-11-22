import { translateEnglishToMorse } from "./translator";


// User enters english word into input box
// User presses submit, translation is processed
// User receives translation on page

const submitWord = document.querySelector(".submit-btn");
const receiveTranslation = document.querySelector(".morse-translation");

submitWord.addEventListener("click", () => {
  translateWord(word);
  receiveTranslation
})