export default function hasValuesFromArray(array, arrayToCheck) {
  const set = new Set(array);
  let status = false;
  for (const check of arrayToCheck) {
    if (set.has(check)) {
      status = true;
    } else {
      status = false;
    }
  }
  return status;
}
