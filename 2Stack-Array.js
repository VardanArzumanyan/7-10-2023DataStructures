class Stack {
  constructor() {
    this.arr = [];
  }

  push(elem) {
    this.arr.push(elem);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.arr.pop();
  }

  top() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  getSize() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.getSize());
