const fs = require('fs');
const path = require('path');

const downloader = (req, res) => {
  let src;
  switch (req.params.filename) {
    case 'resume':
      src = fs.createReadStream(path.join(__dirname, '../../storage/pdf/sumanth_react_dev_resume_2024.pdf'));
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=sumanth-react-dev-resume.pdf',
        'Content-Transfer-Encoding': 'Binary',
      });

      src.pipe(res);
      break;
    case 'vcard':
      src = fs.createReadStream(path.join(__dirname, '../../storage/vcard/vcard.vcf'));
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=vcard.vcf',
        'Content-Transfer-Encoding': 'Binary',
      });

      src.pipe(res);
      break;
    default:
      res.status(404).send('Requested file not found');
      break;
  }
};

module.exports = {
  downloader,
};
