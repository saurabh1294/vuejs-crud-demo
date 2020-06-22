// catches errors in functions of async/await form
function wrapAsync(fn) {
  return function(req, res, next) {
      fn(req, res, next).catch(next);
  };
}

module.exports = wrapAsync;