
exports.min = function min (array) {
  if(typeof array != "undefined" && array != null && array.length>0) {
  let min_array = array[0];
  for (let i=1; i<array.length; i++) {
    if (array[i]<min_array) {
      min_array=array[i];
    }
  }
  return min_array;
}
return 0;
}

exports.max = function max (array) {
  if(typeof array != "undefined" && array != null && array.length>0) {
  let max_array = array[0];
  for (let i=1; i<array.length; i++) {
    if (array[i]>max_array) {
      max_array=array[i];
    }
  }
  return max_array;
}
return 0;
}

exports.avg = function avg (array) {
  if(typeof array != "undefined" && array != null && array.length>0) {
  let avg_array = 0;
  let sum=0;
  for (let i=0; i<array.length; i++) {
    sum+=array[i];
  }
  avg_array = sum / array.length;
  return avg_array;
}
return 0;
}
