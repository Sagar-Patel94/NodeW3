const express = require('express');
const upload = require('express-fileupload');

const app = express();

app.use(upload());

app.get('/', (req, res) => { console.log(__dirname, "dirname");
    res.sendFile(__dirname + '/uploadFile1.html')
})

app.post('/', (req, res) => {
    if (req.files) {
        console.log(req.files, "req.files");

        var file = req.files.file;
        console.log(file, "file");
        
        var filename = file.name;
        console.log(filename, "filename");

        file.mv('./uploads/' + filename, function (err) {
            if (err) {
                res.send(err)
            } else {
                res.send("File uploaded")
            }
        })
    }
})
app.listen(5000);