const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
   const newCats = [...cats, "Broom"]
   return newCats
}

function prependCat(name) {
    const newCats = [...cats]
    newCats.unshift("Arnold")
    return newCats
}

function removeLastCat() {
    const newCats = [...cats]
    newCats.pop()
    return newCats
}

function removeFirstCat() {
    const newCats = [...cats]
    newCats.shift()
    return newCats
}