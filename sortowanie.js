function Sortowanie(array, typ = 'malejaco', isFirst){  
  let tablica = []
  for (let i = 0; i < array.length; i++)
  tablica[i] = array[i]
  let bufor
  if (isFirst === undefined){
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
    return tablica
  } else {
    if (typ === 'rosnaco'){
      for (let i = 0; i< tablica.length-1; i++){
        for (let j = 0; j< tablica.length-1-i; j++){
          if (isFirst === false){
            bufor = tablica[j]
            tablica[j] = tablica[j+1]
            tablica[j+1] = bufor
          }

        }
    
      }
    } else {
        for (let i = 0; i< tablica.length-1; i++){
          for(let j = 0; j< tablica.length-1-i; j++){
            if (isFirst === true){
              bufor = tablica[j]
              tablica[j] = tablica[j+1]
              tablica[j+1] = bufor
            }
          }
      }

    }
  }
}

module.exports = Sortowanie
