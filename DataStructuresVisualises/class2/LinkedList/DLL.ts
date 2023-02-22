class DoubleNode {
  next: DoubleNode | null;
  value: number;
  previous: DoubleNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

//~# SPOT, HEAD, TAIL ALL ARE NODES AND HAVE PREVIOUS, NEXT, VALUE ATTACHED TO THEM

//~! HEAD AND TAIL AND SPOT REFERENCE TO EACH OTHER THROUGH THE POINTER - PREVIOUS AND NEXT
class DoubleLinkedList {
  head: DoubleNode | null;
  tail: DoubleNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: number) {
    const spot = new DoubleNode(value);
    if (this.head === null) {
      this.head = spot;
      this.tail = spot;
    } else {
      //> this adds tail's reference to the next node,i.e., spot
      this.tail.next = spot;
      //% spot.previous is assigned to the previous node(that itself is a node having .value to access)
      spot.previous = this.tail /* this.tail is also a value */;
      this.tail = spot;
    }
  }

  printForward() {
    //~? current will be undefined if it is not in the linkedlist
    for (let current = this.head; current; current = current.next) {
      // console.log(current);

      console.log(current.value);
    }
  }

  printBackward() {
    for (let current = this.tail; current; current = current.previous) {
      console.log(current.value);
    }
  }

  deleteAValue(value: number) {
    //~> LL has always access to beginning and ending node
    for (let current = this.head; current != null; current = current.next) {
      if (current.value === value) {
        if (current == this.head) {
          this.head = this.head.next;
          this.head.previous = null;
          //* We are returning early so that code after this is not executed
          return true;
        }
        if (current == this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
          return true;
        }
        current.previous.next = current.next;
        current.next.previous = current.previous;
        return true;
      }
    }
  }
}

const myDoubleList = new DoubleLinkedList();

myDoubleList.add(1);
myDoubleList.add(2);
myDoubleList.add(3);
myDoubleList.deleteAValue(3);
myDoubleList.add(4);
// myDoubleList.printForward();
myDoubleList.printBackward();
