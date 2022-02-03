// Declare any necessary variables.

// Add am event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

// Create a function that instantiates a new student object with the input from the HTML form.

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
let student
var studentName = document.querySelector('#studentName')
var className = document.querySelector('#className')
var studentScore = document.querySelector('#studentScores')
var possible = document.querySelector('#possibleScores')
var certStudentName = document.querySelector('#certStudentName')
var certClassName = document.querySelector('#certClassName')
var certGrade = document.querySelector('#certGrade')

var printBtn = document.querySelector('#print').addEventListener('click', function(){createStudent(),print()})
var resetBtn = document.querySelector('#reset').addEventListener('click', reset)
// var student = new Student()

function createStudent(){
    student = new Student(studentName.value, className.value, convertGrade(studentScore), convertGrade(possible))
    console.log(student)
}

function print(){
    console.log(studentName.value)

    certStudentName.textContent = studentName.value
    certClassName.textContent = className.value
// calculated grades go here
    certGrade.textContent = student.letterGrade()
    console.log(certGrade.textContent)

}
// convert math objects into arrays
function convertGrade(obj){
    var ary = obj.value.split(',')
    ary = ary.map(function (A){return parseInt(A)})
    return ary
}


function reset(){
    certStudentName.textContent = ''
    certClassName.textContent = ''
    certGrade.textContent = ''

}





