# Morse Code Translator
**Made by Khadijat Oyeleye**

This is a Javascript-based morse code translator made with HTML 5, SCSS, Javascript ES6 and unit tested with Jest.

This project was created in week 5 of the _nology course. The aim was to gain experience with:

1. Test-driven development - writing unit tests then writing functions which passed those tests. 
2. Tech tests - we were given a very limited time to complete this project.

### Test Description
Three main test conditions were created, denoted by the describe blocks - one for testing whether the function written converted single english letters into morse code, another for testing whether the function written converted english words into morse code, and a third for testing whether english sentences were converted into morse code. Example checks were given for each condition - a few random letters for the first test condition, couple of words for the second, and a couple of sentences for the third.

### Tested Function
The function that was tested first split the english word or sentence entered by the user into an array of letters. These were then converted into morse code, creating a new array of individual morse letters. A space was denoted as a slash. These were then joined together to create the morse word or sentence. This function passed all test conditions.

### DOM Description
This converted the english input that was given into a morse output and displayed it on the page for the user after the submit button was pressed. It cleared both input boxes after the user clicked reset.

### Known Bugs
There are no known bugs as of 23/11/21.

### Summary
Overall, I am happy that I managed to create and design a working translator in the very limited time that was given to us, especially in comparison to previous projects. In the future, I would like to add morse translations for punctuation.