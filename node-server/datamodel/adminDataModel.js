//This data model will make us connect to mongodb and also allows us to create an object relational mapping
// this way eventhough we are into nosql db but we'll be creating a definite space for our documents
// document - a json object that contains a key values

let mongoose = require("mongoose"),
//importing moongoose class to create connection, schema, collection and returning model

mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

//creates db with name mernstack8 or opens a connection if already present
mongoose.connect("mongodb://127.0.0.1/mernstack8");

let AdminUserDocSchema = new mongooseSchema({
    Name : {type:String, required: true},
    Role : String,
    Allow : Boolean,
    Session : String,
    Address : Object
},
{
    versionKey : false //do not put version to to true, as by default it is true
}
)

//this is going to be the collection name and will get plularised
let AdminModel = mongoose.model("AdminUser", AdminUserDocSchema); 

module.exports = AdminModel;