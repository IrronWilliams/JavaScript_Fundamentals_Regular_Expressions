/*
Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they 
help programmers match, search, and replace text.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
and returns true or false if your pattern finds something or not.

The plus sign + looks for one or more characters
The asterisk * looks for zero or more characters.

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

//To match a character (or group of characters) that appears ONE or more times in a row, you can use the + character.
//The character or pattern has to be present consecutively; repeat one after the other.
// /a+/g would find one match in "abc" and return ["a"]. /a+/g would find a single match in "aabc" and return ["aa"]
// /a+/g would find two matches in "abab" and return ["a", "a"] because there is a b between them, and the a are not consecutive
// /a+/g would not find matches in string "bcd" because there is no "a".
let difficultSpelling = "Mississippi"
let myRegex5 = /s+/ig // finding matches where the s occurs one or more times in the word Mississippi
let result9 = difficultSpelling.match(myRegex5)
console.log(result9)

let crowd = 'P1P2P3P4P5P6CCCP7P8P9'
let reCriminals = /c+/gi //  regex that finds one or C's in a group of letters/numbers. /c/ returns ['C', 'C', 'C']
let matchedCriminals = crowd.match(reCriminals)
console.log(matchedCriminals)

//The * or star method matches characters that occur zero or more times.
let soccerWord = "gooooooooal!"
let gPhrase = "gut feeling"
let oPhrase = "over the moon"
let goRegex = /go*/
soccerWord.match(goRegex) // Returns ["goooooooo"]
gPhrase.match(goRegex) // Returns ["g"]
oPhrase.match(goRegex) // Returns null

//You can use the ? character to change results to lazy matching; the smallest sub-string possible to fit the pattern.
//"titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
// Creating regex to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>"
let text = "<h1>Winter is coming</h1>"
let winterRegex = /<h1>?/
let result11 = text.match(winterRegex)
console.log(result11)

//The ^ (caret) character can be used to search for patterns in specific positions in strings. 
//Specifically, the caret is used to search for patterns at the BEGINNING of strings.
let firstString = "Ricky is first and can be found."
let firstRegex = /^Ricky/
firstRegex.test(firstString)
// Returns true
let notFirst = "You can't find Ricky now."
firstRegex.test(notFirst)
// Returns false

let rickyAndCal = "Cal and Ricky both like racing."
let calRegex = /^Cal/ // finding 'Cal' at the beginning of string rickyAndCal 
let result12 = calRegex.test(rickyAndCal)
console.log(result12)

//You can search the END of strings using the dollar sign character $ at the end of the regex, aka anchor character.
let theEnding = "This is a never ending story"
let storyRegex = /story$/
storyRegex.test(theEnding)
// Returns true
let noEnding = "Sometimes a story will have to end"
storyRegex.test(noEnding)
// Returns false

let caboose = "The last car on a train is the caboose"
let lastRegex = /caboose$/ // using anchor character to match the string caboose at the end of the string
let result13 = lastRegex.test(caboose)
console.log(result13)

/* Shorthand Character Classes: Matching All Letters and Numbers
\w shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. (lower case w)
This character class also includes the underscore character (_).
*/
let longHand = /[A-Za-z0-9_]+/
let shortHand = /\w+/
let numbers = "42"
let varNames = "important_var"
longHand.test(numbers) // Returns true
shortHand.test(numbers) // Returns true
longHand.test(varNames) // Returns true
shortHand.test(varNames) // Returns true

let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi // Using shorthand character class \w to count the number of alphanumeric characters (lower case w) 
let result14 = quoteSample5.match(alphabetRegexV2).length
console.log(result14)

/*Shorthand Character Classes: Matching Everything Except All Letters and Numbers
You can search for the opposite of the \w with \W. This shortcut is the same as [^A-Za-z0-9_]. (upper case W) */
let shortHand2 = /\W/
let numbers2 = "42%"
let sentence = "Coding!"
numbers2.match(shortHand2) // Returns ["%"]
sentence.match(shortHand2) // Returns ["!"]

let quoteSample6 = "The five boxing wizards jump quickly."
let nonAlphabetRegex = /\W/gi //Using shorthand character class \W to count the number of non-alphanumeric characters in quote/string (upper case W)
let result15 = quoteSample6.match(nonAlphabetRegex).length
console.log(result15)

