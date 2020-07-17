function Person(name) {
  this.name = name;
  if (typeof this.getName != "function") {
      Person.prototype = {
          constructor: Person,
          getName: function () {
              console.log(this.name);
          }
      }
  }
}

var person1 = new Person('kevin');
var person2 = new Person('daisy');
// person1.getName()
person2.getName()