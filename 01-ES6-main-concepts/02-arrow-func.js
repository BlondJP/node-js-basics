/**
 * replacing anonymous func by arrow func
 */
const myFunc = () => {
  //   console.log("i am a func");
};
myFunc();

/**
 * Using arraw func in iterable
 */
function iterate(iterable, callable) {
  for (let i = 0; i < iterable.length; i++) {
    callable(iterable[i]);
  }
}

const arr = [{ v: 1 }, { v: 5 }, { v: 10 }];
iterate(arr, item => (item.v *= 2));

console.log(arr);

/**
 * case returning object
 */
const factory = () => ({
  v: 42
});

console.log(factory());
