

//required
const cors = require('cors') //lets you allow traffic/access to servers
const express = require('express')
const bodyParser = require('body-parser') //parses the body - when a request comes in with data in it it goes to find the data for us
const multer = require('multer');
var upload = multer({ dest: 'Images/' })
const app = express() //main module - nice wrapper for the built in http module
let shoes = []; //array where all the shoes for sale go


app.use('/Images', express.static('Images'))
app.use(cors()); //this tells the api to respond to anybody in the world
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); //for parsing application/x-www-form-urlencoded

//https://dzone.com/articles/upload-files-or-images-to-server-using-nodejs
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./Images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

app.get("/", function(req, res) {
    res.send(shoes) //get me all the shoes
});

app.post('/shoe/:id/message', function(req, res){
    console.log(req.body.text)
    console.log(req.body.username)
    let newMessage = {
        text: req.body.text, 
        username: req.body.username, 
        timestamp: new Date().getTime(),
    }
    shoes[req.params.id].messages.push( newMessage )
    res.send(shoes[req.params.id])
})


app.get("/shoe/:id", function(req, res) {
    res.send(shoes[req.params.id]) //get me all the shoes
});


var cpUpload = upload.fields([
    { name: 'imgUploader', maxCount: 1 }
])

app.post("/api/Upload", cpUpload, function(req, res) {
    console.log(req.body);
    console.log(req.files);
    var shoe = {}
    shoe.style = req.body.style;
    shoe.condition = req.body.condition;
    shoe.startingbid = req.body.startingbid;
    shoe.shoesize = req.body.shoesize;
    shoe.uploadedImage = '';
    if (req.files.imgUploader) {
        shoe.uploadedImage = req.files.imgUploader[0].path;
    }
    shoe.pickedImage = req.body.shoeImageSrc;
    shoe.messages = [];
    console.log(shoe)
    shoes.push(shoe);
    res.send(shoe)

})

console.log(shoes)

app.listen(4792, function(a) {
    console.log("Listening to port 4792");
});