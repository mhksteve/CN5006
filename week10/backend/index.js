const express = require ('express')
const connectDB = require('./db.js')
const bookModel = require('./bookSchema.js')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/allbooks',function(req,res){
    bookModel.find(function(err, allbook) {
    if (err) {
    console.log(err);
    } else{
        res.json(allbook);
    }});
});

app.get('/getbook/:id',function(req, res) {
    let id = req.params.id;
    bookModel.findById(id, function(err, book) {
    res.json(book);
    });
});

app.post('/addbooks', function(req,res)
    {
        console.log("Ref",req.body)
        let newbook = new bookModel(req.body);
        console.log("newbook->",newbook)
        newbook.save()
            .then(todo => {
            res.status(200).json({'books': 'book added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new book failed');
    });
})

app.post('/updatebook/:id',function(req, res) {
    let id = req.params.id;
    let updatedbook = new bookModel(req.body);
    console.log("update id",id,"newbook->",updatedbook)
   
    bookModel.findByIdAndUpdate(id,
    {
    booktitle:updatedbook.booktitle,
    pubYear:updatedbook.pubYear,
    author:updatedbook.author,
    Topic:updatedbook.topic,
    formate:updatedbook.format
    }
    ,
    function (err, docs) {
   if (err){
   console.log(err)
   }
   else{
    res.status(200).json({'books': 'book updatedsuccessfully'});
   }})
});


app.post('/deleteBook/:id',function(req, res) {
    let id = req.params.id;
   
    console.log("deleting")
    bookModel.findByIdAndDelete(id,function (err, docs) {
    if (err){
    console.log(err)
    }
    else{
    res.status(200).send('Book Deleted');
    }})
   });

app.listen(3000, () => {
    console.log('Running on 3000');
});