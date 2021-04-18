const {readFile, writeFile, mkdir} = require('fs').promises;

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
  );

  /**
   * TODO:
   * At the moment we copy qr-code-styling in to the lib folder
   * because we're importing it directly through js.
   * We need to find a better way to do this.
   */
  await mkdir('./lib/qr-code-styling/lib', {recursive: true});
  await writeFile(
    'lib/qr-code-styling/lib/qr-code-styling.js',
    (await readFile('node_modules/qr-code-styling/lib/qr-code-styling.js')).toString()
  )
}

exec()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
