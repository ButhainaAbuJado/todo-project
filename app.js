'use strict';
let userName = prompt(`Enter your name:`);
let userGender =  prompt(`Enter your gender \n male/female ` ).toLowerCase();
    let age= prompt(`Please Enter Your age`);
    if (age<=0) {
      
           alert(`Age can not be <=0`);
    }
    
    let confirmaion = confirm(`Are you want to skip the welcoming message?\npress ok`);
if (confirmaion==false) {
    if (userGender == 'male')
        {
            alert(`Welcome, MR.  ${userName} `);

        }
        else if (userGender == 'female')
        {
            alert(`Welcome, MS.  ${userName} `);

        } else {
            alert(`Welcome, ${userName}`);
        }
    
}

let moreQuistions = confirm(`Do you want to answer more quistions? `);
let Answers=[3]
function checkAnswers (Quistion1) 
{switch (Quistion1) {
    case `yes`:
        Quistion1=`yes`
        break;
        case `no`:
            Quistion1=`no`
        break;

    default:
        Quistion1=`invalid`
        break;
}
   return(Quistion1) 
}
if (moreQuistions==true){
    let Quistion1 = prompt("Are you UI/UX Student ?").toLowerCase();
   
    let Quistion2 = prompt("Do you love IT ?").toLowerCase();

    let Quistion3 = prompt("DO you finish the assignment ?").toLowerCase();

    Answers=[checkAnswers(Quistion1),checkAnswers(Quistion2),checkAnswers(Quistion3)]

}

for (let i =0;i < Answers.length;i++) {
    console.log(Answers[i]);
    
}
       


        