/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */
import { Heap } from "/libs/heap";
class PriorityQueue {
  /**
   * Creates a priority queue
   * @params {function} compare
   */
  constructor(compare, _values) {
    if (typeof compare !== "function") {
      throw new Error("PriorityQueue constructor expects a compare function");
    }
    this._heap = new Heap(compare, _values);
    if (_values) {
      this._heap.fix();
    }
  }
  /**
   * Returns an element with highest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  front() {
    return this._heap.root();
  }
  /**
   * Returns an element with lowest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  back() {
    return this._heap.leaf();
  }
  /**
   * Adds a value to the queue
   * @public
   * @param {number|string|object} value
   * @returns {PriorityQueue}
   */
  enqueue(value) {
    return this._heap.insert(value);
  }
  /**
   * Adds a value to the queue
   * @public
   * @param {number|string|object} value
   * @returns {PriorityQueue}
   */
  push(value) {
    return this.enqueue(value);
  }
  /**
   * Removes and returns an element with highest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  dequeue() {
    return this._heap.extractRoot();
  }
  /**
   * Removes and returns an element with highest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.dequeue();
  }
  /**
   * Removes all elements that match a criteria in the callback
   * @public
   * @param {function} cb
   * @returns {array}
   */
  remove(cb) {
    if (typeof cb !== "function") {
      throw new Error("PriorityQueue remove expects a callback");
    }
    const removed = [];
    const dequeued = [];
    while (!this.isEmpty()) {
      const popped = this.pop();
      if (cb(popped)) {
        removed.push(popped);
      } else {
        dequeued.push(popped);
      }
    }
    dequeued.forEach((val) => this.push(val));
    return removed;
  }
  /**
   * Returns the number of elements in the queue
   * @public
   * @returns {number}
   */
  size() {
    return this._heap.size();
  }
  /**
   * Checks if the queue is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._heap.isEmpty();
  }
  /**
   * Clears the queue
   * @public
   */
  clear() {
    this._heap.clear();
  }
  /**
   * Returns a sorted list of elements from highest to lowest priority
   * @public
   * @returns {array}
   */
  toArray() {
    return this._heap.clone().sort().reverse();
  }
  /**
   * Implements an iterable on the priority queue
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
   * Creates a priority queue from an existing array
   * @public
   * @static
   * @returns {PriorityQueue}
   */
  static fromArray(values, compare) {
    return new PriorityQueue(compare, values);
  }
}
export {
  PriorityQueue
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvcHJpb3JpdHlRdWV1ZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAY29weXJpZ2h0IDIwMjAgRXlhcyBSYW5qb3VzIDxleWFzLnJhbmpvdXNAZ21haWwuY29tPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuaW1wb3J0IHsgSGVhcCB9IGZyb20gXCIvbGlicy9oZWFwXCI7XG5cbi8qKlxuICogQGNsYXNzIFByaW9yaXR5UXVldWVcbiAqL1xuZXhwb3J0IGNsYXNzIFByaW9yaXR5UXVldWUge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIHByaW9yaXR5IHF1ZXVlXG4gICAqIEBwYXJhbXMge2Z1bmN0aW9ufSBjb21wYXJlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb21wYXJlLCBfdmFsdWVzKSB7XG4gICAgaWYgKHR5cGVvZiBjb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ByaW9yaXR5UXVldWUgY29uc3RydWN0b3IgZXhwZWN0cyBhIGNvbXBhcmUgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5faGVhcCA9IG5ldyBIZWFwKGNvbXBhcmUsIF92YWx1ZXMpO1xuICAgIGlmIChfdmFsdWVzKSB7XG4gICAgICB0aGlzLl9oZWFwLmZpeCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVsZW1lbnQgd2l0aCBoaWdoZXN0IHByaW9yaXR5IGluIHRoZSBxdWV1ZVxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8c3RyaW5nfG9iamVjdH1cbiAgICovXG4gIGZyb250KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFwLnJvb3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVsZW1lbnQgd2l0aCBsb3dlc3QgcHJpb3JpdHkgaW4gdGhlIHF1ZXVlXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhcC5sZWFmKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbHVlIHRvIHRoZSBxdWV1ZVxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xvYmplY3R9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcmlvcml0eVF1ZXVlfVxuICAgKi9cbiAgZW5xdWV1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLl9oZWFwLmluc2VydCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbHVlIHRvIHRoZSBxdWV1ZVxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xvYmplY3R9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcmlvcml0eVF1ZXVlfVxuICAgKi9cbiAgcHVzaCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmVucXVldWUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW5kIHJldHVybnMgYW4gZWxlbWVudCB3aXRoIGhpZ2hlc3QgcHJpb3JpdHkgaW4gdGhlIHF1ZXVlXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxuICAgKi9cbiAgZGVxdWV1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhcC5leHRyYWN0Um9vdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW5kIHJldHVybnMgYW4gZWxlbWVudCB3aXRoIGhpZ2hlc3QgcHJpb3JpdHkgaW4gdGhlIHF1ZXVlXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxuICAgKi9cbiAgcG9wKCkge1xuICAgIHJldHVybiB0aGlzLmRlcXVldWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBlbGVtZW50cyB0aGF0IG1hdGNoIGEgY3JpdGVyaWEgaW4gdGhlIGNhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcbiAgICogQHJldHVybnMge2FycmF5fVxuICAgKi9cbiAgcmVtb3ZlKGNiKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmlvcml0eVF1ZXVlIHJlbW92ZSBleHBlY3RzIGEgY2FsbGJhY2snKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkID0gW107XG4gICAgY29uc3QgZGVxdWV1ZWQgPSBbXTtcbiAgICB3aGlsZSAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zdCBwb3BwZWQgPSB0aGlzLnBvcCgpO1xuICAgICAgaWYgKGNiKHBvcHBlZCkpIHtcbiAgICAgICAgcmVtb3ZlZC5wdXNoKHBvcHBlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXF1ZXVlZC5wdXNoKHBvcHBlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVxdWV1ZWQuZm9yRWFjaCgodmFsKSA9PiB0aGlzLnB1c2godmFsKSk7XG4gICAgcmV0dXJuIHJlbW92ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBxdWV1ZVxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFwLnNpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5XG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFwLmlzRW1wdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHF1ZXVlXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX2hlYXAuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGxpc3Qgb2YgZWxlbWVudHMgZnJvbSBoaWdoZXN0IHRvIGxvd2VzdCBwcmlvcml0eVxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYXAuY2xvbmUoKS5zb3J0KCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudHMgYW4gaXRlcmFibGUgb24gdGhlIHByaW9yaXR5IHF1ZXVlXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIGxldCBzaXplID0gdGhpcy5zaXplKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgc2l6ZSAtPSAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnBvcCgpLFxuICAgICAgICAgIGRvbmU6IHNpemUgPT09IC0xXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcHJpb3JpdHkgcXVldWUgZnJvbSBhbiBleGlzdGluZyBhcnJheVxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybnMge1ByaW9yaXR5UXVldWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUFycmF5KHZhbHVlcywgY29tcGFyZSkge1xuICAgIHJldHVybiBuZXcgUHJpb3JpdHlRdWV1ZShjb21wYXJlLCB2YWx1ZXMpO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLFNBQVMsWUFBWTtBQUtkLE1BQU0sY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLekIsWUFBWSxTQUFTLFNBQVM7QUFDNUIsUUFBSSxPQUFPLFlBQVksWUFBWTtBQUNqQyxZQUFNLElB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