/* Shorthand Character Classes: Matching All Numbers or Digits
The shortcut to look for digit characters is \d. This is equal to the character class [0-9], 
which looks for a single character of any number between zero and nine. (lower case d*/
let movieName = "2001: A Space Odyssey"
let numRegex = /\d/gi // Using shorthand character class \d to count how many digits are in movie titles (lower case d)
let result16 = movieName.match(numRegex).length
console.log(result16)

/*Shorthand Character Classes: Matching All Non-Numbers or Digits
The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], 
which looks for a single character that is not a number between zero and nine. (upper case D*/
let movieName2 = "2001: A Space Odyssey"
let noNumRegex = /\D/gi // Using shorthand character class for non-digits \D to count how many non-digits are in movie titles.
let result17 = movieName2.match(noNumRegex).length
console.log(result17)

/*Biz rules for checking usernames in a database. 
Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. 
A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades"
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i //Approach 1 regex for biz rules
let userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i //Approach 2 regex for biz rules
let result18 = userCheck.test(username)
console.log(result18)

/*
Approach 1
    ^ - start of input
    [a-z] - first character is a letter
    [0-9][0-9]+ - ends with two or more numbers
    | - or
    [a-z]+ - has one or more letters next
    \d* - and ends with zero or more numbers
    $ - end of input
    i - ignore case of input

Approach 2
    ^ - start of input
    [a-z] - first character is a letter
    [0-9]{2,0} - ends with two or more numbers
    | - or
    [a-z]+ - has one or more letters next
    \d* - and ends with zero or more numbers
    $ - end of input
    i - ignore case of input
*/

/*Matching Whitespace:
Can search for whitespace using \s, This pattern not only matches whitespace, but 
also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character 
class [ \r\t\f\n\v]. */
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g
whiteSpace.match(spaceRegex)
// Returns [" ", " "]

let sample = "Whitespace is important in separating words"
let countWhiteSpace = /\s/gi //looking for multiple whitespace characters in a string
let result19 = sample.match(countWhiteSpace)
console.log(result19)

/*Matching Non-whitespace characters:
Can search for non-whitespace using \S.  This pattern will not match whitespace, carriage return, tab, form feed, 
and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v]. */
let whiteSpace2 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g
whiteSpace2.match(nonSpaceRegex).length // Returns 32

let sample2 = "Whitespace is important in separating words"
let countNonWhiteSpace = /\S/g //looking for multiple non-whitespace characters in a string
let result20 = sample2.match(countNonWhiteSpace)
console.log(result20)

/*
Specifying Upper and Lower Number of Matches with Quantify Specifiers:
Can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used 
with curly brackets ({ and }). 
You put two numbers between the curly brackets - for the lower and upper number of patterns.
*/

//Matching only the letter 'a' appearing between 3 and 5 times in the string "ah"; regex = /a{3,5}h/.
let A4 = "aaaah"
let A2 = "aah"
let multipleA = /a{3,5}h/ //regex for the letter a appearing 3 to 5 times in the string ah
multipleA.test(A4) // Returns true
multipleA.test(A2) // Returns false

let ohStr = "Ohhh no"
let ohRegex = /Oh{3,6}\sno/ // regex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's. \s accounts for whitespace'
let result21 = ohRegex.test(ohStr)
console.log(result21)

/*
Specifying only the Lower number of matches with no upper limit:
To only specify the lower number of patterns, keep the first number followed by a comma.
*/
//Matching only the string "hah" with the letter a appearing at least 3 times, 
let A5 = "haaaah"
let A6 = "haah"
let A100 = "h" + "a".repeat(100) + "h"
let multipleA2 = /ha{3,}h/  //specifying 3 as the lower number and no upper limit. match word when letter a appears 3x 
multipleA2.test(A5) // Returns true
multipleA2.test(A6) // Returns false
multipleA2.test(A100) // Returns true

let haStr = "Hazzzzah"
let haRegex = /Haz{4,}ah/ // specifying 4 as the lower number w no upper limit. match word Hazzah when has 4+ letter z's 
let result22 = haRegex.test(haStr)
console.log(result22)

