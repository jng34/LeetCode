
var MyQueue = function() {
  this.inStack = [];
  this.outStack = [];
};


//  in [1]
// out [2,3,4,5]


/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inStack.push(x);  
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while (this.inStack.length > 1) {
    this.outStack.unshift(this.inStack.pop());
  }    
  const front = this.inStack.pop();
  [this.inStack, this.outStack] = [this.outStack, this.inStack];
  return front;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while (this.inStack.length > 1) {
    this.outStack.unshift(this.inStack.pop());
  }
  const front = this.inStack[0];
  this.outStack.unshift(this.inStack.pop());
  [this.inStack, this.outStack] = [this.outStack, this.inStack];
  return front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.inStack.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */