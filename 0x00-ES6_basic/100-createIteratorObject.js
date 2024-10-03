export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let iter = [];
  for (const name of Object.values(allEmployees)) {
    iter = iter.concat(name);
  }
  return iter;
}
