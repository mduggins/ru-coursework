var word = prompt("Please give me a word, any word?")

alert("This is the length of the word: " + word.length +".\n" + "This is the second character in the word: " + word.charAt(1) +".\n" + "This is the word in all lower case: " + word.toLowerCase() +".\n" + "This is the word in all upper case: " + word.toUpperCase() + ".\n" + "Example: I " + word + "I can land a job after RefactorU.\n" + "SubWord: " + word.substring(1, 4))