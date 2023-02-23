class SentinentalNode {
  prev: null | SentinentalNode;
  next: SentinentalNode | null;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

//~> SentinentalList have a head and a tail as default and we add values to it. Values can be deleted and added from both ends hence

class SentinentalLinkedList {
  head: null | SentinentalNode;
  tail: null | SentinentalNode;
  constructor() {
    this.head = new SentinentalNode(null);
    this.tail = new SentinentalNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  //~# It is worth noting that IN assignment operator (=), RHS is indicating node, LHS is the pointer to node (next or previous)                       ;

  addANodeToBack(value: number) {
    const spot = new SentinentalNode(value);
    spot.next = this.tail;
    spot.prev = this.tail.prev;
    this.tail.prev.next = spot;
    this.tail.prev = spot;
  }

  //~^ MAN CLIMBING THE WALL                        ;
  addANodeToFront(value: number) {
    const spot = new SentinentalNode(value);
    spot.prev = this.head;
    spot.next = this.head.next;

    spot.prev.next = spot;
    spot.next.prev = spot;
  }

  deleteANode(value: number) {
    for (
      let current = this.head.next;
      current != this.tail;
      current = current.next
    ) {
      //~! a.b.c means (a.b).c => a.b evaluates to a node and that is assigned a pointer to any other node
      if (current.value == value) {
        //> current.prev is evaluated to previous node and it's next pointer is to the current's next pointer node
        current.prev.next = current.next;
        //> current.next is evaluated to next node and it's previous pointer is to the current's previous pointer node
        current.next.prev = current.prev;
      }
    }
  }

  printForward() {
    for (
      let current = this.head.next;
      current != this.tail;
      current = current.next
    ) {
      console.log(current.value);
    }
  }

  printBackward() {
    for (
      let current = this.tail.prev;
      current != this.head;
      current = current.prev
    ) {
      console.log(current.value);
    }
  }
}

const senti = new SentinentalLinkedList();
senti.addANodeToFront(3);
senti.addANodeToFront(4);
senti.addANodeToFront(78);
senti.printBackward();
senti.deleteANode(78);
senti.printForward();
