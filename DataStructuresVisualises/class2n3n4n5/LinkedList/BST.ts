type Nullable<T> = null | T;

class BSTNode {
  left: Nullable<BSTNode>;
  right: Nullable<BSTNode>;
  value: number;
  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class Tree {
  root: null | BSTNode = null;
  level = 0;

  constructor(...values: number[]) {
    values.forEach((value) => this._addNode(this.root, value));
  }

  _addNode(node: BSTNode, value: number) {
    //! ending condition of recursion
    if (node == null) {
      return new BSTNode(value);
    }

    //! append greater values to right and lesser values to left
    if (node.value < value) {
      node.right = this._addNode(node.right, value);
    } else if (node.value > value) {
      node.left = this._addNode(node.left, value);
    }
    return node;
  }

  removeNode(node: Nullable<BSTNode>, value: number): Nullable<BSTNode> {
    //~? if there is no node
    if (null == node) {
      return null;
    }

    //~? if value is greater than or less than recursively calling the function until we reach the leaf node
    if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else {
      //~? For nodes that are leaf node with only one child
      // if ( node.left == null && node.right == null )  return null;
      // if ( node.left != null && node.right == null) return node.left
      // if ( node.left == null && node.right != null) return node.right
      //~# is same as writing as
      if (node.left == null || node.right == null) {
        return node.left ?? node.right;
      }
      //~? WHEN Both children are present
      let successor = node.right;
      while (successor.left != null) {
        successor = successor.left;
      }

      node.value = successor.value;
      node.right = this.removeNode(node.right, successor.value);
    }
    return node;
  }

  _printTree(node: Nullable<BSTNode>) {
    if (node) {
      this.level++;
      this._printTree(node.right);
      console.log(' '.repeat(this.level * 4), node.value);

      this._printTree(node.left);
      this.level--;
    }
  }

  add(...args: number[]) {
    args.forEach((arg) => this._addNode(this.root, arg));
  }

  printTree() {
    this._printTree(this.root);
  }
}

const ped = new Tree(5, 7, 1);
console.log(ped);

ped.add(2, 3, 4);

ped.printTree();
console.log(ped);
