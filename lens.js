// Lenses ( i don't know how most of this works )
// i really don't know what this does either
const assoc = key => val => obj => { obj[key] = val; return obj }

// make a lens
const lens = get => set => ({ get, set })

// get a property of a lens
const view = lens => obj => lens.get(obj)

// set a value in a lens
const set = lens => val => obj => lens.set(val)(obj)

// i don't know what this does
const over = lens => fn => obj => set(lens)(fn(view(lens)(obj)))(obj)

// set a key and value in an object ??
// TODO test this
const lensProp = key => lens(prop(key))(assoc(key))

// set a key in an object
const prop = key => obj => obj[key]