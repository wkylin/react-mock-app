export function localStore(namespace, data) {
  if (arguments.length > 1) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }
  return localStorage[namespace] && JSON.parse(localStorage[namespace]);
}

export function sessionStore(namespace, data) {
  if (arguments.length > 1) {
    return sessionStorage.setItem(namespace, JSON.stringify(data));
  }
  return sessionStorage[namespace] && JSON.parse(sessionStorage[namespace]);
}

// 生成从minNum到maxNum的随机数
export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}

export function toThousands(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

export function randomHexColor() {
  return `#${(`0000${(Math.random() * 0x1000000 << 0).toString(16)}`).substr(-6)}`;
}

