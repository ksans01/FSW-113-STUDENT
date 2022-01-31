// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class objStudent {
    constructor (...data){
        this.studentName = data[0],
        this.className = data[1],
        this.studentScores = data[2],
        this.possibleScores = data[3]
    }

    sumScores(){
        let allScores = this.studentScores.reduce((currentTotal, score) => {
            return score.value + currentTotal
        },
        0)
        return allScores
    }

    sumPossibleScores(){

    }

    studentGrade(){

    }
}

const scores = document.querySelector('#print').addEventListener('click', setStudent)
console.log(scores)