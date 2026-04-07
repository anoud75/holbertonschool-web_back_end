export default function appendToEachArrayValue(array, appendString) {
  for (const idx of Object.keys(array)) {
    array[idx] = appendString + array[idx];
  }

  return array;
}
