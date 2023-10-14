class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    if (this.size === 0) {
      this.head = new Node(data);
      this.size++;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
      this.size++;
    }
  }

  prepend(data) {
    if ((this.size = 0)) {
      this.head = new Node(data);
      this.size++;
    }
    let current = new Node(data);
    current.next = this.head;
    this.head = current;
    this.size++;
  }

  insert(data, index) {
    let newNode = new Node(data);
    let node = this.head;
    if (index === 0) {
      newNode.next = node;
      this.head = newNode;
      return;
    }
    while (--index) {
      if (node.next !== null) {
        node = node.next;
      } else {
        throw Error("Index Out of Bound");
      }
    }

    let tmp = node.next;
    node.next = newNode;
    newNode.next = tmp;
  }

  removeAt(index) {
    let node = this.head;
    if (index === 0) {
      if (node !== null) {
        node = node.next;
        this.head = node;
      } else {
        throw Error("Index Out of Bound");
      }
    }
    while (--index) {
      if (node.next !== null) {
        node = node.next;
      } else {
        throw Error("Index Out of Bound");
      }
    }
    node.next = node.next.next;
  }

  remove(data) {
    let node = this.head;
    let k = 0;
    while (k <= this.size) {
      if (node.data !== data) {
        node = node.next;
        k++;
      }
    }
    return this.removeAt(k);
  }

  getSize() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }

  printList() {
    let node = this.head;
    while (node) {
      process.stdout.write(node.data + " ");
      node = node.next;
    }
  }
}

let myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.prepend(0);
myList.insert(3, 3);
console.log("Size:", myList.getSize());
myList.remove(2);
myList.removeAt(2);
myList.printList();
console.log("Size:", myList.getSize());
console.log(myList.isEmpty());
