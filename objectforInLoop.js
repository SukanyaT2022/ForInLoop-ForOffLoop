const emp = {
    name: "rick",
    age: 30,
    race: "Asian",
    dept: "account"

}
let box = " ";
for (let e in emp){
    box += emp[e] + " ";
}
console.log(box);