var markWeight = 78;
var markHeight = 1.69;

var johnWeight = 92;
var johnHeight = 1.95;

//--------------------------------------------//
var markWeight_2 = 95;
var markHeight_2 = 1.88;

var johnWeight_2 = 85;
var johnHeight_2 = 1.76;

//BMI for Mark
//calculating BMI for mark using the first data set
var heightDenomMark = markHeight * markHeight;

var markBMI = markWeight / heightDenomMark;

console.log("Mark's BMI is: " + markBMI);

//BMI for John
//Calculating BMI for John using the first data set
//heightDenom stands for height denominator

var heightDenomJohn = johnHeight * johnHeight;

var johnBMI = johnWeight/heightDenomJohn;

console.log("John's BMI is: " + johnBMI);

//from the result, we can see that Mark has a higher BMI

var markHigherBMI = true;

//for the second date set, we follow a similar procedure

var heightDenomMark_2 = markHeight_2 * markHeight_2;

var markBMI_2 = markWeight_2 / heightDenomMark_2;

console.log("Mark's BMI is: " + markBMI_2);

//for John

var heightDenomJohn_2 = johnHeight_2 * johnHeight_2;

var johnBMI_2 = johnWeight_2/heightDenomJohn_2;

console.log("John's BMI is: " + johnBMI_2);

//the results show that John has a higher BMI this time

markHigherBMI = false;


