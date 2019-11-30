const promiseAll = function (promises) {
  const results = [];
  let completedPromises = 0;
  return new Promise(((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((value) => {
        results[index] = value;
        completedPromises += 1;
        if (completedPromises === promises.length) {
          resolve(results);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  }));
};
