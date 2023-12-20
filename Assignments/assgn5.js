// 7. Write a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized.

//    **Example:**
//    ```javascript

//     function capitalizeFirstLetter(word){
//         let first_ltr=word[0]
//         return first_ltr.toUpperCase()+word.slice(1)
//     }

//    const input = "hello world";
//    const output = capitalizeFirstLetter(input);
//    console.log(output);


// 8. Write a function `countWords` that takes a string as input and returns the number of words in the string.

//    **Example:**
//    ```javascript

//     function countWords(sentence){
//         let total_words = sentence.split(' ')
//         return total_words.length
//     }

//    const input = "This is a sample sentence.";
//    const output = countWords(input);
//    console.log(output)

// 9. Write a function `reverseWords` that takes a string as input and returns the string with its words reversed.

//    **Example:**
//    ```javascript

    function reverseWords(sen){
        let split_words = sen.split(" ")

        let reversed_word=''
        for (let i=split_words.length-1; i>=0; i--){
            reversed_word += split_words[i]+" "
        }
        return reversed_word
    }

   const input = "Hello world";
   const output = reverseWords(input);
   console.log(output);

