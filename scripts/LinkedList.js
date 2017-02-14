import Node from './Node.js'

export default class LinkedList {
  constructor(array = []) {
    this.head = null;
    this.length = 0

    this.addList(array);
  }

  addList (array) {
    for (var i = 0; i < array.length; i++) {
      this.prepend(array[i]);
    }
  }

  // add node at beginning of array
  prepend (age) {
    console.log(age);

    this.head = new Node(age, this.head);
    console.log(this.head);

    this.length++;
  }

  // add node at end of array
  append (data) {
    let newNode = new Node(data);
    let currentTail = this.findTail();

    if (currentTail) {
      currentTail.next = newNode;

    } else {
      this.head = newNode;
    }

    this.length++;
  }

  shift () {
    let node = this.head;

    if (node) {
      this.head = node.next;
      this.length--;
    }

    return node;
  }

  // find and return last node
  findTail () {
    let node = this.head;

    if (node === null) {
      return null
    }

    while (node.next !== null) {
      node = node.next;
      console.log(node);
    }

    return node;
  }

  // remove and return last item
  pop () {
    let lastNode = this.findTail();
    let currentNode = this.head;

    // if nothing in list
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.length--;
      return lastNode;
    }

    // otherwise find next to last node and set it to current node
    while (currentNode.next !== lastNode) {
      currentNode = currentNode.next;
    }

    // set currentNode.next to null so it will be new last node
    currentNode.next = null;
    this.length--;
    return lastNode;
  }

  // find and return a data's node
  find (data) {
    let node = this.head;

    while (node.data !== data && node.next !== null) {
      node = node.next;
    }

    if (node.data !== data) {
      return 'not found';
    }

    return node;
  }

  getCount () {
    return this.length;
  }

  // convert to array
  toArray () {
    let array = [];
    let node = this.head;

    while (node !== null) {
      array.push(node);
      node = node.next;
    }

    return array;
  }

  // check if array contains specific data
  includes () {}


  // insert node at index
  insertAtIndex (data, index) {}
}
