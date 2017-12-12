// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Exercise X – async ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • 

export default () => {
  // ======== Exercise X.1 ========
  // Goals:
  // • 

  function fetchWord(): Promise<string> {
    const words: string[] = ['frame', 'protective', 'remarkable', 'itchy', 'ruddy', 'pale', 'design', 'guarded', 'tiny', 'wrap'];

    return new Promise((resolve) => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setTimeout(() => resolve(randomWord), 1000);
    });
  }

  async function logWords() {
    console.log(await fetchWord().then((val) => val));
    console.log(await fetchWord().then((val) => val));
    console.log(await fetchWord().then((val) => val));
    console.log(await fetchWord().then((val) => val));
  }

  logWords();

}
