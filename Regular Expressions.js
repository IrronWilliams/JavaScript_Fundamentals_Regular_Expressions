/*
Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they 
help programmers match, search, and replace text.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
and returns true or false if your pattern finds something or not.

*/

let testStr = "bestCodeSchool"
let testRegex = /Code/ //regex searches for a literal match of the string 'Code'
testRegex.test(testStr)
// Returns true

//Any other forms of "William" will not match. The regex /William/ will not match "william" or "WILLIAM".
let testStr2 = "Hello, my name is William."
let testRegex2 = /William/
testRegex2.test(testStr2)
// Returns true

//You can search for multiple patterns using the alternation or OR operator: |
let petString = "William has a pet owl"
let petRegex = /dog|owl|bird|fish/ //operator matches patterns either before or after it
let result = petRegex.test(petString)
console.log(result)

//You can use the the i flag to match both upper and lowercase letters by appending it to the regex
let myString = "happyTuesday"
let htRegex = /happytuesday/i // This regex can match the strings "HAPPYTuesday", "haPPYtuesday", and "happytuesday".
let result2 = htRegex.test(myString)
console.log(result2)

//You can also extract the actual matches you found with the .match() method.
//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses
"Hello, World!".match(/Hello/)
// Returns ["Hello"]

let ourStr = "Regular expressions"
let ourRegex = /expressions/
ourStr.match(ourRegex)
// Returns ["expressions"]

//To search or extract a pattern more than once, you can use the g flag.
let strRepeat = "Repeat, Repeat, Repeat"
let repeatRegex = /Repeat/g
strRepeat.match(repeatRegex)
// Returns ["Repeat", "Repeat", "Repeat"]

//Finding and extracting both occurrences of twinkle
let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /Twinkle/gi // can use multiple flags on regex.  g extracts multiple patterns, i matches upper and lower cases
let result3 = twinkleStar.match(starRegex) // Change this line
console.log(result3)

//Using Wildcard character /./ also called dot and period. Useful when don't know the exact characters in a pattern. 
let humStr = "I'll hum a song"
let hugStr = "Bear hug"
let huRegex = /hu./
huRegex.test(humStr) // Returns true
huRegex.test(hugStr) // Returns true

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/ // will match strings "run", "sun", "fun", "pun", "nun", and "bun"
let result4 = unRegex.test(exampleStr)
console.log(result4)

//You can search for a literal pattern with some flexibility with character classes. Character classes allow 
//you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
//To match "bag", "big", and "bug" but not "bog". Can create the regex /b[aiu]g/. 
//The [aiu] is the character class that will only match the characters "a", "i", or "u".
let bigStr = "big"
let bagStr = "bag"
let bugStr = "bug"
let bogStr = "bog"
let bgRegex = /b[aiu]g/
bigStr.match(bgRegex) // Returns ["big"]
bagStr.match(bgRegex) // Returns ["bag"]
bugStr.match(bgRegex) // Returns ["bug"]
bogStr.match(bgRegex) // Returns null

//Finding vowels in a string. Also matching upper and lower case vowels
let quoteSample = "BEware of bugs in the Above code; I have only proved it correct, nOt tried it."
let vowelRegex = /[aeiou]/gi // 
let result5 = quoteSample.match(vowelRegex) // 
console.log(result5)

//Matching Letters of the Alphabet. Inside a character set, you can define a range of characters to match using a 
//hyphen character: -.  To match lowercase letters a through e you would use [a-e].
let catStr = "cat"
let batStr = "bat"
let matStr = "mat"
let bgRegex2 = /[a-e]at/
catStr.match(bgRegex2) // Returns ["cat"]
batStr.match(bgRegex2) // Returns ["bat"]
matStr.match(bgRegex2) // Returns null

//Matching all letters in the alphabet in the string 
let quoteSample2 = "The Quick brown fox jumped over the fat dog."
let alphabetRegex = /[a-z]/ig //g extracts multiple patterns, i matches upper and lower cases
let result6 = quoteSample2.match(alphabetRegex)
console.log(result6)

//Can also use the hyphen (-) to match a range of characters. /[0-5]/ matches any number between 0 and 5, 
//including the 0 and 5. Can also, combine a range of letters and numbers in a single character set.
let jennyStr = "Jenny8675309"
let myRegex = /[a-z0-9]/ig
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex)
console.log(myRegex)

//Creating a regex that matches a range of letters between h and s and range of numbers between 2-6. 
let quoteSample3 = "Blueberry 3.141592653s are delicious."
let myRegex2 = /[h-s2-6]/gi // g = extract multiple patters, i = matches upper and lower case
let result7 = quoteSample3.match(myRegex2) 
console.log(result7)

//Negated character sets allows you to create a set of characters that you do not want to match. 
//To create a negated character set, you place a caret character (^) after the opening bracket and before the 
//characters you do not want to match. /[^aeiou]/gi matches all characters that are not a vowel. 
//Characters like ., !, [, @, / and white space are matched.  
//The negated vowel character set only excludes the vowel characters.

//Creating a regex that matches all characters that are not vowels or numbers 
let quoteSample4 = "3 blind mice."
let myRegex4 = /[^aeiou0-9]/gi 
let result8 = quoteSample.match(myRegex)
console.log(result8)
