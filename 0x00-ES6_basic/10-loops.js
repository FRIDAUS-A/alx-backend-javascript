export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const newArray = [...array];
  for (const value of array) {
    newArray[idx] = appendString + value;
    idx += 1;
  }

  return newArray;
}
