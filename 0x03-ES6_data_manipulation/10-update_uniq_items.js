export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((value, key) => {
    try {
      if (value === 1) map.set(key, 100);
    } catch (err) {
      throw new Error('Cannot process');
    }
  });
  return map;
}
