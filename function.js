function calcBMI(weight_1,height_1,weight_2,height_2){
    var heightDeno_1 = height_1 * height_1;
    var heightDeno_2 = height_2 * height_2;
    
    var markBMI = weight_1/heightDeno_1;
    var johnBMI = weight_2/heightDeno_2;

    if (markBMI > johnBMI){
        return `Mark's BMI is higher than John's!`
    }
    else{
        return `John's BMI is higher than Mark's!`
    }

}

console.log(calcBMI(78,1.69,92,1.95));
console.log(calcBMI(95,1.88,85,1.76));




// console.log("Mark has " + calcBMI('Mark',78,1.69) + " BMI");

// console.log("John has " + calcBMI('John',92,1.95) + " BMI");


//for the second data set 

// console.log("Mark has " + calcBMI(95,1.88) + " updated BMI");
// console.log("John has " + calcBMI(85,1.76) + " updated BMI");


