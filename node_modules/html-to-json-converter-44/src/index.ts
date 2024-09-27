import { isNode } from 'browser-or-node';
import htmlToJson from './htmlToJson';

if (isNode) {
  const fs = require('fs');
  if (process.argv[2]) {
    fs.readFile(
      process.argv[2],
      'utf8',
      (err: NodeJS.ErrnoException | null, file: string) => {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.stringify(htmlToJson(file), null, 2));
        }
      }
    );
  }
}

export { htmlToJson };
