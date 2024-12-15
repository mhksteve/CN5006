const mongoose = require ('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', function(err){
    console.log('Error occured during connection' + err)
});

db.once('connect', function() {
    console.log(`connected to ${MONGO_URI}`)
});

const personSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, required: true},
        salary: {type: Number, required: true}
});

const person_doc = mongoose.model('modelname', personSchema,'personCollection');

/**person_doc.countDocuments().exec()
.then(count=>{
    console.log("total documents count: ",count)
}).catch(err => {
    console.error(err)
})**/

/*person_doc.deleteMany({age: {$gte:39}})
    .exec()
    .then(docs=>{
        console.log("deleted documents are: ",docs);
    }).catch(err =>{
        console.error(err);
    })*/

person_doc.updateMany({gender: "Female"} , {salary: 555})
    .exec()
    .then(docs=> {
        console.log("updated")
        console.log(docs);

    }).catch(err=>{
        console.error(err);
    })






/*var givenage = 30
person_doc.find({gender:"Male", age:{$gte:givenage}})
    .sort({salary: 1})
    .select('name salary age')
    .limit(10)
    .exec()
    .then(docs => {
        console.log("showing male age greater than 30",givenage)
        docs.forEach(function(DOC) {
            console.log(DOC.age,DOC.name);
        })
    })
    .catch(err => {
        console.error(err);
    })


/**person_doc.find({})
    .sort({salary: 1})
    .select("name salary age")
    .limit(10)
    .exec()
    .then(docs => {
        console.log("showing multiple documents")
        docs.forEach((Doc)=> {
            console.log(Doc.age,Doc.name);
        })
    })
    .catch((err)=> {
        console.error(err);
    })



//const doc1 = new person_doc({name: 'Steve', age:23,gender:'Male',salary:50000});
/**manyperson = [
    {name: 'Simon',age:42,gender:"Male",salary:3456 },
    { name: 'Neesha',age:23,gender:"Female",salary:1000 },
    { name: 'Mary',age:27,gender:"Female",salary:5402 },
    { name: 'Mike',age:40,gender:"Male",salary:4519 }
    ]

person_doc.insertMany(manyperson).then(function(){
    console.log("Data inserted")
}).catch(function(error){
    console.log(error)
});

doc1.save()
.then((doc1) => {
    console.log('New article has been added into your database.',doc1);
})
.catch((err) => {
    console.error(err);
}); **/
