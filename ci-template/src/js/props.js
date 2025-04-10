const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

export default function orderByProps(obj, sortProp) {
  const result = {};

  for (const prop of sortProp) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result[prop] = obj[prop];
    }
  }
  const remainingProps = Object.keys(obj)
    .filter(prop => !sortProp.includes(prop))
    .sort();
  for (const prop of remainingProps) {
    result[prop] = obj[prop];
  }
  return result;
}
