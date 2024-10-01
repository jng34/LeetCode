
var MyCalendar = function() {
    this.events = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  this.events.sort((a,b) => a[0]-b[1]);
  for (let event of this.events) {
    const [eStart, eEnd] = event;
    if (eStart < end && start < eEnd) return false;
  }
  this.events.push([start, end]);
  return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */