function checkType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(target) {
  let valueType;
  let result;
  let type = checkType(target);
  if (type === 'Object') {
    //要先给返回值赋类型！
    result = {};
  } else if (type === 'Array') {
    result = [];
  } else {
    result = target;
    return;
  }
  for (let i in target) {
    // noinspection JSUnfilteredForInLoop
    valueType = checkType(target[i]);
    if (valueType === 'Object' || valueType === 'Array') {
      // noinspection JSUnfilteredForInLoop
      result[i] = deepClone(target[i]); //要给返回值赋值！
    } else {
      // noinspection JSUnfilteredForInLoop
      result[i] = target[i];
    }
  }
  return result;
}

export default deepClone;
