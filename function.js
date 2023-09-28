function calcBMI(name,weight,height){

    heightDeno = height * height;
    BMI = weight/ heightDeno;
    if (name === 'Mark'){
        BMI = markBMI;
    }
    else{
        BMI = johnBMI;
    }
    
    return BMI;
}

function compareBMI(){
    calcBMI();
    if (markBMI>johnBMI){
        console.log(`Mark's BMI is higher than John's!`)
    }
    else{
       console.log(`John's BMI is higher than Mark's!`) 
    }
}

var mark = calcBMI('Mark', 78, 1.69);
var john = calcBMI('John', 92, 1.95);
var compare = compareBMI();

console.log(`${mark}, ${john},${compare}`)



// console.log("Mark has " + calcBMI('Mark',78,1.69) + " BMI");
// console.log(compareBMI());
// console.log("John has " + calcBMI('John',92,1.95) + " BMI");
// markHigherBMI = true;
// console.log(markHigherBMI);

//for the second data set 

// console.log("Mark has " + calcBMI(95,1.88) + " updated BMI");
// console.log("John has " + calcBMI(85,1.76) + " updated BMI");
// markHigherBMI = false;
// console.log(markHigherBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's!`)
// }
// else{
//     console.log(`John's BMI is higher than Mark's!`)
// }
