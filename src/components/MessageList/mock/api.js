import people from './people.json'

const indexedPeople = people.map((p, index) => {
  p.ownIndex = index
  return p
})

export const loadHistory = ({ startIndex, stopIndex }) =>
  new Promise(resolve => {
    const response = indexedPeople.slice(startIndex, stopIndex)
    console.log(`load ${response[0].ownIndex} – ${response[response.length - 1].ownIndex}`)
    setTimeout(() => resolve(response), 300)
  })
