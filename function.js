function calcBMI(weight,height){
    heightDeno = height * height;
    BMI = weight/ heightDeno;
    return BMI;
}

console.log("Mark has " + calcBMI(78,1.69) + " BMI");
console.log("Mark has " + calcBMI(92,1.95) + " BMI");

//for the second data set 

console.log("Mark has " + calcBMI(95,1.88) + " updated BMI");
console.log("Mark has " + calcBMI(85,1.76) + " updated BMI");
