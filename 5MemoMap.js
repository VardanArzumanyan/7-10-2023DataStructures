class Memo {
  constructor() {
    this.memo = new Map();
  }

  fib(n) {
    if (this.memo.has(n)) {
      return this.memo.get(n);
    }
    if (n <= 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    let res = this.fib(n-1) + this.fib(n-2);
    this.memo.set(n, res);
    console.log(this.memo);
    return res;
  }
}

let m = new Memo();
console.log(m.fib(4));
console.log(m.fib(5));
console.log(m.fib(3));
