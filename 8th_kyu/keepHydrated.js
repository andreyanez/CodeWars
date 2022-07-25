// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


/*
P: Float value, could be negative, empty or null, or string
R: The result of multiplying 0.5 litres with the
amount of hours given, it should be rounded
E:
    time = 2 ----> litres = 1
    time = 6.7---> litres = 3
    time = 11.8--> litres = 5
P:
    function litres (hours)
        if there's no value, is negative or null
            throw error
        else
            multiply hours by 0.5, then round it

        return litres of water
*/


//Answer
    function litres(time){
        if (time < 0 || time == null || typeof time != 'number') {
            console.log('Value is invalid');
        }
        else{
            time = Math.floor(time*=0.5)
            return time
        }
        
    }