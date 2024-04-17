// This function calculates the net salary of an employee based on their basic salary, benefits, and NHIF and NSSF contributions.
function netSalaryCalculator(basicSalary, benefit,tier = 1){
    // Calculate the gross salary by adding the basic salary and benefits.    
        let grossSalary = basicSalary + benefit
    // Calculate the tax owed on the gross salary 
        let taxCalculator = calculateTax(grossSalary)
    // Calculate the NHIF deduction from the gross salary.   
        let nhifCalculator = nhifDeductor(grossSalary)
    // Calculate the NSSF deduction from the gross salary, using the specified tier.   
        let nssfCalculator = nssfDeductor(grossSalary,tier)
    // Calculate the net salary by subtracting the tax, NHIF, and NSSF deductions from the gross salary.
        let netSalary = grossSalary - taxCalculator - nhifCalculator - nssfCalculator
    // Return the net salary
        return netSalary
      }
    // Function to calculate the tax owed based on the gross salary
      function calculateTax(grossSalary){
      // The tax is calculated based on the following conditions:
      // - If the gross salary is less than or equal to 24000, the tax is 10% of the gross salary
      // - If the gross salary is between 24001 and 32333, the tax is 24000 * 0.1 + (gross salary - 24000) * 0.25
      // - If the gross salary is between 32334 and 500000, the tax is 24000 * 0.1 + (32333 - 24000) * 0.25 + (gross salary - 32333) * 0.3
      // - If the gross salary is between 500001 and 800000, the tax is 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (gross salary - 500000) * 0.325
      // - If the gross salary is greater than 800000, the tax is 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (gross salary - 800000) * 0.35  
        if(grossSalary <= 24000){
          return grossSalary * 0.1
        }else if(grossSalary > 24000 && grossSalary <= 32333){
          return 24000 * 0.1 + [grossSalary - 24000]*0.25
        }else if(grossSalary > 32333 && grossSalary <= 500000){
          return 24000 * 0.1 + (32333 - 24000)*0.25 + [grossSalary - 32333]*0.3
        }else if(grossSalary > 500000 && grossSalary <= 800000){
          return 24000 * 0.1 + (32333 - 24000)*0.25 + (500000 - 32333)*0.3 + [grossSalary - 500000]*0.325
        }else if(grossSalary > 800000){
          return 24000 * 0.1 + (32333 - 24000)*0.25 + (500000 - 32333)*0.3 + (800000 - 500000)*0.325 + 
          [grossSalary - 800000]*0.35
        }
        
         
      }
    // Function to calculate the NHIF deduction based on the gross salary
      function nhifDeductor(grossSalary){
      //  The NHIF deduction is provided based on the gross salary range
        if (grossSalary <= 5999){
          return 150
        }else if(grossSalary > 5999 && grossSalary <= 7999){
          return 300
        }else if(grossSalary > 7999 && grossSalary <= 11999){
          return 400
        }else if(grossSalary > 11999 && grossSalary <= 14999){
          return 500
        }else if(grossSalary > 14999 && grossSalary <= 19999){
          return 600
        }else if(grossSalary > 19999 && grossSalary <= 24999){
          return 750
        }else if(grossSalary > 24999 && grossSalary <= 29999){
          return 850
        }else if(grossSalary > 29999 && grossSalary <= 34999){
          return 900
        }else if(grossSalary > 34999 && grossSalary <= 39999){
          return 950
        }else if(grossSalary > 39999 && grossSalary <= 44999){
          return 1000
        }else if(grossSalary > 44999 && grossSalary <= 49999){
          return 1100
        }else if(grossSalary > 49999 && grossSalary <= 59999){
          return 1200
        }else if(grossSalary > 59999 && grossSalary <= 69999){
          return 1300
        }else if(grossSalary > 69999 && grossSalary <= 79999){
          return 1400
        }else if(grossSalary > 79999 && grossSalary <= 89999){
          return 1500
        }else if(grossSalary > 89999 && grossSalary <= 99999){
          return 1600
        }else if(grossSalary >= 100000){
          return 1700
        }
      }
      //function to calculate NSSF deduction based on the gross salary and the tier one is in
      function nssfDeductor(grossSalary,tier){
        nssf = grossSalary * 0.06
        if(tier === 1 && nssf > 7000){
          return 7000
        }else if(tier === 1 && nssf < 7000){
          return nssf
        }else if(tier === 2 && nssf > 36000){
          return 36000
        }else if(tier === 2 && nssf < 36000){
          return nssf
        }else if(tier === 0){
          return 0
        }else if(tier !== 2 && tier !== 0 && tier !== 1){
          return "wrong tier"
        }
      }
      //This tests the workability of the code by calling the different functions and providing input.
      console.log(netSalaryCalculator(4000, 0,1))
      console.log(calculateTax(4000))
      console.log(nhifDeductor(4000))
      console.log(nssfDeductor(4000,2))
                 
                 