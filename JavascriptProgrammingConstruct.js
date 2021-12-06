var prompt = require('prompt-sync')();

//************Sequence Practice Problem**********//
//1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single digit.
let randomNum=Math.floor(Math.random()*10);
console.log("Random Num : "+randomNum);

//2. Use REPL – Use Random to get Dice Number between 1 to 6
let diceShow=Math.floor(Math.random()*6)+1;
console.log("Dice Num: "+diceShow);

//3.Use REPL – Add two Random Dice Number and Print the Result
let diceFirst=Math.floor(Math.random()*6)+1;
let diceSecond=Math.floor(Math.random()*6)+1;
console.log("Dice First Showing: "+diceFirst," Dice Second Showing: "+diceSecond);

//4.Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let sumOfRandomFiveNum=0;
for(let i=1;i<=5;i++)
{
    let randomTwoDigitNum=Math.floor(Math.random()*89)+10;
    console.log("Random Num: "+randomTwoDigitNum);
    sumOfRandomFiveNum+=randomTwoDigitNum;
}
console.log("Sum Of Random Two Digit Five Number is "+sumOfRandomFiveNum);

//************Selection Practice Problem*************////

//1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let firstNum=prompt('Enter 1st num: ');
let secondNum=prompt('Enter 2st num: ');
let thirdNum=prompt('Enter 3st num: ');
let fourthNum=prompt('Enter 4st num: ');
let fifthNum=prompt('Enter 5st num: ');
console.log("Random Num: "+firstNum,secondNum,thirdNum,fourthNum,fifthNum);
let numArray=[firstNum,secondNum,thirdNum,fourthNum,fifthNum];
let sortedArray=numArray.sort();
console.log("Manimum num is: "+sortedArray[0])
console.log("Maximum num is: "+sortedArray[sortedArray.length-1]);

//2. find leap year or not
let inputYear=prompt('Enter a Year: ');
let conditionFirst=inputYear%4;
let conditionTwo=inputYear%400;
let conditionThird=inputYear%100; 
if(conditionTwo==0)
{
    console.log(inputYear+ " Year is Leap Year");
}
else if (conditionFirst == 0 && conditionThird != 0)
{
    console.log(inputYear+ " Year is Leap Year");
}
else
{
    console.log(inputYear+ " Year is Not Leap Year");

}

//3. Write a program to simulate a coin flip and print out HEADS & TAILS
let flipCoin=prompt('Enter "F" For Flipping Coin: ');
let coinOutput=Math.floor(Math.random()*2);
if(coinOutput==0)
{
    console.log("Its HEADS");
}
else
{
    console.log("Its TAILS");
}

//4. read a number and display weekday (sunday, monday......)
console.log("WeekDay Number Between 1 to 7");
let day=prompt('Enter a Number : ');
if(day==1)
{
    console.log("Its Sunday");
}
else if(day==2)
{
    console.log("Its Monday");
}
else if(day==3)
{
    console.log("Its Tuesday");
}
else if(day==4)
{
    console.log("Its Wednesday");
}
else if(day==5)
{
    console.log("Its Thursday");
}
else if(day==6)
{
    console.log("Its Friday");
}
else if(day==7)
{
    console.log("Its Saturday");
}
else
{
    console.log("Enter Number Between 1 to 7");
}


//5.Read a single digit num and write number in word
let singleDigitNum=prompt('Enter a single digit number: ');
switch(singleDigitNum)
{
    case "1":
        console.log("Its One");
        break;
    case 2:
        console.log("Its Two");
        break;
    case 3:
        console.log("Its Three");
        break;
    case 4:
        console.log("Its Four");
        break;
    case 5:
        console.log("Its Five");
        break;
    case 6:
        console.log("Its Six");
        break;
    case 7:
        console.log("Its Seven");
        break;
    case 8:
        console.log("Its Eight");
        break;
    case 9:
        console.log("Its Nine");
        break;
    case 0:
        console.log("Its Zero");
        break;
    default:
        console.log("Please enter a single digit number");

} 

//Arrays Assignment
//1. Write a program in the following steps
// Generates 10 Random 3 Digit number.
// Store this random numbers into a array.
// Then find the 2nd largest and the 2nd smallest element without sorting the array.

let threeDigitMumArray= new Array();
for(var i=0; i<5;i++)
{
    let randomThreeDigitNum=Math.floor(Math.random()*899)+100;
    threeDigitMumArray[i]=randomThreeDigitNum;
}
let sortedArray=threeDigitMumArray.sort();
console.log("5 Random Number: "+threeDigitMumArray);
console.log("2 nd Smallest No: "+sortedArray[1]);
console.log("2 nd largest No: "+sortedArray[threeDigitMumArray.length-2]);
 
//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array
let reapatingNumArray=new Array();
function magicNumFinding()
{
    for(let i=1;i<=100;i++)
    {
        let num=i;
        //var intvalue = Math.floor( floatvalue );
        let conditionFirst=Math.floor(num/10);
        let conditionTwo=num%10;
        if(conditionFirst==conditionTwo)
        {
            reapatingNumArray.push(num);
        }
    }  
    console.log("repeated twice num: "+reapatingNumArray);  
}
magicNumFinding();



