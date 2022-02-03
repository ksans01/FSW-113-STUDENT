// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class Student {
    constructor(studentName, className, studentScores, possibleScores) {
        this.name = studentName,
        this.class = className,
        this.score = studentScores,
        this.possibleScore = possibleScores
    }

    sumScores(){
        let allScores = this.score.reduce((currentTotal, score) => {
            return score + currentTotal
        }, 0)
        console.log(allScores)
        return allScores
    }

    sumPossibleScores(){
        let allPossible = this.possibleScore.reduce((currentTotal, possibleScore) =>{
            return possibleScore + currentTotal
        }, 0)
        console.log(allPossible)
        return allPossible
    }

    studentGrade(){
            return (this.sumScores()/this.sumPossibleScores())        
    }
    
    letterGrade(){
        let score = this.studentGrade()
        if(score >= .90){
            return 'A'
        }
        else if(score >= .80){
            return 'B'
        }
        else if(score >= .70){
            return 'C'
        }
        else if(score >= .60){
            return 'D'
        }
        else{
            return 'F'
        }
    }
}



// student = new Student('Rick', 'Math', 87, 100)
// console.log(student)