/*
Specifying Exact number of matches:
To specify a certain number of patterns, just have that one number between the curly brackets.
*/
//Matching only the word "hah" with the letter a 3 times, regex would be /ha{3}h/.
let A7 = "haaaah"
let A8 = "haaah"
let A101 = "h" + "a".repeat(100) + "h"
let multipleHA = /ha{3}h/
multipleHA.test(A7) // Returns false
multipleHA.test(A8) // Returns true
multipleHA.test(A101) // Returns false

let timStr = "Timmmmber"
let timRegex = /Tim{4}ber/ // matching word Timber only when it has exactly 4 letter m's
let result23 = timRegex.test(timStr)
console.log(result23)

/*
Checking for All or None:
Can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the 
preceding element. You can think of this symbol as saying the previous element is optional.
*/
//Using the question mark to match both spellings of color. Saying the letter u is optional, so matching color and colour
let american = "color"
let british = "colour"
let rainbowRegex= /colou?r/
rainbowRegex.test(american) // Returns true
rainbowRegex.test(british) // Returns true

let favWord = "favorite"
let favRegex = /favou?rite/ // matching the words favorite and favourite 
let result24 = favRegex.test(favWord)
console.log(result24)

/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 
The rest of the pattern is returned if the negative lookahead part is not present.
*/
let quit = "qu"
let noquit = "qt"
let quRegex= /q(?=u)/ //positive lookahead; make sure u 'is' in the word quit
let qRegex = /q(?!u)/ //negative lookahead; make sure u 'is not' in the word quit
quit.match(quRegex) // Returns ["q"]
noquit.match(qRegex) // Returns ["q"]

//Using lookaheads to check two or more patterns in one string. 
//Password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123"
let checkPass = /(?=\w{3,6})(?=\D*\d)/
checkPass.test(password) // Returns true

/*
Using lookaheads to match passwords criteria:
greater than 5 characters long
do not begin with numbers 
and have two consecutive digits.

This first lookahead is only used to find a string consisting of a certain amount of characters. 
(?=\w{6})  ---> positive lookahead makes sure there are more than 5 characters in password. 

The second lookahead is used to check for 2 consecutive numerical values at the end of the string. (?=\D+\d{2})
^ = beginning of input
?= is positive lookahead.  
\w shortcut is equal to [A-Za-z0-9_] which matches all letters and numbers. Coupled with ?= means w{6} is in password or meets criteria of having more than 5 characters 
\D shortcut is equal to the character class [^0-9] which matches all non-numbers and digits. The ^ means negated. So password does not begin with numbers. 
\d shortcut is equal to the character class [0-9].  +d{2} specifies the exact amount of consecutive numbers i want to appear at end of string
*/
let sampleWord = "astronaut"
let pwRegex = /^(?=\w{6})(?=\D+\d{2})/ 
let result25 = pwRegex.test(sampleWord)
console.log(result25)

/*
Can use () to check for mixed grouping of characters. 
To find either Penguin or Pumpkin in a string, can use the following Regular Expression: /P(engu|umpk)in/g
*/
let testStr3 = "Pumpkin";
let testRegex3 = /P(engu|umpk)in/ //finding Penguin or Pumpkin in a string
testRegex3.test(testStr3) //checking whether in the test string by using the test() method.
// Returns true

//Checks for names Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and makes
//concessions for middle names.     
let myString4 = "Eleanor Roosevelt"
let myRegex6 = /(Franklin|Eleanor).*Roosevelt/i //.*used to allow for middle names.  asterisk * looks for zero or more characters.
let result26 = myRegex6.test(myString4)
console.log(result26)

/*
Can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. 
You put the regex of the pattern that will repeat in between the parentheses. To specify where that repeat string 
will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional 
capture group you use. An example would be \1 to match the first group. 

Using the .match() method on a string will return an array with the string it matches, along with its capture group.
*/
//Matches any word that occurs twice separated by a space:
let repeatStr = "regex regex"
let repeatRegex2 = /(\w+)\s\1/
repeatRegex2.test(repeatStr) // Returns true
repeatStr.match(repeatRegex2) // Returns ["regex regex", "regex"]

