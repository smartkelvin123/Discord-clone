var validateDateForAge = function (data) {
    var person = data(); // Added 'var' to declare 'person' as a local variable
    console.log(person);
    if (person.age < 1 || person.age > 99) {
        return true;
    } else {
        return false;
    }
};

var errorHandleForage = function (error) {
    console.log("Error while processing age");
};

function parseRequest(data, validateData, errorHandler) {
    var error = validateData(data);
    if (!error) {
        console.log("No errors");
    } else {
        errorHandler();
    }
}

var generateDataForScientist = function () {
    return {
        name: "Albert Einstein",
        age: Math.floor(Math.random() * (100 - 1)) + 1, // Corrected 'math' to 'Math'
    };
};

var generateDataForComputer = function () {
    return {
        name: "Nikola Tesla",
        age: Math.floor(Math.random() * (100 - 1)) + 1, // Corrected 'math' to 'Math'
    };
};

parseRequest(generateDataForScientist, validateDateForAge, errorHandleForage);
parseRequest(generateDataForComputer, validateDateForAge, errorHandleForage);
