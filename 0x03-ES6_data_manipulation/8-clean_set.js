export default function cleanSet(set, start) {
  if (start === '') return '';
  const arr = [];
  for (const text of set) {
    if (text.startsWith(start)) arr.push(text.slice(start.length));
  }
  return arr.join('-');
}
