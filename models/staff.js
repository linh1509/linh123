const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Phone:String,
    urlImg: String
} , { collection: 'staffs' } );

var Staff = mongoose.model('staffs', staffSchema);

module.exports = Staff;