// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema ({
    email: {
      type:String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true
    }
});


// Make a Note model with the NoteSchema
var User = mongoose.model("User", UserSchema);
module.exports = User;

