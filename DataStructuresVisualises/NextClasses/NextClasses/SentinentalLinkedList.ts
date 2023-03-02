class SentinelNode {
  prev: null | SentinelNode;
  next: SentinelNode | null;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

//~> SentinentalList have a head and a tail as default and we add values to it. Values can be deleted and added from both ends hence

class SentinelLinkedList {
  head: null | SentinelNode;
  tail: null | SentinelNode;
  constructor(...values: number[]) {
    this.head = new SentinelNode(null);
    this.tail = new SentinelNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.insertValues(this.head, values);
  }

  //~# It is worth noting that IN assignment operator (=), RHS is indicating node, LHS is the pointer to node (next or previous)                       ;

  search(value: number) {
    for (
      let current = this.head.next;
      current != this.tail;
      current = current.next
    ) {
      if (value == current.value) {
        return current;
      }
    }
    return null;
  }

  insertValues(node: SentinelNode, values: number[]) {
    values.forEach((value) => {
      const spot = new SentinelNode(value);

      spot.next = node.next;
      spot.prev = node;

      spot.next.prev = spot.prev.next = spot;
    });
  }

  addNodesToBack(...values: number[]) {
    this.insertValues(this.tail.prev, values);
  }

  //~^ MAN CLIMBING THE WALL                        ;
  addNodesToFront(...values: number[]) {
    this.insertValues(this.head, values);
  }

  insertAfter(insertedAfter: number, ...insertValues: number[]) {
    const searchedNode = this.search(insertedAfter);
    this.insertValues(searchedNode, insertValues);
  }

  insertBefore(insertedBefore: number, ...insertValues: number[]) {
    const searchedNode = this.search(insertedBefore);
    this.insertValues(searchedNode.prev, insertValues);
  }

  deleteNodes(...values: number[]) {
    values.forEach((value) => {
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
    });
  }

  removeAllOccurrences = (...values: number[]) => {
    values.forEach((value) => {
      for (
        let current = this.head.next;
        current != this.tail;
        current = current.next
      ) {
        if (current.value == value) {
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
      }
    });
  };

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

const senti = new SentinelLinkedList(11, 12, 13);
// senti.addANodeToFront(3);
// senti.addANodeToFront(5);
// senti.addANodeToFront(4);

// senti.insertAfter(4, 99);

// senti.insertBefore(4, 99);

// senti.addNodesToBack(2, 3, 4);
senti.addNodesToFront(2, 3, 4);

senti.printForward();
