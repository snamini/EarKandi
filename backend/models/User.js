// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({
    user: {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            first: {
                type: String,
                required: true,
                trim: true
            },
            last: {
                type: String,
                required: true,
                trim: true
            }
          },
        birthday: {
            type: String,
            required: true,
            unique: true
        }
  // portfolio: {
  //
  // },
  // aboutme: {
  //
  // },
  // followers: [{ type : ObjectId, ref: 'User' }],
  // accessToken: { type: String } // Used for Remember Me
});

// Make a Note model with the NoteSchema
var User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;
