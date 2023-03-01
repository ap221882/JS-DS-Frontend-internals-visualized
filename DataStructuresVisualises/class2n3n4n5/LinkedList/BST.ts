class BSTNode {
  left: null | BSTNode;
  right: null | BSTNode;
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

  addNode(node: BSTNode, value: number) {
    //! ending condition of recursion
    if (node == null) {
      return new BSTNode(value);
    }

    //! append greater values to right and lesser values to left
    if (node.value < value) {
      node.right = this.addNode(node.right, value);
    } else if (node.value > value) {
      node.left = this.addNode(node.left, value);
    }
    return node;
  }

  removeNode(node: BSTNode | null, value: number): BSTNode | null {
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

  printTree(node: BSTNode | null) {
    if (node) {
      this.level++;
      this.printTree(node.right);
      console.log(' '.repeat(this.level * 4), node.value);

      this.printTree(node.left);
      this.level--;
    }
  }
}

const ped = new Tree();
console.log(ped);

ped.root = ped.addNode(ped.root, 2);
ped.root = ped.addNode(ped.root, 3);
ped.root = ped.addNode(ped.root, 4);
ped.printTree(ped.root);
console.log(ped);
