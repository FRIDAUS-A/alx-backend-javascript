export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }
  const arr = [];
  for (const text of set) {
    if (text.startsWith(startString)) arr.push(text.slice(startString.length));
  }
  return arr.join('-');
}
