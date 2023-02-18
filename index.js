var grocery = ["Edable Oil", "Shabhu", "Nuts", "Washing Powder", "Salt"];

console.log(grocery[0]);
console.log(grocery[2]);
console.log(grocery[4]);

//lenth of Array
var Whatislenth = grocery.length

console.log("Length of Array : "+Whatislenth);

//last item

console.log(grocery[grocery.length-1]);
console.log("********* Grocery List ********")
for(var i=0;i<=grocery.length-1;i++)
  {
  console.log(grocery[i]);
  }