export function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// ES6 code
export function throttled(delay, fn) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

// function debounce(fn, wait = 50, immediate) {
//   let timer;
//   return function() {
//     if (immediate) {
//       fn.apply(this.arguments);
//     }
//     if (timer) {
//       clearTimeout(timer);
//     }
//
//     timer = setTimeout(() => {
//       fn.apply(this.arguments);
//     }, wait)
//   }
// }

// function throttle(fun, wait) {
//   let prev = new Date();
//   return function() {
//     const args = arguments;
//     const now = new Date();
//     if (now - prev > wait) {
//       fun.apply(this.args);
//       prev = new Date();
//     }
//   }
// }

// ES6
// function debounced(delay, fn) {
//   let timerId;
//   return function(...args) {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//       fn(...args);
//       timerId = null;
//     }, delay);
//   }
// }

// const myHandler = (event) => // do something with the event
// const dHandler = debounced(200, myHandler);
// domNode.addEventListener("input", dHandler);
