function isBigger(v1, v2) {
  return v1 > v2
}

function copyList(list) {
  let tablica = []
  for (let i = 0; i < list.length; i++) {
    tablica[i] = list[i]
  }

  return tablica
}


function Sortowanie(array, typ = 'malejaco', compare = isBigger) {
  let internalCompare = compare

  if (typ === "rosnaco") {
    internalCompare = (v1, v2) => !compare(v1, v2)
  }

  const tablica = copyList(array)

  for (let i = 0; i < tablica.length - 1; i++) {
    for (let j = 0; j < tablica.length - 1 - i; j++) {
      if (internalCompare(tablica[j + 1], tablica[j])) {
        let bufor = tablica[j]
        tablica[j] = tablica[j + 1]
        tablica[j + 1] = bufor
      }
    }
  }
  return tablica
}

module.exports = Sortowanie
