module.exports  = {
    checkPalindrome: function (input) {
        if(input === undefined){
            throw new Error ('Introduce un texto correcto!');
        }
        return input.trim().length > 0 && input.split('').reverse().join('') === input;
    },
    checkSum: function(a,b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error ('Debes introducir números');
        }
        return a + b;
    },
    fizzBuzz: function (i) {
        if(isNaN(i)) {
            throw new Error ('Debes introducir un número');
        }
        if (i % 15 == 0)
            return "FizzBuzz";
        else if (i % 3 == 0)
            return "Fizz";
        else if (i % 5 == 0)
            return "Buzz";
        else
            return i
    }
}
