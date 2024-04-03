export default function cleanSet(set, startString) {
  // Check if startString is provided and is a string
  if (typeof startString !== 'string') {
    return '';
  }

  const result = [];
  let found = false;

  set.forEach((value) => {
    // Check if value is a string and starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      found = true;
      result.push(value.slice(startString.length));
    }
  });

  // Return empty string if startString is not found in any set item
  if (!found) {
    return '';
  }

  return result.join('-');
}
