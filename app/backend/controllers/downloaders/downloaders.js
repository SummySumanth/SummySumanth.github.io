const fs = require('fs');
const path = require('path');

const resumeDownloader = (req,res, next) => {
    const src = fs.createReadStream(path.join(__dirname, '../../storage/pdf/sumanth_resume.pdf'));
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=sample.pdf',
        'Content-Transfer-Encoding': 'Binary'
    });

    src.pipe(res); 
};

module.exports = {
    resumeDownloader
}