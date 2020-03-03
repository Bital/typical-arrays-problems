
exports.min = function min (array) {
  if(!Array.isArray(array) || !array.length) {
  	return 0;
  }
  return array.reduce((minval, cur) => (minval > cur) ? cur : minval, array[0]);
}

exports.max = function max (array) {
  if(!Array.isArray(array) || !array.length) {
  	return 0;
  }
  return array.reduce((minval, cur) => (minval < cur) ? cur : minval, array[0]);
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || !array.length) {
  	return 0;
  }
  return array.reduce((res, cur) => res += cur, 0) / array.length;
}
