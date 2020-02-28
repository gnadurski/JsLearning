let Sortowanie = require('./sortowanie.js')
//let array = [1, 3, 2, 22, 33, 11]

test("Powinno byc malejaco", () => {
  const array = [1, 2, 10, 5, 20, 14]
  expect(Sortowanie(array)).toStrictEqual([20, 14, 10, 5, 2, 1])
})
//bardzo ladnie
test("Powinno byc niezmienione", () => { 
  const array = [1, 2, 10, 5, 20, 14]
  Sortowanie(array),
  expect(array).toStrictEqual([1, 2, 10, 5, 20, 14])
})

test("Powinno byc rosnaco", () => {
  const array = [1, 2, 10, 5, 20, 14]
  expect(Sortowanie(array, 'rosnaco')).toStrictEqual([1,2,5,10,14,20])
})


test("Powinno umiec sortowac rozne wartosci", () => {
  // given
  const array = [
    {username: "Wojtek"},
    {username: "Grzesiu"},
    {username: "Krzysiu"}
  ]
  const isUserFirst = (user1, user2) => user1.username < user2.username


  //when
  const result = Sortowanie(array, "malejaco", isUserFirst)

  expect(result).toStrictEqual([
    {
      username:"Wojtek"
    },
    {
      username:"Krzysiu"
    },
    {
      username:"Grzesiu"
    }
  ])

})
