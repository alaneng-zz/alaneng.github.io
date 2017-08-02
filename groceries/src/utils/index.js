import _ from "lodash"

const meat = "meat"
const vegetables = "vegetables"
const drink = "drink"
const fruit = "fruit"
const snacks = "snacks"
const condiments = "condiments"
const pastries = "pastries"
const frozen = "frozen"
const sauces = "sauces"
const broths = "broths"
const essentials = "essentials"
const cheeses = "cheeses"
const soups = "soups"

export const foodTypeOptions = [
  { key: meat, text: meat, value: meat },
  { key: vegetables, text: vegetables, value: vegetables },
  { key: drink, text: drink, value: drink },
  { key: fruit, text: fruit, value: fruit },
  { key: snacks, text: snacks, value: snacks },
  { key: condiments, text: condiments, value: condiments },
  { key: pastries, text: pastries, value: pastries },
  { key: frozen, text: frozen, value: frozen },
  { key: sauces, text: sauces, value: sauces },
  { key: broths, text: broths, value: broths },
  { key: essentials, text: essentials, value: essentials },
  { key: cheeses, text: cheeses, value: cheeses },
  { key: soups, text: soups, value: soups },
]

export const groceryClassnames = obj => {
  let finalStr = ""

  const classnames = _.keys(obj)

  classnames.forEach(name => {
    if (obj[name]) {
      finalStr = finalStr + name + " "
    }
  })

  return finalStr.slice(0, -1)
}
