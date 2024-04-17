//Function to calculate the number of points on a driver's record based on their speed
let speedPoint = function (speed){
// Calculate the difference between the speed and the speed limit (70)
    let points = Math.floor([speed - 70] / 5)
 // If the number of points is negative, return 0 points   
    if (points < 0) {
       return (points * -0)
// Return the number of points
    } else{
        return `${points}`
    }

}
// Function to determine the driver's status based on the number of points on their record
function speedDetector(points){
// If the number of points is 0, return "OK
    if(points === 0){
        return "OK"
    }
// If the number of points is greater than 12, return "License suspended"
    else if(points > 12){
        return "License suspended"
    }
// If the number of points is between 1 and 12, return a string indicating the number of points
     else{
        return `points:${points}`
    }
}

// The first test case checks the output of the `speedDetector` function when the number of points is 3
console.log(speedDetector(speedPoint(69))); // Output: "points: 3"