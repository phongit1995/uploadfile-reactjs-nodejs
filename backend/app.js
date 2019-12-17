require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let  multer = require( 'multer');
let  GoogleDriveStorage  = require( 'multer-google-drive');
let  drive  = require( './google/index');
let stogare = GoogleDriveStorage({
    drive:drive,
    parents:'1XSnU_Ux61wZZfep49smFR7WjN2E2UF-e',
    fileName: function (req, file, cb) {
        let filename = `test-${Date.now()}-${file.originalname}`;
        cb(null, filename);
        
    },
    fileFilter: function(req, file, callback) {
        var ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback( /*res.end('Only images are allowed')*/ null, false)
        }
        callback(null, true)
    }
})
let upload = multer({storage:stogare});
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend/index.html'));
})
app.post('/upload',upload.single('file'),(req,res)=>{
    console.log(req.file);
    res.json(req.file);
})
app.listen(process.env.PORT,function(){
    console.log('Chạy Thành Công Trên website port :' + process.env.PORT);
})