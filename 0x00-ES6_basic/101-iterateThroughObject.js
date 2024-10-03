export default function iterateThroughObject(reportWithIterator) {
  let iterateString = '';
  let idx = 0;
  for (const name of reportWithIterator) {
    iterateString = iterateString.concat(name);
    if (idx !== reportWithIterator.length - 1) {
      iterateString = iterateString.concat(' | ');
    }
    idx += 1;
  }
  return iterateString;
}
