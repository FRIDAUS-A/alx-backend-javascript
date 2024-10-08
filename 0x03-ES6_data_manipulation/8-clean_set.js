export default function cleanSet(set, startString) {
  const arr = [];
  for (const text of set) {
    if (startString === '') startString = text; // eslint-disable-line no-param-reassign

    if (text.startsWith(startString)) arr.push(text.slice(startString.length));
  }
  return arr.join('-');
}
