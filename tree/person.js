var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var TXN_PersonnelSchema = new Schema({
    "titleMasterName": String,
    "title": String,
    "PeopleId":String,
    "PeopleIdNumber":Number,
    "titleType": String,
    "sequenceNumber": Number,
    "employee_id": String,
    "personnel_id": String,
    "name": {
        "prefix": String,
        "first": String,
        "middle": String,
        "last": String,
        "suffix": String
    }
});

TXN_PersonnelSchema.plugin(autoIncrement.plugin, {
    model: 'TXN_Personnel',
    field: 'PeopleIdNumber',
    startAt: 800000,
    incrementBy: 1
});
//var per= mongoose.model('TXN_Personnel', TXN_PersonnelSchema);
module.exports =mongoose.model('TXN_Personnel', TXN_PersonnelSchema);