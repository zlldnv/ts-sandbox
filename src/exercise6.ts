// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise X – async stuff?
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • 

export default () => {

  function fetchWord(): Promise<string> {
    const words: string[] = [
      'frame',
      'protective',
      'remarkable',
      'itchy',
      'ruddy',
      'pale',
      'design',
      'guarded',
      'tiny',
      'wrap'
    ];

    return new Promise((resolve) => {
      const randomWord: string = words[Math.floor(Math.random() * words.length)];
      setTimeout(() => resolve(randomWord), 1000);
    });
  }

  async function logWords(): Promise<void> {
    console.log(await fetchWord().then((val: string) => val));
    console.log(await fetchWord().then((val: string) => val));
    console.log(await fetchWord().then((val: string) => val));
    console.log(await fetchWord().then((val: string) => val));
  }

  logWords();

}
