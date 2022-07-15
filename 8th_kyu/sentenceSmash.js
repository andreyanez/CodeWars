// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

/*
    P: Array with words
    R: String with all words combined, without space at the beginning nor the end
    E:
        ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
        ['forever','learning','people'] => 'forever learning people'
    P:
        function
            join array with a space between
            return string
*/


//Answer
     const smash = (words) =>{
        return words.join(' ')
     }