# Kata: Valid Braces


# Description

This kata is from [codewars](https://www.codewars.com/kata/valid-braces).

Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples:

```js
validBraces( "(){}[]" ) => returns true
validBraces( "(}" ) => returns false
validBraces( "[(])" ) => returns false
validBraces( "([{}])" ) => returns true
```


# Solution - normal

The code is in `lib/index.js`.

The rule is, the braces can be nested, and every open brace has a corresponding closed brace.

The common solution is to use a stack. We iterate the whole string from left to right. When the brace is an open brace, we push it to the stack. When the brace is a closed brace, we pops the last open brace from stack and see if they are matched. If no then the string is invalid. If yes we continue the iteration.

After the iteration, the stack should be empty, that means all open braces has a closed one. if not the string is also invalid.


# Solution - clever

The code is in `lib/clever.js`.

Because the whole string is combined with several brace pairs (can be nested). That means a valid string must have substring like `()`, `[]`, and `{}`. They're the most inner brace pairs. We can check if those substring exist, if so we remove them, then the outer brace pairs become the inner brace pairs. We follows the search & replace operation unless there's no match. Finally, if the result string is blank, it's valid.
