// Helper for returning a unique string.
export default function() {
  let x = new Date().getTime();
  x = x + '_';
  x = x + Math.random();
  x = x.replace('0.', '');

  return x;
}
