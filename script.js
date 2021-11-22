import { translateEnglishToMorse } from "./translator.js";

const inputEnglishWord = document.querySelector(".english-word");
const submitEnglishWord = document.querySelector(".submit-btn");
const receiveMorseTranslation = document.querySelector(".morse-translation");

submitEnglishWord.addEventListener("click", () => {
  const englishInput = inputEnglishWord.value;
  const morseTranslation = translateEnglishToMorse(englishInput);
  receiveMorseTranslation.innerHTML=`${morseTranslation}`;
})