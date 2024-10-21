// 1. Map every day with the sleep hours I got
function getSleepHours(day){
    switch(day.toLowerCase()){
        case "monday":
            return 8;
        case "tuesday":
            return 7;
        case "wednesday":
            return 8;
        case "thursday":
            return 6.5;
        case "friday":
            return 7;
        case "saturday":
            return 7.5;
        case "sunday":
            return 8.5;
    }
}

// 2. Total sleep hours
const getActualSleepHours = () => {
    let sum = 0;
    for(let i=0; i<days.length; i++){
        sum += getSleepHours(days[i]);
    }
    return sum;
}

// 3. Total ideal hours
const getIdealSleeplHours = idealHours => 7 * idealHours;

// 4. Sleep Debt
function calculateSleepDebt(idealHours){
    actual = getActualSleepHours();
    ideal = getIdealSleeplHours(idealHours);
    if(actual === ideal){
        console.log('You took the perfect amount of sleep this week!');
    }
    else if(actual > ideal){
        console.log(`You got more sleep (${actual - ideal} hours more) this week than needed!`);
    }
    else{
        console.log(`You need some sleep! You slept ${ideal - actual} hours less this week!`);
    }
}

// MAIN FUNCTION
days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
idealHours = 8;
calculateSleepDebt(idealHours);
