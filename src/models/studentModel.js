var mongoose = require('mongoose');

var studentModel = mongoose.model('students',{
    firstname : String,
    rollno  :   Number,
    admno   : Number,
    college : String
})//creating objest for model('collection',{input type collection})


module.exports = {studentModel};