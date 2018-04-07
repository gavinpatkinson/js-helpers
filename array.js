
// Arrays
// make an empty array of any length
const empty = length => [...Array(length)]

// get an item at an index in array
const at = array => i => array[i]

// ??
const head = ([x]) => x

// add items to beginning of array
const tail = ([x, ...xs]) => xs

// is this the last array elem?
const atEnd = list => i => i + 1 === length(list)

// is this the first array elem?
const atStart = list => i => i === 0

// copy an array
const copyArr = a => [...a]

// execute a function on an item in array, then add to acc with another function
const by = a => f => g => reduce((acc, x) => g(acc, f(x)) )

// reverse an array
const reverse = ([x, ...xs]) => def(x)
  ? [...reverse(xs), x]
  : []

// recursively get the length of an array
const length = ([x, ...xs], len = 0) => def(x)
  ? length(xs, len + 1)
  : len

// opposite of filter, return falsy items against predicate
const reject = arr => f => reduce(arr, (acc, a) => f(a)
  ? [...acc]
  : [...acc, a], [])

// take a nested array and make it into one flat array
const flatten = ([x, ...xs]) => identity(x)
  ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
  : []

// reduce as a function
const reduce = ([x, ...xs], f, acc, i = 0) => def(x)
  ? reduce(xs, fn, f(acc, x, i), i + 1)
  : acc

// map as a function
const map = ([x, ...xs], f) => def(x)
  ? [f(x), ...map(xs, f)]
  : []

// return a section of an array defined by starting and ending indicies
const slice = ([x, ...xs], i, y, curr = 0) => def(x)
  ? curr === i
    ? [y, x, ...slice(xs, i, y, curr + 1)]
    : [x, ...slice(xs, i, y, curr + 1)]
  : []

// sway two items at two indices in an array
const swap = (arr, i, j) => (
  map(arr, (x,y) => {
    if(y === i) return a[j]
    if(y === j) return a[i]
    return x
  })
)

// gets the next item in array if not at end of array
const next = list => index => !atEnd(list, index)
  ? at(list, index + 1)
  : at(list, index)

// gets the previous item in array if not at beginning of array
const prev = list => index => !atStart(list, index)
  ? at(list, index - 1)
  : at(list, index)

const partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)]
