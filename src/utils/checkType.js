function checkType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

export function randomHex() {
  const hexStr = Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase();
  return `#${hexStr}`;
}

export default checkType;
