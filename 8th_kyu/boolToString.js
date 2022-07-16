// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


/*
    P: boolean, always valid
    R: String 'true' or 'false' dependeing of the boolean
    E:
        true = 'true'
        false = 'false'
    P:
        func
            check if statement is true
                return 'true'
            else
                return 'false
*/


//Answer    
    const boolToString = b =>{
        return !!b ? 'true' : 'false'
    }

    boolToString(false)