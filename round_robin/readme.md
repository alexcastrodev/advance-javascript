# Introduction

Working with closures

# Exercise

You have been given an array of programming languages, and you want to create a program that will help you learn them in order. Write a program that uses the example function to loop through the array of programming languages and print them out one at a time, starting with the first language and wrapping around to the beginning once it reaches the end.

# Instructions

```javascript
const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby']

function example(array, index = 0) {
    // complete with your implementation
}

function printLanguages(languages) {
  const getNextLanguage = example(languages);

  for (let i = 0; i < languages.length; i++) {
    console.log(getNextLanguage());
  }
}

printLanguages(languages);
```

# Expected Output:

JavaScript

Python

Java

C++

Ruby

JavaScript