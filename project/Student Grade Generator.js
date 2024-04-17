//code starts here
//This function assigns grades to students based on their marks
function gradeAssigner(marks){
    // The function first checks if the marks are within a valid range (0-100).
    if(marks < 0 || marks > 100 ){
        console.log('Invalid Marks')
    }else if(marks > 79){
        console.log("Grade A");
    }else if(marks >= 60 && marks <=79){
        console.log("Grade B")
    }else if(marks >49 && marks <=59) {
        console.log("Grade C")
    }else if(marks <= 49 && marks >= 40) {
        console.log("Grade D")
    }else if(marks < 40){
        console.log("Grade E")
    }
    
    }
    //This tests the workability of the code by calling the grade assigner  function with different inputs
    gradeAssigner(81)
    gradeAssigner(13)