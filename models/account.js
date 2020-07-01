const mongoose = require('mongoose');

var AccountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    staffId: String
} , { collection: 'account' } );

var Account = mongoose.model('account', AccountSchema);

module.exports = Account;