const rot13 = (phrase) => phrase.toLowerCase().split("").map((char) => !!char.match(/[a-z]/)?String.fromCharCode((char.charCodeAt(0) - "a".charCodeAt(0) + 13)%26 + "a".charCodeAt(0)):char).join("");

const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  // console.log('yo')
  const fileStream = fs.createReadStream('input.txt');
  // console.log(fileStream);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    // console.log(`Line from file: ${line}`);
    console.log(rot13(line));


  }
}

// console.log('teste');
processLineByLine();