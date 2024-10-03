export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  let newArray;
  for (const value of array) {
    newArray = [...array];
    newArray[idx] = appendString + value;
    idx += 1;
  }

  return newArray;
}
