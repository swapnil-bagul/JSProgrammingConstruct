const FULL_TIME=1;
const PART_TIME=2;
const ABSENT=0;
const EMP_RATE_PER_HOURS =20;
let empHrs=0;
const NUM_OF_WORKING_DAYS=20;
const Max_WORKING_HRS=100;
let empWageArray=new Array;
//UC1
let empAttendance= (Math.floor(Math.random()*10)%2);
if(empAttendance==0)
{
    console.log ("Employee Is Present");
}
else
{
    console.log ("Employee Is Absent");
}
//UC2
let empAttendance= (Math.floor(Math.random()*10)%3);
//UC3
function getWorkingHours(empAtt)
{
    switch(empAtt)
    {
        case FULL_TIME:
            empHrs=8;
            return empHrs;
        case PART_TIME:
            empHrs=4;
            return empHrs;;  
        case ABSENT:
            empHrs=0;
            return empHrs;;  
    }
}
//UC4
for (var i=1;i<=20;i++)
{
    let empAtt=(Math.floor(Math.random()*10)%3);
    empHrs+= getWorkingHours(empAtt);
}
empHrs=getWorkingHours();
let empWage=EMP_RATE_PER_HOURS*empHrs;
console.log("Emp total wage = "+empWage);
//UC5
const EMP_RATE_PER_HR=20;
let totalEmpHr=0;
let totalWorkingDays=1;
let totalEmpWage=0;
function getEmpWage(empHrs)
{
    return empHrs *EMP_RATE_PER_HOURS;
}
while(totalEmpHr <= Max_WORKING_HRS && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empAtt=(Math.floor(Math.random()*10)%3);
    let empHrs=getWorkingHours(empAtt);
    totalEmpHr+=empHrs;
    empWageArray.push (getEmpWage(empHrs));
    empDayHrsWageArray.push(
        {
            day:totalWorkingDays,
            dailyHrs:empHrs,
            dailyWage:getEmpWage(empHrs),
            toString()
            {
                    return "Day: "+day;
            },
        });

}
totalEmpWage=getEmpWage(totalEmpHr);
console.log("UC6 Total Days: "+totalWorkingDays+" Total hrs: "+totalEmpHr+" Emp Wage: "+totalEmpWage);
console.log("UC6 Employee Wage Array "+empWageArray);

//UC7 -A calculate total wage using array by foreach or reduce
let totalWagebyArray=0;
function sum(dailyWage)
{
    totalWagebyArray+=dailyWage;
}
empWageArray.forEach(sum);
console.log("UC7 A Total Days: "+totalWorkingDays+" Total hrs: "+totalEmpHr+" Emp Wage: "+totalWagebyArray);

//by reduce method
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
empWageArray.reduce(totalWages,0)
console.log("UC7 A Total Days: "+totalWorkingDays+" Total hrs: "+totalEmpHr+" Emp Wage: "+empWageArray.reduce(totalWages,0));

//UC7 B show day along with dailywage
let dayCtr=0;
function mapDaywithWage(dailyWage)
{
    dayCtr++;
    return dayCtr + "=" +dailyWage;

}
let mapDaywithWageArray=empWageArray.map(mapDaywithWage);
console.log("UC7 B mapDaywithWage: "+mapDaywithWageArray);

//UC7 C show only full day wage
function fullTimeWage (dailyWage)
{
return dailyWage.includes("160");
}
let fullDayWageArray=mapDaywithWageArray.filter(fullTimeWage);
console.log("UC7 C : "+fullDayWageArray);

///UC 9
console.log("UC 9");
let empwagemap=new map();
///
let empDayHrsWageArray=new Array();


