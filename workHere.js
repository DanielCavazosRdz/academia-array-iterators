var billionaires = require('./billionaires.json');
 
/*
    Get the names of the billionaires that are in their 20s
*/

let twentyYearOldBillionaires =  billionaires.filter(element => {
    return element.demographics.age >= 20 && element.demographics.age <= 29;
});


/*
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/

let roundedWorth = billionaires.map(element => {
    return {
        year: element.year,
        name: element.name,
        worth: Math.round(element.wealth["worth in billions"])
    };
});

/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth = billionaires.reduce((prev, element) => {
    return prev + (Math.round(element.wealth["worth in billions"]));
} ,0);
//console.log(aggregatedWorth());

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = [billionaires.reduce((prev, element) => {
    if(Object.keys(prev).length === Object.keys({}).length){
        prev = element;
        return prev;
    }
    if(prev.rank > element.rank){
        prev = element;
        return prev;
    }
    return prev;
} , {})];

/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest = [billionaires.reduce((prev, element) => {
    if(Object.keys(prev).length === Object.keys({}).length){
        prev = element;
        return prev;
    }
    if(prev.rank <= element.rank){
        prev = element;
        return prev;
    }
    return prev;
}, {})];

/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor = [richest, poorest];

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
}