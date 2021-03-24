var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EmailSchema = new Schema({
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }
});

var Email = mongoose.model("Email", EmailSchema);

module.exports = Email;