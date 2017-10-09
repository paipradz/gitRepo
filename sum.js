
var sum = (...params) => {
    var total = 0;
    var filteredop = params.filter( (par) => {if (par % 2 ===0) return true;})
    console.log(filteredop);
for(var i=1; i<params.length; i++){
    total = total + params[i];
     console.log(`Parameter ${i} = ${params[i]}`);
  }
  console.log(`Total is : ${total}`);
}
sum(1,2,3,4,5,6);

class Person {
  constructor (name) {
    this._name = name; //{1}
  }
  get name() { //{2}
    return this._name;
  }
  set name(value) { //{3}
    this._name = value;
  }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name); //{4}
lotrChar.name = 'Gandalf';    //{5}
console.log(lotrChar.name);
lotrChar._name = 'Sam'; //{6}
console.log(lotrChar.name);
