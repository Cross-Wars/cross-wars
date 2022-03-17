interface boardData {
  answers: {
    across: string[]
    down: string[]
  }
  author: string

  clues: {
    across: string[]
    down: string[]
  }

  grid: string[]

  gridnums: number[]
  size: {
    cols: number
    rows: number
  }
}

let data: boardData = {
  answers: {
    across: [
      "POOH",
      "MWAH",
      "TAPED",
      "ACNE",
      "OHIO",
      "OHARA",
      "RUMPROAST",
      "LASED",
      "ALITO",
      "PLEAD",
      "TAB",
      "DAKOTA",
      "ELDORADO",
      "ERE",
      "IRA",
      "SOFABED",
      "ENACT",
      "CARS",
      "STILTWALKER",
      "MATH",
      "OPALS",
      "ISRAELI",
      "BYU",
      "OWE",
      "SKINGAME",
      "STONED",
      "CAN",
      "ROARS",
      "ZALES",
      "AWGEE",
      "FAIRYTALE",
      "SAULT",
      "ASTO",
      "ETAL",
      "TYPOS",
      "NEST",
      "REDS",
    ],
    down: [
      "PARADE",
      "OCULAR",
      "ONMIKE",
      "HEPTO",
      "MOO",
      "WHAP",
      "AISLE",
      "HOTELS",
      "TOLDOF",
      "AHA",
      "PASTABAR",
      "EREADER",
      "DADBODS",
      "ROTINI",
      "ADO",
      "ARAL",
      "RACES",
      "ACT",
      "ETHAN",
      "TWO",
      "STRINGUP",
      "APB",
      "LAYS",
      "KLUTZY",
      "MISCAST",
      "ASKAWAY",
      "EGRETS",
      "LAO",
      "IMAFAN",
      "ONLATE",
      "WEELAD",
      "EDSELS",
      "ERASE",
      "OATER",
      "SITS",
      "ELO",
      "ROT",
    ],
  },
  author: "Bruce Haight",

  clues: {
    across: [
      '1. "Winnie-the-___"',
      '5. "Kisses, dahling!"',
      "9. Recorded on a cassette",
      "14. Something cleared up by Clearasil",
      "15. Akron's home",
      '16. To whom Butler said "Frankly, my dear, I don\'t give a damn"',
      "17. Slow-cooked beef entree",
      "19. Used a light beam on in surgery",
      "20. Samuel of the Supreme Court",
      '21. "How do you ___?" (court query)',
      "23. Indenting key",
      "24. Indian tribe that lent its name to two states",
      "26. Fabled city of wealth sought by conquistadors",
      "28. Before, to Byron",
      "29. 401(k) relative",
      "31. Versatile piece of furniture",
      "32. Put into law",
      "34. Detroit factory output",
      "35. One with a leg up in the circus business?",
      "39. Trig or calc",
      "41. October birthstones",
      "42. Tel Aviv native",
      "46. Sch. run by the Latter-day Saints",
      "47. Have bills",
      "50. Gambling scam",
      "52. High on pot",
      "54. Bottle alternative",
      "55. Laughs loudly",
      "57. Big name in retail jewelry",
      '58. "Shucks, you shouldn\'t have!"',
      "60. What the starts of 17-, 26-, 35- and 50-Across are",
      "62. ___ Ste. Marie, Mich.",
      "63. Regarding",
      "64. List-ending abbr.",
      "65. Writers' wrongs?",
      "66. Container for eggs",
      "67. Cincinnati team",
    ],
    down: [
      "1. Macy's Thanksgiving event",
      "2. Eye-related",
      "3. Like a live radio announcer",
      "4. Aware of, in cool-cat slang",
      "5. Cow sound",
      "6. Fly swatter sound",
      "7. Passage in a plane",
      "8. Red Monopoly purchases",
      "9. Described, as something in the past",
      '10. "So THAT\'s the story here!"',
      "11. Carb-heavy buffet area",
      "12. Kindle or Nook",
      "13. Some pudgy, middle-aged physiques, informally",
      "18. Corkscrew-shaped noodles",
      "22. Commotion",
      "25. Asia's ___ Sea",
      "27. Off to the ___ (starting strong)",
      "30. Coll. entrance exam",
      '32. Actor Hawke of "Boyhood"',
      "33. What it takes to tango",
      "35. Hang, Wild West-style",
      "36. Alert to squad cars, for short",
      "37. Big name in potato chips",
      "38. All thumbs",
      "39. Wrong for the role",
      '40. "Go ahead, shoot!"',
      "43. Long-necked waders",
      "44. Language in Vientiane",
      '45. "Your work is wonderful"',
      "47. Airing after midnight, say",
      "48. Little shaver, to a Scot",
      "49. '50s Ford flops",
      "51. Clear the blackboard",
      "53. Many a John Wayne film, informally",
      "56. Takes a chair",
      '59. "Evil Woman" rock grp.',
      '61. "Balderdash!"',
    ],
  },

  grid: [
    "P",
    "O",
    "O",
    "H",
    ".",
    "M",
    "W",
    "A",
    "H",
    ".",
    "T",
    "A",
    "P",
    "E",
    "D",
    "A",
    "C",
    "N",
    "E",
    ".",
    "O",
    "H",
    "I",
    "O",
    ".",
    "O",
    "H",
    "A",
    "R",
    "A",
    "R",
    "U",
    "M",
    "P",
    "R",
    "O",
    "A",
    "S",
    "T",
    ".",
    "L",
    "A",
    "S",
    "E",
    "D",
    "A",
    "L",
    "I",
    "T",
    "O",
    ".",
    "P",
    "L",
    "E",
    "A",
    "D",
    ".",
    "T",
    "A",
    "B",
    "D",
    "A",
    "K",
    "O",
    "T",
    "A",
    ".",
    "E",
    "L",
    "D",
    "O",
    "R",
    "A",
    "D",
    "O",
    "E",
    "R",
    "E",
    ".",
    "I",
    "R",
    "A",
    ".",
    "S",
    "O",
    "F",
    "A",
    "B",
    "E",
    "D",
    ".",
    ".",
    ".",
    "E",
    "N",
    "A",
    "C",
    "T",
    ".",
    ".",
    ".",
    "C",
    "A",
    "R",
    "S",
    ".",
    ".",
    "S",
    "T",
    "I",
    "L",
    "T",
    "W",
    "A",
    "L",
    "K",
    "E",
    "R",
    ".",
    ".",
    "M",
    "A",
    "T",
    "H",
    ".",
    ".",
    ".",
    "O",
    "P",
    "A",
    "L",
    "S",
    ".",
    ".",
    ".",
    "I",
    "S",
    "R",
    "A",
    "E",
    "L",
    "I",
    ".",
    "B",
    "Y",
    "U",
    ".",
    "O",
    "W",
    "E",
    "S",
    "K",
    "I",
    "N",
    "G",
    "A",
    "M",
    "E",
    ".",
    "S",
    "T",
    "O",
    "N",
    "E",
    "D",
    "C",
    "A",
    "N",
    ".",
    "R",
    "O",
    "A",
    "R",
    "S",
    ".",
    "Z",
    "A",
    "L",
    "E",
    "S",
    "A",
    "W",
    "G",
    "E",
    "E",
    ".",
    "F",
    "A",
    "I",
    "R",
    "Y",
    "T",
    "A",
    "L",
    "E",
    "S",
    "A",
    "U",
    "L",
    "T",
    ".",
    "A",
    "S",
    "T",
    "O",
    ".",
    "E",
    "T",
    "A",
    "L",
    "T",
    "Y",
    "P",
    "O",
    "S",
    ".",
    "N",
    "E",
    "S",
    "T",
    ".",
    "R",
    "E",
    "D",
    "S",
  ],
  gridnums: [
    1, 2, 3, 4, 0, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13, 14, 0, 0, 0, 0, 15, 0, 0,
    0, 0, 16, 0, 0, 0, 0, 17, 0, 0, 0, 18, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 20, 0,
    0, 0, 0, 0, 21, 0, 0, 22, 0, 0, 23, 0, 0, 24, 0, 0, 0, 0, 25, 0, 26, 0, 0,
    0, 27, 0, 0, 0, 28, 0, 0, 0, 29, 0, 30, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    32, 0, 0, 0, 33, 0, 0, 0, 34, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 36, 37, 38,
    0, 0, 0, 0, 39, 40, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 42, 0, 0, 0, 43,
    44, 45, 0, 46, 0, 0, 0, 47, 48, 49, 50, 0, 0, 0, 0, 0, 0, 51, 0, 52, 0, 53,
    0, 0, 0, 54, 0, 0, 0, 55, 0, 0, 0, 56, 0, 57, 0, 0, 0, 0, 58, 0, 0, 59, 0,
    0, 60, 0, 0, 61, 0, 0, 0, 0, 0, 62, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 64, 0, 0,
    0, 65, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 67, 0, 0, 0,
  ],

  size: {
    cols: 15,
    rows: 15,
  },
}

