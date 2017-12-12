// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Exercise 2 – Functions ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Convert existing JavaScript functions to TypeScript
// • Convert specifically-typed functions to more
//   flexible generic functions


export default () => {
  // ======== Exercise 2.1 ========
  // Goals:
  // • 

  function add(x, y) {
    return x + y;
  }

  const subtract = function(x, y) {
    return x - y;
  }

  // ======== Exercise 2.5 ========
  // For a given word, we are computing its Scrabble® score.

  // 'CABBAGE' is worth 14 points.
  // 'QUEENS' is worth 15 points.
  // 'ZOO' is worth 12 points.

  console.log(`CABBAGE is worth ${computeScore('cabbage')} points.`);
  console.log(`QUEENS is worth ${computeScore('queens')} points.`);
  console.log(`ZOO is worth ${computeScore('zoo')} points.`);

  function computeScore(word: string) {
    const letters = word.toUpperCase().split('');
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
  }

  function getPointsFor(letter: string) {
    const lettersAndPoints = [
      ['AEOIULNRST', 1],
      ['DG', 2],
      ['BCMP', 3],
      ['FHVWY', 4],
      ['K', 5],
      ['JX', 8],
      ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore: number, pointsTuple: [string, number]): number => {
      const [letters, score]: [string, number] = pointsTuple;
      if (letters.split('').find((ll) => ll === letter)) {
        return computedScore += score;
      }
      return computedScore;
    }, 0);
  }

}
