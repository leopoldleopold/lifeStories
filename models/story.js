var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var storySchema = new Schema({
    longstring: {
        type: String,
        validate: [
            function(input) {
                return input.length >= 1;
            },
            "Unfortunately, your story is too short."
        ]
    }
});

var Story = mongoose.model("Story", storySchema);

module.exports = Story;