/*
for code below, result will match only test test because \1 stands for the same text as most recently matched 
by the 1st capturing group (test).

To literally translate the regex, it would look something like this:
let re = /(test)\s\1/
let literalRe = /test\stest/

let testString = "test test test"
let reRegex = /(test)\s\1/
let result27 = reRegex.test(testString)
console.log(result27)


For code below, result will match whole test test test because:
\1 repeats (test)
\2 repeats (\s)

let testString = "test test test";
let reRegex = /(test)(\s)\1\2\1/;
let result = reRegex.test(testString);
*/

//Using capture groups to match numbers that are repeated only three times in a string, each separated by a space.
let repeatNum = "42 42 42"
let reRegex2 = /^(\d+)\s\1\s\1$/
let result28 = reRegex.test(repeatNum)
console.log(result28)


/*
Can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the 
regex pattern you want to search for. The second parameter is the string to replace the match or a function to 
do something.
 */

let wrongText = "The sky is silver."
let silverRegex = /silver/
wrongText.replace(silverRegex, "blue")
// Returns "The sky is blue

/*Can also access capture groups in the replacement string with dollar signs ($). */
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')
// Returns "Camp Code"


/*Writing a regex using three capture groups that will search for each word in the string "one two three". 
Updating replaceText variable to replace "one two three" with the string "three two one" 
Assigning the result to the result variable. 
*/
let str = "one two three"
let fixRegex = /(\w+)\s(\w+)\s(\w+)/ // regex using 3 capture groups to search for each word in string
let replaceText = "$3 $2 $1" // updating variable to replace one, two three with three, two one
let result29 = str.replace(fixRegex, replaceText)  // assigning result to variable
console.log(result29)

//Removing whitespace from start to end with regex
let hello = "   Hello, World!  "
let wsRegex = /^\s+|\s+$/g 
let result30 = hello.replace(wsRegex, "") 
console.log(result30) //equals "Hello World"


