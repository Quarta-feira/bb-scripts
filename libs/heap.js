/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */
class Heap {
  /**
   * @param {function} compare
   * @param {array} [_values]
   * @param {number|string|object} [_leaf]
   */
  constructor(compare, _values, _leaf) {
    if (typeof compare !== "function") {
      throw new Error("Heap constructor expects a compare function");
    }
    this._compare = compare;
    this._nodes = Array.isArray(_values) ? _values : [];
    this._leaf = _leaf || null;
  }
  /**
   * Converts the heap to a cloned array without sorting.
   * @public
   * @returns {Array}
   */
  toArray() {
    return Array.from(this._nodes);
  }
  /**
   * Checks if a parent has a left child
   * @private
   */
  _hasLeftChild(parentIndex) {
    const leftChildIndex = parentIndex * 2 + 1;
    return leftChildIndex < this.size();
  }
  /**
   * Checks if a parent has a right child
   * @private
   */
  _hasRightChild(parentIndex) {
    const rightChildIndex = parentIndex * 2 + 2;
    return rightChildIndex < this.size();
  }
  /**
   * Compares two nodes
   * @private
   */
  _compareAt(i, j) {
    return this._compare(this._nodes[i], this._nodes[j]);
  }
  /**
   * Swaps two nodes in the heap
   * @private
   */
  _swap(i, j) {
    const temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }
  /**
   * Checks if parent and child should be swapped
   * @private
   */
  _shouldSwap(parentIndex, childIndex) {
    if (parentIndex < 0 || parentIndex >= this.size()) {
      return false;
    }
    if (childIndex < 0 || childIndex >= this.size()) {
      return false;
    }
    return this._compareAt(parentIndex, childIndex) > 0;
  }
  /**
   * Compares children of a parent
   * @private
   */
  _compareChildrenOf(parentIndex) {
    if (!this._hasLeftChild(parentIndex) && !this._hasRightChild(parentIndex)) {
      return -1;
    }
    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;
    if (!this._hasLeftChild(parentIndex)) {
      return rightChildIndex;
    }
    if (!this._hasRightChild(parentIndex)) {
      return leftChildIndex;
    }
    const compare = this._compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }
  /**
   * Compares two children before a position
   * @private
   */
  _compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const compare = this._compareAt(rightChildIndex, leftChildIndex);
    if (compare <= 0 && rightChildIndex < index) {
      return rightChildIndex;
    }
    return leftChildIndex;
  }
  /**
   * Recursively bubbles up a node if it's in a wrong position
   * @private
   */
  _heapifyUp(startIndex) {
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }
  /**
   * Recursively bubbles down a node if it's in a wrong position
   * @private
   */
  _heapifyDown(startIndex) {
    let parentIndex = startIndex;
    let childIndex = this._compareChildrenOf(parentIndex);
    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this._compareChildrenOf(parentIndex);
    }
  }
  /**
   * Recursively bubbles down a node before a given index
   * @private
   */
  _heapifyDownUntil(index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;
    while (leftChildIndex < index) {
      childIndex = this._compareChildrenBefore(
        index,
        leftChildIndex,
        rightChildIndex
      );
      if (this._shouldSwap(parentIndex, childIndex)) {
        this._swap(parentIndex, childIndex);
      }
      parentIndex = childIndex;
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
    }
  }
  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  insert(value) {
    this._nodes.push(value);
    this._heapifyUp(this.size() - 1);
    if (this._leaf === null || this._compare(value, this._leaf) > 0) {
      this._leaf = value;
    }
    return this;
  }
  /**
   * Inserts a new value into the heap
   * @public
   * @param {number|string|object} value
   * @returns {Heap}
   */
  push(value) {
    return this.insert(value);
  }
  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  extractRoot() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.root();
    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this._heapifyDown(0);
    if (root === this._leaf) {
      this._leaf = this.root();
    }
    return root;
  }
  /**
   * Removes and returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.extractRoot();
  }
  /**
   * Applies heap sort and return the values sorted by priority
   * @public
   * @returns {array}
   */
  sort() {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this._swap(0, i);
      this._heapifyDownUntil(i);
    }
    return this._nodes;
  }
  /**
   * Fixes node positions in the heap
   * @public
   * @returns {Heap}
   */
  fix() {
    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i -= 1) {
      this._heapifyDown(i);
    }
    for (let i = Math.floor(this.size() / 2); i < this.size(); i += 1) {
      const value = this._nodes[i];
      if (this._leaf === null || this._compare(value, this._leaf) > 0) {
        this._leaf = value;
      }
    }
    return this;
  }
  /**
   * Verifies that all heap nodes are in the right position
   * @public
   * @returns {boolean}
   */
  isValid() {
    const isValidRecursive = (parentIndex) => {
      let isValidLeft = true;
      let isValidRight = true;
      if (this._hasLeftChild(parentIndex)) {
        const leftChildIndex = parentIndex * 2 + 1;
        if (this._compareAt(parentIndex, leftChildIndex) > 0) {
          return false;
        }
        isValidLeft = isValidRecursive(leftChildIndex);
      }
      if (this._hasRightChild(parentIndex)) {
        const rightChildIndex = parentIndex * 2 + 2;
        if (this._compareAt(parentIndex, rightChildIndex) > 0) {
          return false;
        }
        isValidRight = isValidRecursive(rightChildIndex);
      }
      return isValidLeft && isValidRight;
    };
    return isValidRecursive(0);
  }
  /**
   * Returns a shallow copy of the heap
   * @public
   * @returns {Heap}
   */
  clone() {
    return new Heap(this._compare, this._nodes.slice(), this._leaf);
  }
  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  root() {
    if (this.isEmpty()) {
      return null;
    }
    return this._nodes[0];
  }
  /**
   * Returns the root node in the heap
   * @public
   * @returns {number|string|object}
   */
  top() {
    return this.root();
  }
  /**
   * Returns a leaf node in the heap
   * @public
   * @returns {number|string|object}
   */
  leaf() {
    return this._leaf;
  }
  /**
   * Returns the number of nodes in the heap
   * @public
   * @returns {number}
   */
  size() {
    return this._nodes.length;
  }
  /**
   * Checks if the heap is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }
  /**
   * Clears the heap
   * @public
   */
  clear() {
    this._nodes = [];
    this._leaf = null;
  }
  /**
   * Implements an iterable on the heap
   * @public
   */
  [Symbol.iterator]() {
    let size = this.size();
    return {
      next: () => {
        size -= 1;
        return {
          value: this.pop(),
          done: size === -1
        };
      }
    };
  }
  /**
   * Builds a heap from a array of values
   * @public
   * @static
   * @param {array} values
   * @param {function} compare
   * @returns {Heap}
   */
  static heapify(values, compare) {
    if (!Array.isArray(values)) {
      throw new Error("Heap.heapify expects an array of values");
    }
    if (typeof compare !== "function") {
      throw new Error("Heap.heapify expects a compare function");
    }
    return new Heap(compare, values).fix();
  }
  /**
   * Checks if a list of values is a valid heap
   * @public
   * @static
   * @param {array} values
   * @param {function} compare
   * @returns {boolean}
   */
  static isHeapified(values, compare) {
    return new Heap(compare, values).isValid();
  }
}
export {
  Heap
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvaGVhcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBjb3B5cmlnaHQgMjAyMCBFeWFzIFJhbmpvdXMgPGV5YXMucmFuam91c0BnbWFpbC5jb20+XG4gKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBIZWFwIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAgICogQHBhcmFtIHthcnJheX0gW192YWx1ZXNdXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xvYmplY3R9IFtfbGVhZl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbXBhcmUsIF92YWx1ZXMsIF9sZWFmKSB7XG4gICAgaWYgKHR5cGVvZiBjb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlYXAgY29uc3RydWN0b3IgZXhwZWN0cyBhIGNvbXBhcmUgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tcGFyZSA9IGNvbXBhcmU7XG4gICAgdGhpcy5fbm9kZXMgPSBBcnJheS5pc0FycmF5KF92YWx1ZXMpID8gX3ZhbHVlcyA6IFtdO1xuICAgIHRoaXMuX2xlYWYgPSBfbGVhZiB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBoZWFwIHRvIGEgY2xvbmVkIGFycmF5IHdpdGhvdXQgc29ydGluZy5cbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX25vZGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBwYXJlbnQgaGFzIGEgbGVmdCBjaGlsZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhc0xlZnRDaGlsZChwYXJlbnRJbmRleCkge1xuICAgIGNvbnN0IGxlZnRDaGlsZEluZGV4ID0gKHBhcmVudEluZGV4ICogMikgKyAxO1xuICAgIHJldHVybiBsZWZ0Q2hpbGRJbmRleCA8IHRoaXMuc2l6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHBhcmVudCBoYXMgYSByaWdodCBjaGlsZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhc1JpZ2h0Q2hpbGQocGFyZW50SW5kZXgpIHtcbiAgICBjb25zdCByaWdodENoaWxkSW5kZXggPSAocGFyZW50SW5kZXggKiAyKSArIDI7XG4gICAgcmV0dXJuIHJpZ2h0Q2hpbGRJbmRleCA8IHRoaXMuc2l6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmVzIHR3byBub2Rlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbXBhcmVBdChpLCBqKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmUodGhpcy5fbm9kZXNbaV0sIHRoaXMuX25vZGVzW2pdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2FwcyB0d28gbm9kZXMgaW4gdGhlIGhlYXBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zd2FwKGksIGopIHtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5fbm9kZXNbaV07XG4gICAgdGhpcy5fbm9kZXNbaV0gPSB0aGlzLl9ub2Rlc1tqXTtcbiAgICB0aGlzLl9ub2Rlc1tqXSA9IHRlbXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHBhcmVudCBhbmQgY2hpbGQgc2hvdWxkIGJlIHN3YXBwZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG91bGRTd2FwKHBhcmVudEluZGV4LCBjaGlsZEluZGV4KSB7XG4gICAgaWYgKHBhcmVudEluZGV4IDwgMCB8fCBwYXJlbnRJbmRleCA+PSB0aGlzLnNpemUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjaGlsZEluZGV4IDwgMCB8fCBjaGlsZEluZGV4ID49IHRoaXMuc2l6ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmVBdChwYXJlbnRJbmRleCwgY2hpbGRJbmRleCkgPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmVzIGNoaWxkcmVuIG9mIGEgcGFyZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29tcGFyZUNoaWxkcmVuT2YocGFyZW50SW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0xlZnRDaGlsZChwYXJlbnRJbmRleCkgJiYgIXRoaXMuX2hhc1JpZ2h0Q2hpbGQocGFyZW50SW5kZXgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdENoaWxkSW5kZXggPSAocGFyZW50SW5kZXggKiAyKSArIDE7XG4gICAgY29uc3QgcmlnaHRDaGlsZEluZGV4ID0gKHBhcmVudEluZGV4ICogMikgKyAyO1xuXG4gICAgaWYgKCF0aGlzLl9oYXNMZWZ0Q2hpbGQocGFyZW50SW5kZXgpKSB7XG4gICAgICByZXR1cm4gcmlnaHRDaGlsZEluZGV4O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5faGFzUmlnaHRDaGlsZChwYXJlbnRJbmRleCkpIHtcbiAgICAgIHJldHVybiBsZWZ0Q2hpbGRJbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wYXJlID0gdGhpcy5fY29tcGFyZUF0KGxlZnRDaGlsZEluZGV4LCByaWdodENoaWxkSW5kZXgpO1xuICAgIHJldHVybiBjb21wYXJlID4gMCA/IHJpZ2h0Q2hpbGRJbmRleCA6IGxlZnRDaGlsZEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmVzIHR3byBjaGlsZHJlbiBiZWZvcmUgYSBwb3NpdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbXBhcmVDaGlsZHJlbkJlZm9yZShpbmRleCwgbGVmdENoaWxkSW5kZXgsIHJpZ2h0Q2hpbGRJbmRleCkge1xuICAgIGNvbnN0IGNvbXBhcmUgPSB0aGlzLl9jb21wYXJlQXQocmlnaHRDaGlsZEluZGV4LCBsZWZ0Q2hpbGRJbmRleCk7XG5cbiAgICBpZiAoY29tcGFyZSA8PSAwICYmIHJpZ2h0Q2hpbGRJbmRleCA8IGluZGV4KSB7XG4gICAgICByZXR1cm4gcmlnaHRDaGlsZEluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0Q2hpbGRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBidWJibGVzIHVwIGEgbm9kZSBpZiBpdCdzIGluIGEgd3JvbmcgcG9zaXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oZWFwaWZ5VXAoc3RhcnRJbmRleCkge1xuICAgIGxldCBjaGlsZEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICBsZXQgcGFyZW50SW5kZXggPSBNYXRoLmZsb29yKChjaGlsZEluZGV4IC0gMSkgLyAyKTtcblxuICAgIHdoaWxlICh0aGlzLl9zaG91bGRTd2FwKHBhcmVudEluZGV4LCBjaGlsZEluZGV4KSkge1xuICAgICAgdGhpcy5fc3dhcChwYXJlbnRJbmRleCwgY2hpbGRJbmRleCk7XG4gICAgICBjaGlsZEluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgICBwYXJlbnRJbmRleCA9IE1hdGguZmxvb3IoKGNoaWxkSW5kZXggLSAxKSAvIDIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBidWJibGVzIGRvd24gYSBub2RlIGlmIGl0J3MgaW4gYSB3cm9uZyBwb3NpdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hlYXBpZnlEb3duKHN0YXJ0SW5kZXgpIHtcbiAgICBsZXQgcGFyZW50SW5kZXggPSBzdGFydEluZGV4O1xuICAgIGxldCBjaGlsZEluZGV4ID0gdGhpcy5fY29tcGFyZUNoaWxkcmVuT2YocGFyZW50SW5kZXgpO1xuXG4gICAgd2hpbGUgKHRoaXMuX3Nob3VsZFN3YXAocGFyZW50SW5kZXgsIGNoaWxkSW5kZXgpKSB7XG4gICAgICB0aGlzLl9zd2FwKHBhcmVudEluZGV4LCBjaGlsZEluZGV4KTtcbiAgICAgIHBhcmVudEluZGV4ID0gY2hpbGRJbmRleDtcbiAgICAgIGNoaWxkSW5kZXggPSB0aGlzLl9jb21wYXJlQ2hpbGRyZW5PZihwYXJlbnRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGJ1YmJsZXMgZG93biBhIG5vZGUgYmVmb3JlIGEgZ2l2ZW4gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oZWFwaWZ5RG93blVudGlsKGluZGV4KSB7XG4gICAgbGV0IHBhcmVudEluZGV4ID0gMDtcbiAgICBsZXQgbGVmdENoaWxkSW5kZXggPSAxO1xuICAgIGxldCByaWdodENoaWxkSW5kZXggPSAyO1xuICAgIGxldCBjaGlsZEluZGV4O1xuXG4gICAgd2hpbGUgKGxlZnRDaGlsZEluZGV4IDwgaW5kZXgpIHtcbiAgICAgIGNoaWxkSW5kZXggPSB0aGlzLl9jb21wYXJlQ2hpbGRyZW5CZWZvcmUoXG4gICAgICAgIGluZGV4LFxuICAgICAgICBsZWZ0Q2hpbGRJbmRleCxcbiAgICAgICAgcmlnaHRDaGlsZEluZGV4XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5fc2hvdWxkU3dhcChwYXJlbnRJbmRleCwgY2hpbGRJbmRleCkpIHtcbiAgICAgICAgdGhpcy5fc3dhcChwYXJlbnRJbmRleCwgY2hpbGRJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudEluZGV4ID0gY2hpbGRJbmRleDtcbiAgICAgIGxlZnRDaGlsZEluZGV4ID0gKHBhcmVudEluZGV4ICogMikgKyAxO1xuICAgICAgcmlnaHRDaGlsZEluZGV4ID0gKHBhcmVudEluZGV4ICogMikgKyAyO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgbmV3IHZhbHVlIGludG8gdGhlIGhlYXBcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8b2JqZWN0fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7SGVhcH1cbiAgICovXG4gIGluc2VydCh2YWx1ZSkge1xuICAgIHRoaXMuX25vZGVzLnB1c2godmFsdWUpO1xuICAgIHRoaXMuX2hlYXBpZnlVcCh0aGlzLnNpemUoKSAtIDEpO1xuICAgIGlmICh0aGlzLl9sZWFmID09PSBudWxsIHx8IHRoaXMuX2NvbXBhcmUodmFsdWUsIHRoaXMuX2xlYWYpID4gMCkge1xuICAgICAgdGhpcy5fbGVhZiA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgbmV3IHZhbHVlIGludG8gdGhlIGhlYXBcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8b2JqZWN0fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7SGVhcH1cbiAgICovXG4gIHB1c2godmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW5kIHJldHVybnMgdGhlIHJvb3Qgbm9kZSBpbiB0aGUgaGVhcFxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8c3RyaW5nfG9iamVjdH1cbiAgICovXG4gIGV4dHJhY3RSb290KCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdCgpO1xuICAgIHRoaXMuX25vZGVzWzBdID0gdGhpcy5fbm9kZXNbdGhpcy5zaXplKCkgLSAxXTtcbiAgICB0aGlzLl9ub2Rlcy5wb3AoKTtcbiAgICB0aGlzLl9oZWFwaWZ5RG93bigwKTtcblxuICAgIGlmIChyb290ID09PSB0aGlzLl9sZWFmKSB7XG4gICAgICB0aGlzLl9sZWFmID0gdGhpcy5yb290KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbmQgcmV0dXJucyB0aGUgcm9vdCBub2RlIGluIHRoZSBoZWFwXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxuICAgKi9cbiAgcG9wKCkge1xuICAgIHJldHVybiB0aGlzLmV4dHJhY3RSb290KCk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBoZWFwIHNvcnQgYW5kIHJldHVybiB0aGUgdmFsdWVzIHNvcnRlZCBieSBwcmlvcml0eVxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIHNvcnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc2l6ZSgpIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgdGhpcy5fc3dhcCgwLCBpKTtcbiAgICAgIHRoaXMuX2hlYXBpZnlEb3duVW50aWwoaSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXhlcyBub2RlIHBvc2l0aW9ucyBpbiB0aGUgaGVhcFxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtIZWFwfVxuICAgKi9cbiAgZml4KCkge1xuICAgIC8vIGZpeCBub2RlIHBvc2l0aW9uc1xuICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKHRoaXMuc2l6ZSgpIC8gMikgLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgdGhpcy5faGVhcGlmeURvd24oaSk7XG4gICAgfVxuXG4gICAgLy8gZml4IGxlYWYgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcih0aGlzLnNpemUoKSAvIDIpOyBpIDwgdGhpcy5zaXplKCk7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9ub2Rlc1tpXTtcbiAgICAgIGlmICh0aGlzLl9sZWFmID09PSBudWxsIHx8IHRoaXMuX2NvbXBhcmUodmFsdWUsIHRoaXMuX2xlYWYpID4gMCkge1xuICAgICAgICB0aGlzLl9sZWFmID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhhdCBhbGwgaGVhcCBub2RlcyBhcmUgaW4gdGhlIHJpZ2h0IHBvc2l0aW9uXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkKCkge1xuICAgIGNvbnN0IGlzVmFsaWRSZWN1cnNpdmUgPSAocGFyZW50SW5kZXgpID0+IHtcbiAgICAgIGxldCBpc1ZhbGlkTGVmdCA9IHRydWU7XG4gICAgICBsZXQgaXNWYWxpZFJpZ2h0ID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuX2hhc0xlZnRDaGlsZChwYXJlbnRJbmRleCkpIHtcbiAgICAgICAgY29uc3QgbGVmdENoaWxkSW5kZXggPSAocGFyZW50SW5kZXggKiAyKSArIDE7XG4gICAgICAgIGlmICh0aGlzLl9jb21wYXJlQXQocGFyZW50SW5kZXgsIGxlZnRDaGlsZEluZGV4KSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaXNWYWxpZExlZnQgPSBpc1ZhbGlkUmVjdXJzaXZlKGxlZnRDaGlsZEluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hhc1JpZ2h0Q2hpbGQocGFyZW50SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0Q2hpbGRJbmRleCA9IChwYXJlbnRJbmRleCAqIDIpICsgMjtcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmVBdChwYXJlbnRJbmRleCwgcmlnaHRDaGlsZEluZGV4KSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaXNWYWxpZFJpZ2h0ID0gaXNWYWxpZFJlY3Vyc2l2ZShyaWdodENoaWxkSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNWYWxpZExlZnQgJiYgaXNWYWxpZFJpZ2h0O1xuICAgIH07XG5cbiAgICByZXR1cm4gaXNWYWxpZFJlY3Vyc2l2ZSgwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBoZWFwXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge0hlYXB9XG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IEhlYXAodGhpcy5fY29tcGFyZSwgdGhpcy5fbm9kZXMuc2xpY2UoKSwgdGhpcy5fbGVhZik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCBub2RlIGluIHRoZSBoZWFwXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxuICAgKi9cbiAgcm9vdCgpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ub2Rlc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IG5vZGUgaW4gdGhlIGhlYXBcbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfHN0cmluZ3xvYmplY3R9XG4gICAqL1xuICB0b3AoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsZWFmIG5vZGUgaW4gdGhlIGhlYXBcbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfHN0cmluZ3xvYmplY3R9XG4gICAqL1xuICBsZWFmKCkge1xuICAgIHJldHVybiB0aGlzLl9sZWFmO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgaGVhcFxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2Rlcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBoZWFwIGlzIGVtcHR5XG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGhlYXBcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9sZWFmID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzIGFuIGl0ZXJhYmxlIG9uIHRoZSBoZWFwXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIGxldCBzaXplID0gdGhpcy5zaXplKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgc2l6ZSAtPSAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnBvcCgpLFxuICAgICAgICAgIGRvbmU6IHNpemUgPT09IC0xXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBoZWFwIGZyb20gYSBhcnJheSBvZiB2YWx1ZXNcbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7YXJyYXl9IHZhbHVlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlXG4gICAqIEByZXR1cm5zIHtIZWFwfVxuICAgKi9cbiAgc3RhdGljIGhlYXBpZnkodmFsdWVzLCBjb21wYXJlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGVhcC5oZWFwaWZ5IGV4cGVjdHMgYW4gYXJyYXkgb2YgdmFsdWVzJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlYXAuaGVhcGlmeSBleHBlY3RzIGEgY29tcGFyZSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSGVhcChjb21wYXJlLCB2YWx1ZXMpLmZpeCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIGxpc3Qgb2YgdmFsdWVzIGlzIGEgdmFsaWQgaGVhcFxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHthcnJheX0gdmFsdWVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNIZWFwaWZpZWQodmFsdWVzLCBjb21wYXJlKSB7XG4gICAgcmV0dXJuIG5ldyBIZWFwKGNvbXBhcmUsIHZhbHVlcykuaXNWYWxpZCgpO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNTyxNQUFNLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNaEIsWUFBWSxTQUFTLFNBQVMsT0FBTztBQUNuQyxRQUFJLE9BQU8sWUFBWSxZQUFZO0FBQ2pDLFlBQU0sSUFBSSxNQUFNLDZDQUE2QztBQUFBLElBQy9EO0FBQ0EsU0FBSyxXQUFXO0FBQ2hCLFNBQUssU0FBUyxNQUFNLFFBQVEsT0FBTyxJQUFJLFVBQVUsQ0FBQztBQUNsRCxTQUFLLFFBQVEsU0FBUztBQUFBLEVBQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsVUFBVTtBQUNSLFdBQU8sTUFBTSxLQUFLLEtBQUssTUFBTTtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGNBQWMsYUFBYTtBQUN6QixVQUFNLGlCQUFrQixjQUFjLElBQUs7QUFDM0MsV0FBTyxpQkFBaUIsS0FBSyxLQUFLO0FBQUEsRUFDcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsZUFBZSxhQUFhO0FBQzFCLFVBQU0sa0JBQW1CLGNBQWMsSUFBSztBQUM1QyxXQUFPLGtCQUFrQixLQUFLLEtBQUs7QUFBQSxFQUNyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxXQUFXLEdB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QUNMLFFBQUksS0FBSyxRQUFRLEdBQUc7QUFDbEIsYUFBTztBQUFBLElBQ1Q7QUFFQSxXQUFPLEtBQUssT0FBTyxDQUFDO0FBQUEsRUFDdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxNQUFNO0FBQ0osV0FBTyxLQUFLLEtBQUs7QUFBQSxFQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLE9BQU87QUFDTCxXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsT0FBTztBQUNMLFdBQU8sS0FBSyxPQUFPO0FBQUEsRUFDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxVQUFVO0FBQ1IsV0FBTyxLQUFLLEtBQUssTUFBTTtBQUFBLEVBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFFBQVE7QUFDTixTQUFLLFNBQVMsQ0FBQztBQUNmLFNBQUssUUFBUTtBQUFBLEVBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsQ0FBQyxPQUFPLFFBQVEsSUFBSTtBQUNsQixRQUFJLE9BQU8sS0FBSyxLQUFLO0FBQ3JCLFdBQU87QUFBQSxNQUNMLE1BQU0sTUFBTTtBQUNWLGdCQUFRO0FBQ1IsZUFBTztBQUFBLFVBQ0wsT0FBTyxLQUFLLElBQUk7QUFBQSxVQUNoQixNQUFNLFNBQVM7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVBLE9BQU8sUUFBUSxRQUFRLFNBQVM7QUFDOUIsUUFBSSxDQUFDLE1BQU0sUUFBUSxNQUFNLEdBQUc7QUFDMUIsWUFBTSxJQUFJLE1BQU0seUNBQXlDO0FBQUEsSUFDM0Q7QUFFQSxRQUFJLE9BQU8sWUFBWSxZQUFZO0FBQ2pDLFlBQU0sSUFBSSxNQUFNLHlDQUF5QztBQUFBLElBQzNEO0FBRUEsV0FBTyxJQUFJLEtBQUssU0FBUyxNQUFNLEVBQUUsSUFBSTtBQUFBLEVBQ3ZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUEsT0FBTyxZQUFZLFFBQVEsU0FBUztBQUNsQyxXQUFPLElBQUksS0FBSyxTQUFTLE1BQU0sRUFBRSxRQUFRO0FBQUEsRUFDM0M7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
