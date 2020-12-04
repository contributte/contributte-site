export function escape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

export function numerize(num, digits = 1) {
  if (num === null) return null;
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  const floor = Math.floor(Math.abs(num).toString().length / 3);
  const value = +(num / Math.pow(1000, floor))
  return value.toFixed(value > 1 ? digits : 2) + units[floor - 1];
}
