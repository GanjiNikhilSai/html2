function greet(Nikhil){
   return`Hello,${Nikhil}!`;
    }
    console.log(greet("MRNBT"));


const greet=function(Nikhil){
   return `Hello,${Nikhil}!`;
};
console.log(greet("MRNBT"));


const.greet=(Nikhil)=>`Hello,${Nikhil}!`;
console.log(greet("MRNBT"));


(function(){
   console.log(`This runs right away!`);
})();


const greetFn=(Nikhil)=>{
   console.log(`Hello,${Nikhil}!`);
}
function processName(callback){
   const Nikhil="MRNBT";
   callback(Nikhil);
}
processName(greetFn);


let fruits=["Apple","Banana","cherry"];
//fruits.forEach(fruits=>console.log(fruits));
fruits.push("Mango");
//fruits.forEach(fruits=>console.log(fruits));
fruits.pop();
//fruits.forEach(fruits=>console.log(fruits));
fruits.shift();
//fruits.forEach(fruits=>console.log(fruits));
fruits.unshift("Grapes");
fruits.forEach(fruits=>console.log(fruits));


let numbers=[1,2,3,4,5];
let squared=numbers.map(num=>num*num);
squared.forEach(sno => console.log(sno));


let person={
   name:"Pradeep",
   age:30,
   greet:function(name){
      return `Hello,My name is ${this.name}`;
   },
};
console.log(person.name); 
console.log(person.greet("Pradeep"));

try{
   let result=JSON.parse("Invalid JSON");
   throw('');
}
catch(Error){
       console.log("Error caught:",Error.message);
}
