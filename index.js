// Write your solution in this file!
const employee = {
    name: "kipchumba",
    streetAddress: "USA"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key]= value
    return newEmployee
}
updateEmployeeWithKeyAndValue(employee,'Sam','11 Broadway') 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee,'Sam','11 Broadway') 
function deleteFromEmployeeByKey(employee, key) {
   const newEmployee = {...employee}
   delete newEmployee[key]
   return newEmployee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,'Sam','11 Broadway') 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  
   delete employee[key]
   return employee
}