function make2DArray(grid: number[]) {
  const divisor = Math.sqrt(grid.length)
  let result = []
  for (let i = 0; i < divisor; i++) {
    result.push(grid.slice(i * divisor, (i + 1) * divisor))
  }
  return result
}

interface clue {
  row: number
  col: number
}
function getClueCoords(map: number[][]) {
  let result: { [key: string]: clue } = {}
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map.length; x++) {
      const clue = map[y][x]
      if (clue !== 0) {
        result[clue] = {
          row: y,
          col: x,
        }
      }
    }
  }
  return result
}
interface hints {
  clue: string
  answer: string
  row: number
  col: number
}

const dataFormatter = function (data: boardData) {
  const across: { [key: string]: hints } = {}
  const down: { [key: string]: hints } = {}
  let i = 0
  data.clues.across.forEach((clue) => {
    const split = clue.split(". ")
    const num = Number(split[0])
    across[num] = {
      clue: split.slice(1).join(". "),
      answer: data.answers.across[i],
      row: 0,
      col: 0,
    }
    i++
  })
  i = 0
  data.clues.down.forEach((clue) => {
    const split = clue.split(". ")
    const num = Number(split[0])
    down[num] = {
      clue: split.slice(1).join(". "),
      answer: data.answers.down[i],
      row: 0,
      col: 0,
    }
    i++
  })
  const map = make2DArray(data.gridnums)
  const coords = getClueCoords(map)
  const coordsList = [...Object.keys(coords)]

  coordsList.forEach((coord) => {
    if (across[coord]) {
      across[coord].row = coords[coord].row
      across[coord].col = coords[coord].col
    }
    if (down[coord]) {
      down[coord].row = coords[coord].row
      down[coord].col = coords[coord].col
    }
  })
  return {
    across,
    down,
  }
}

export let crossBoard1 = dataFormatter(data)
