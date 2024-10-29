// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// Takes in a single employee,
// Apply bonus rules
// Create and return new object with bonus details
function calculateIndividualEmployeeBonus(employee) {
  let bonusPercentage = 0
  const salaryNum = Number(employee.annualSalary)

  // Those who have a rating of a 2 or below should not receive a bonus.
  if (employee.reviewRating <= 2) {
    console.log("\tReview rating less than 2")
    bonusPercentage = 0
  }

  // Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
  if (employee.reviewRating === 3) {
    console.log("\tReview Rating is 3")
    bonusPercentage = 4
  }

  // Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
  if (employee.reviewRating === 4) {
    console.log("\tReview Rating is 4")
    bonusPercentage = 6
  }

  // Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  if (employee.reviewRating === 5) {
    console.log("\tReview Rating is 5")
    bonusPercentage = 10
  }

  console.log("\tBase Bonus: ", bonusPercentage)

  console.log(`\tEmployee Number: ${employee.employeeNumber} - Length: ${employee.employeeNumber.length}`)

  const employeeNumberDig = employee.employeeNumber.length
  // If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
  if (employeeNumberDig === 4) {
    console.log("\tEmployee has been around for a while!")
    bonusPercentage += 5
  }
  console.log("\tBonus after digit count:", bonusPercentage)


  // If annualSalary is > 65000, bonus -1
  if (salaryNum > 65000) {
    console.log("\tThey're rich!!!:", salaryNum)
    bonusPercentage -= 1
  }
  console.log("\tBonus after annualSalary consideration:", bonusPercentage)

  // If bonus < 0, then 0
  if (bonusPercentage < 0) {
    bonusPercentage = 0
  }
  // If bonus > 13, then it is 13
  if (bonusPercentage > 13) {
    bonusPercentage = 13
  }

  console.log("\tBonus after maximum/minimum:", bonusPercentage)

  const totalBonus = salaryNum * (bonusPercentage/100)
  console.log("\tTotal Bonus:", totalBonus)

  const totalCompensation = totalBonus + salaryNum


  let result = {
    name: employee.name,
    bonusPercentage: bonusPercentage/100,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }

  return result
}

// * Test for single employee
// Testing the function with 1 employee
// const testEmployee = calculateIndividualEmployeeBonus(employees[0])
// console.log("Result for individual Employee:", testEmployee)

// * Test for all employees
// Create a loop that runs this function & the test for all employees.
for (const employee of employees) {
  console.log(`${employee.name}`)
  const testEmployee = calculateIndividualEmployeeBonus(employee)
  console.log("\tFinal Result: ", testEmployee)

}