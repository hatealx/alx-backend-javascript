export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    const val = appendString + value;
    newArray.push(val);
  }

  return newArray;
}
