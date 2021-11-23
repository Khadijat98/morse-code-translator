# Morse Code Translator
**Made by Khadijat Oyeleye**

This is a Javascript-based morse code translator made with HTML 5, SCSS, Javascript ES6 and unit tested with Jest.

This project was created in week 5 of the _nology course. The aim was to gain experience with:

1. Test-driven development - writing unit tests then writing functions which passed those tests. 
2. Tech tests - we were given a very limited time to complete this project.

### Test Description
Five main test conditions were created, denoted by the describe blocks. The first was for testing whether the function written converted single english letters into morse code, the second for whether english words were converted into morse code, the third for whether english sentences were converted into morse code, the fourth for testing whether punctuation was converted into morse code, and the final condition for testing whether invalid inputs were converted into a string called "invalid input". Example checks were given for each condition - a few random letters for the first test condition, a couple of words for the second, a couple of sentences for the third, a couple of punctuation symbols for the fourth and an example of an invalid input for the last.

### Tested Function
The function that was tested first split the english word or sentence entered by the user into an array of letters. These were then converted into morse code, creating a new array of individual morse letters, including a space and punctuation symbols. These were then joined together to create the morse word or sentence. This function passed all test conditions.

### DOM Description
This converted the english input that was given into a morse output and displayed it on the page for the user after the submit button was pressed. It cleared both input boxes after the user clicked reset.

### Known Bugs
There are no known bugs as of 23/11/21.

### Summary
Overall, I am happy that I managed to create and design a working translator in the very limited time that was given to us, especially in comparison to previous projects.