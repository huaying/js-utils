// bind event to the upper level to increase the performance

function addEventListener(el, type, fn, selector) {
  if (typeof el === "string") {
    el = document.querySelector(el);
  }

  if (!selector) {
    el.addEventListener(type, fn);
  } else {
    el.addEventListener(type, function (e) {
      const target = e.target;
      if (target.matches(selector)) {
        fn.call(target, e);
      }
    });
  }
}

// example:
// addEventListener(
//   "#item",
//   "click",
//   function () {
//     console.log(this.innerHTML);
//   },
//   "li"
// );
