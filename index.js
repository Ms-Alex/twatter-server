const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

//error handler
app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.listen(PORT, function(){
    console.log(`Server is starting on port ${PORT}`);
})

