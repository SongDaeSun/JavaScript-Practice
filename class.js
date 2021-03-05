'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// class : fields(변수)와 methods(함수)가 묶여있는 것이다.
// class : template을 정해놓는 것이다.
// object : class를 이용하여 만든 instance

// 1. Class declarations
console.log("1. Class declarations")
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
console.log("2. Getter and setters")
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // age를 getter로 만드는 순간,
  // age를 받을 때 더 이상 age값을 direct로 받는 것이 아니다.
  // age값을 불러오려고 하면 getter function이 호출되는 것이다.
  get age() {         
    return this._age;
  }

  // age를 setter로 만드는 순간,
  // age를 변경 하려고 할 때 더 이상 age값을 direct로 수정하는 것이 아니다.
  // age값을 변경 하려고 하면 setter로 function이 호출되는 것이다.
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
// 나온지 너무 최신이라 지원이 잘 안된다.
console.log("3. Fields (public, private)")
class Experiment {
  publicField = 2;    // public
  #privateField = 0;  // private
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
console.log("4. Static properties and methods")
// Too soon!
// 나온지 너무 최신이라 지원이 잘 안된다.
class Article {
  static publisher = 'Dream Coding';    // static은 object가 아닌, class에 붙는 것이다.
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {             // static은 object가 아닌, class에 붙는 것이다.
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
//console.log(article2.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
console.log("5. Inheritance")

// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();     //부모의 class의 method
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log("6. Class checking: instanceOf")
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
