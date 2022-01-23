
// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

   



        
document.querySelector('#submit').addEventListener("click", chkLang);


const lang = 'JavaScript';

    function chkLang(){        

        let result = false;
        let obj = document.querySelector('#TestResult');

        // use an array method to check whether the user included 'JavaScript' in their
        // list of languages
        const languages = [document.querySelector('#lang0').value,
        document.querySelector('#lang1').value,
        document.querySelector('#lang2').value,
        document.querySelector('#lang3').value,
        document.querySelector('#lang4').value,
        document.querySelector('#lang5').value,
        document.querySelector('#lang6').value,
        document.querySelector('#lang7').value]

        const java = languages.find(findJava);

        
        if (java === `${lang}`){
            obj.innerText = `Congratulations!\nYou know ${lang}.`;
        }

        else {
            obj.innerText = `Sorry,\nyou don't know ${lang}.`;
        }
          

        function findJava(item){
            return item === `${lang}`;
        }
    

    }



