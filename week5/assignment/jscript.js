// Declare any necessary variables.

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

// Create a function that instantiates a new student object with the input from the HTML form.

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

const studentName = document.querySelector('#studentName')
const className = document.querySelector('#className')
const studentScores = document.querySelector('#studentScores').value
const possibleScores = document.querySelector('#possibleScores')

function setStudent(id) {
    switch (id) {
        case '1':
          student = new objStudent(
              'Bob',
              'English',
              3,
              5,
          ) 
          break; 

          case '2':
          student = new objStudent(
              'Rick',
              'English',
              4,
              5,
          ) 
          break; 

          case '3':
          student = new objStudent(
              'Morty',
              'English',
              2,
              5,
          ) 
          break; 
    }
}