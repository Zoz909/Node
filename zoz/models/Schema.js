const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Costumers = new Schema({
    firstName : String ,
    lastName : String ,
    email : String ,
    phone : Number ,
    age : Number , 
    country : String ,
    gender : String 
}, {timestamps: true})

const Clients = mongoose.model("Costumer", Costumers)

module.exports =  Clients; 