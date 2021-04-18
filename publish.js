const {readFile, writeFile} = require('fs').promises;

const FILES = [
  'LICENSE',
  'README.md',
  'package.json'
];

async function exec() {
  const files = await Promise.all(FILES.map(file => readFile(file)));

  await Promise.all(
    files.map((file, index) =>
      writeFile('./lib/' + FILES[index], file.toString())
    )
  )
}

exec()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
