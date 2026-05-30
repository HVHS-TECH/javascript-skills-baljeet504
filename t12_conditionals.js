console.log("Running t01_introduction.js")
console.log('Hello world')
console.log('i am the crewmate the good guy of the spaceship')

console.log("Running t02_variables.js");


// Variables
let userName='nehan';
let userAge=14;
let userMoney=0;
let userYear=2026;

/***************************
Main code
****************************/
console.log(userName);
console.log(userAge);
console.log(userMoney);
console.log(userYear);


/****************************
 function
 ****************************/
let userNum=9;
let userOthernum=18;

console.log('Users name is '+ userName);
console.log('Users age is '+ userAge);
console.log("add", 2+2);
console.log("subrtract",  userNum-1);
console.log("multiply",  userOthernum*userNum);

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

OUTPUT.innerHTML = "<h2>name</h2>";

function writeLine(){
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  
  OUTPUT.innerHTML += "<p>sum like that</p>";
}
writeLine()

function USERNAME(){
  const NAME_FIELD = document.getElementById("nameField");
  let userName = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}

function getAGE(){
const AGE = document.getElementById("ageField");  
let userAgeString = AGE.value;
let userAgeNumber = Number(userAgeString);
let userAge = Number(AGE.value);
}

function money(){
const money = money.value;
let moneyString =  money.value;
let moneyNumber = Number(moneyString);
let money = Number(money.value);
}

if (money < 4){
    console.log(need more money)
}

if (money > 4){
    console.log(might be to much)

}

if (money = 4){
    console.log(just right)

}