/* Regex Summary:

You can search for multiple patterns using the alternation or OR operator: |
let petRegex = /dog|owl|bird|fish/ //operator matches patterns either before or after it

The i flag matches both upper and lowercase letters, append to the regex
let htRegex = /happytuesday/i // This regex can match the strings "HAPPYTuesday", "haPPYtuesday", and "happytuesday".

The g flag allows you to search or extract a pattern more than once, append to the regex
let strRepeat = "Repeat, Repeat, Repeat"
let repeatRegex = /Repeat/g

Can use both i and g flags together to find/extract multiple patterns and upper/lower case
Finding and extracting both occurrences of twinkle
let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /Twinkle/gi // can use multiple flags on regex.  g extracts multiple patterns, i matches upper and lower cases

The plus sign + looks for one or more characters
The asterisk * looks for zero or more characters.
let A100 = "h" + "a".repeat(100) + "h"  //repeats the letter a 100x

Can extract the actual matches you found with the .match() method.
let ourStr = "Regular expressions"
let ourRegex = /expressions/
ourStr.match(ourRegex)
Returns ["expressions"]

The wildcard character /./ is useful when you don't know the exact characters in a pattern. 
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/ // will match strings "run", "sun", "fun", "pun", "nun", and "bun"

Character classes allows you to define a group of characters want to match by placing them inside [] 
To match "bag", "big", and "bug" but not "bog". Can create the regex /b[aiu]g/. 

To finding vowels in a string. Also matching upper and lower case vowels
let quoteSample = "BEware of bugs in the Above code; I have only proved it correct, nOt tried it."
let vowelRegex = /[aeiou]/gi // 

Can use hyphen character '-' to define a range of characters to match
To match lower case letters a through e;  you would use [a-e]
To match all letters in the alphabet in a string; you would use /[a-z]/ig
To match a range of letters between h and s and range of numbers between 2-6; you would use /[h-s2-6]/gi

Negated character sets allows you to create a set of characters that you do not want to match. 
To create a negated character set, you place a caret character (^) after the opening bracket and before the 
characters you do not want to match. /[^aeiou]/gi matches all characters that are not a vowel. 
To create a regex that matches all characters that are not vowels or numbers; you would use /[^aeiou0-9]/gi 

The + character allows you to match a character/or group of characters that appears one or more times.   
The character or pattern has to be present consecutively; repeat one after the other.
    /a+/g would find one match in "abc" and return ["a"] 
    /a+/g would find a single match in "aabc" and return ["aa"]
    /a+/g would find two matches in "abab" and return ["a", "a"] because there is a b between them, and the a are not consecutive
    /a+/g would not find matches in string "bcd" because there is no "a".

To find matches where the s occurs one or more times in the word Mississippi; you would use /s+/ig 
To find matches for one or more C's in a group of letters/numbers, you would use /c+/gi.    /c/ returns ['C', 'C', 'C']

The * or star method matches characters that occur zero or more times.
To find the letters go in the word "gooooooooal!; use regex go*

The ? character is used when interested in the smallest sub-string possible to fit the pattern.
The word "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Can also use the ? to specify the possible existence of an element. ? checks for zero or one of the 
preceding element. You can think of this symbol as saying the previous element is optional.Can use the question 
mark to match both spellings of color. Saying the letter u is optional, so matching color and colour. 
To match 'color' and 'colour'; regex = /colou?r/
To match "favorite" and "favourite"; regex = /favou?rite/


The ^ (caret) character is used to search for patterns at the BEGINNING of strings.
let firstString = "Ricky is first and can be found."
let firstRegex = /^Ricky/   returns true 

The $ character searches for patterns at the END of strings.  
let theEnding = "This is a never ending story"
let storyRegex = /story$/ returns true

Shorthand Character Classes: 
\w shorthand is equal to [A-Za-z0-9_]; character class matches upper and lowercase letters plus numbers. 
\W shorthand is equal to [^A-Za-z0-9_]; character class matches everything except upper/lowercase letters and numbers. 
\d shorthand is equal to the character class [0-9];  character class matches all numbers or digits
\D shorthand is equal to the character class [^0-9]; character class matches all NON numbers or digits

\s allows for matching whitespace.  \s matches carriage return, tab, form feed, and new line characters. 
You can think of it as similar to the character  class [ \r\t\f\n\v]. 
let sample = "Whitespace is important in separating words"
let countWhiteSpace = /\s/gi //looking for multiple whitespace characters in a string

\S allows for matching non-whitespace characters. This pattern will not match whitespace, carriage return, tab, form feed, 
and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v]. 
let whiteSpace2 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g

Quantity specifiers: upper and lower number of matches. 
To match only the letter 'a' appearing between 3 and 5 times in the string "ah"; regex = /a{3,5}h/.
To match the entire phrase "Oh no" only when it has 3 to 6 letter h's; use /Oh{3,6}\sno/  \s accounts for whitespace'

Quantity specifiers: lower number of matches with no upper limit. 
To match only the string "hah" with the letter a appearing at least 3 times; regex = /ha{3,}h/
To match only the string "Hazzzzah" with the letter z appears 4 times;  regex = /Haz{4,}ah/

Quantity specifiers: specifying exact number of matches. 
To match the word 'hah' with the letter a 3 times; regex = /ha{3}h/.
To match the word 'Timmmmber' only when it has exactly 4 letter m's; regex = /Tim{4}ber/

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
This can be useful when you want to search for multiple patterns over the same string.
There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

A negative lookahead will look to make sure the element in the search pattern is not there. 
A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 

let quRegex= /q(?=u)/ //positive lookahead; make sure u 'is' in the word quit
let qRegex = /q(?!u)/ //negative lookahead; make sure u 'is not' in the word quit
quit.match(quRegex) // Returns ["q"]
noquit.match(qRegex) // Returns ["q"]

Can use () to check for mixed grouping of characters. 
To find either Penguin or Pumpkin in a string, can use the regex /P(engu|umpk)in/g

Can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. 
You put the regex of the pattern that will repeat in between the parentheses. To specify where that repeat string 
will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional 
capture group you use. An example would be \1 to match the first group. 

To use  capture groups to match numbers that are repeated only three times in a string, each separated by a space.
let repeatNum = "42 42 42"
let reRegex2 = /^(\d+)\s\1\s\1$/

Using the .match() method on a string will return an array with the string it matches, along with its capture group.

Can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the 
regex pattern you want to search for. The second parameter is the string to replace the match or a function to 
do something.

let wrongText = "The sky is silver."
let silverRegex = /silver/
wrongText.replace(silverRegex, "blue")
// Returns "The sky is blue


*/