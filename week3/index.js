const student = require('./StudentInfo')
const person = require('./Person')


function EmployeeInfo(name,Salary)
{
    console.log("Welcome " + name + " Your monthly Salary is " + Salary)
}
var EmpName = "John"
var EmpSalary = 50000
EmployeeInfo (EmpName,EmpSalary)


console.log ("This is my first program")

const EmpSkill = (skills) => {
    console.log("Expert in " + skills)
}
EmpSkill("Java")


console.log("Student Name: " + student.getName())
console.log(student.Location())
console.log(student.dob)
console.log(student.Studentgrade())
console.log("grade is " + student.Studentgrade(99))

person1 = new person("Jim", "American", "Jim123@gmail.com")
console.log("using Person module", person1.getPersonInfo())
console.log("program ended")


os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
