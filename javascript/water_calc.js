//this is the calculation for the water 
//total of gallons = x(# of people) * (y # of days)
//1 gallons per person per day

function waterCalc (people, days) { // taking the two parameter multiply the total of gallons needed
    return people * days;
}

//function to get the user info in the console log
function calculateWater() {
    const people = parseInt(prompt("Enter how many people in your household:"));
    // created a var to store the data and using parseInt to convert a string to an int
    //to preform calculations the promt recives the data as a sting even though there are numbers
    const days = parseInt(prompt("Enter how many days are you planning for?:"))

    //conditional statement 
    //if var is not a number and if the number is less then zero
    if (isNaN(people)|| isNaN(people) || people < 0 || days < 0 ){
        console.log ("People enter valid positive number for people and days.")
        return;
    }
    const gallons = waterCalc(people, days);
    console.log(`You need ${gallons} gallons of water for ${people} people over ${days} days.`);
    
}

//run the function
calculateWater();