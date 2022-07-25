/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

P: Integer, could be negative
R: String 'Even' if integer is even and 'Odd' if integer is odd
E:
    2 => even
    1 => odd
    0 => even
    0 => odd
P:
    function
        if number is odd
            return 'Event'
        else 
            return 'odd

*/


//Answer
    const even_or_odd = (number) =>{
        // new concept: bitwise operators
        // https://www.w3schools.com/js/js_bitwise.asp
        return (number & 1) ? 'Even' : 'Odd'
    }