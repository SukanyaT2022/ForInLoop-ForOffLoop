// const num = [10,20,50]
// let result = num[2]
// console.log(result);

// const num = [20,30,40,50]
// let text ='';
// num.forEach(myFunction);
// function myFunction(
//     value){
//     text += value + ' '
// }
// console.log(text);


// not work
// const num = [40,50,80]
// let total = '';
// num.forEach((val)=>{
// total += val
// }
// );

// console.log(text)


const num = [40, 50, 80];
let total = '';

num.forEach((val) => {
    total += val.toString();
});

console.log(total);
