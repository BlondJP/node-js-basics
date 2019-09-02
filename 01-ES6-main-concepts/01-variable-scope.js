/**
 * Var scope, side effects
 */

var age = 18;

const display = function() {
  //   console.log(age);
};

const disorder = function() {
  age++;
};

disorder();
display();

/**
 * let / const
 * pure approach
 */

const name = "steve";
const greet = function(name) {
  console.log("hello my name is " + name);
};
greet(name);

/**
 * try catch
 */

function sayHi() {
  let str;
  try {
    str = "hi";
  } catch (e) {}
  console.log(str);
}

sayHi();
