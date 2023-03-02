type NullableHT<T> = null | T;

//~!  ---[key, value]
class HTNode {
  key: number;
  value: string;
  next: NullableHT<HTNode>;

  constructor(k: number, v: string) {
    this.key = k;
    this.value = v;
    this.next = null;
  }
}

//~! Array of {offset: HTNODE_LIST}
class HashTable {
  table: Array<HTNode> = [];

  constructor(size = 10) {
    this.table = new Array(size);
  }

  //~> hash ko key milega to offset return krega

  hash(key: number) {
    return key % this.table.length;
  }

  put(key: number, value: string) {
    const offset = this.hash(key);
    const entry = new HTNode(key, value);

    if (this.table?.[offset]) {
      //> new node is inserted at beginning of list
      entry.next = this.table?.[offset];
    }
    this.table[offset] = entry;
  }

  print() {
    for (let offset = 0; offset < this.table.length; offset++) {
      console.log(
        `offset: ${offset} - KEY: ${this.table[offset]?.key}, VALUE: ${this.table[offset]?.value}`
      );
    }
  }
}

const ht = new HashTable();
ht.put(123, 'Ajay');
ht.put(124, 'Ajay P');
ht.put(224, 'Ajay K');
ht.print();
// console.log(ht);
