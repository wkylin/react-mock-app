function checkType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(target) {
  let valueType;
  let result;
  const type = checkType(target);
  if (type === 'Object') {
    result = {};
  } else if (type === 'Array') {
    result = [];
  } else {
    result = target;
    return;
  }
  for (const i in target) {
    valueType = checkType(target[i]);
    if (valueType === 'Object' || valueType === 'Array') {
      result[i] = deepClone(target[i]);
    } else {
      result[i] = target[i];
    }
  }
  return result;
}

export default deepClone;
