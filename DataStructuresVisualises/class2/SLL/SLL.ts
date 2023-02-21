//~> Node has two pointers/keys to access - VALUE & NEXT
class MyNode {
  value: number;
  next: null | MyNode;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

//~^ HEAD AND TAIL BOTH ARE SEPARATE NODES

//~> LinkedList has two pointers/keys to access - HEAD & TAIL
class SinglyLinkedList {
  head: MyNode | null;
  tail: MyNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: number) {
    const spot = new MyNode(value);

    // console.log(this.head, 'head');
    // console.log(this.tail, 'tail');
    //~* If this is the first time we are creating node, head and tail point to same value
    if (this.head === null) {
      this.head = spot;
      this.tail = spot;
    } else {
      this.tail.next = spot;
      this.tail = spot;
    }
  }

  print() {
    for (let current = this.head; current; current = current.next) {
      console.log(current.value);
    }
  }
}

const SLL = new SinglyLinkedList();
SLL.add(5);
SLL.add(5);
SLL.add(5);
SLL.print();
