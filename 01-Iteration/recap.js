function reduce(array, reducer, init) {
  let accumulator = array[0];
  let startIndex = 1;

  if (init) {
    accumulator = init;
    startIndex = 0;
  }

  for (let index = startIndex; index < array.length; index += 1) {
    accumulator = reducer(accumulator, array[index]);
  }

  return accumulator;
}

function filter(array, callback) {
  return array.reduce((acc, element) => {
    if (callback(element) === true) {
      acc.push(element);
    }
    return acc;
  },[]);
}

function map(array, callback) {
  return array.reduce((acc, element) => {
    acc.push(callback(element));
    return acc;
  }, []);
}