//数组去重--obj
// function distinctObj(arr, key) {
//   let i, j, result = [], len = arr.length;
//   for (i = 0; i < len; i++) {
//     for (j = i + 1; j < len; j++) {
//       if (arr[i][key] === arr[j][key]) {
//         j = ++i;
//       }
//     }
//     result.push(arr[i]);
//   }
//   return result;
// }

function distinctObj(arrObj, keyName) {
  let hashObj = {};
  return arrObj.reduce(function(item, next) {
    if (!hashObj[next[keyName]]) {
      hashObj[next[keyName]] = item.push(next);
    }
    // hashObj[next[keyName]] ? '' : hashObj[next[keyName]] = true && item.push(next);
    return item;
  }, []);
}

export default distinctObj;
