function Sortowanie(array, typ = 'malejaco', isFirst = function(value1, value2){value1 < value2}){  
  let tablica = []
  for (let i = 0; i < array.length; i++){
    tablica[i] = array[i]
  }
  let bufor
  //if (typeof(value1) === 'number'){
  if (typeof(tablica[0]) === 'number'){ // działa pod warunkiem, że z faktu, że pierwszy element tablicy jest liczbą wynika, że wszystkie są liczbami
  if (typ === 'rosnaco'){
    for (let i = 0; i< tablica.length-1; i++){
      for (let j = 0; j< tablica.length-1-i;j++){
        if(tablica[j+1]<tablica[j]){
          bufor = tablica[j]
          tablica[j] = tablica[j+1]
          tablica[j+1] = bufor
        }
      }
    }
  } else{
    for (let i = 0; i< tablica.length-1; i++){
      for (let j = 0; j< tablica.length-i-1; j++){
        if(tablica[j+1]>tablica[j]){
          bufor = tablica[j]
          tablica[j] = tablica[j+1]
          tablica [j+1] = bufor
        }
      }
    }
  }

} else {
    if (typ === 'rosnaco'){
      for (let i = 0; i< tablica.length-1; i++){
        for (let j = 0; j< tablica.length-1-i; j++){
          value1 = tablica[j]
          value2 = tablica[j+1]
          if (isFirst(value1, value2) === false){
            bufor = tablica[j]
            tablica[j] = tablica[j+1]
            tablica[j+1] = bufor
          }

        }
    
      }
    } else {
        for (let i = 0; i< tablica.length-1; i++){
          for(let j = 0; j< tablica.length-1-i; j++){
            //if (isFirst === false){
              value1 = tablica[j]
              value2 = tablica[j+1]
              if (isFirst(value1, value2) === true){
              bufor = tablica[j]
              tablica[j] = tablica[j+1]
              tablica[j+1] = bufor
            }
          }
      }

    }
  }
  return tablica
}

module.exports = Sortowanie
