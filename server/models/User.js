const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        // Define the name field with type String, required, and trimmed
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},

		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},
        token: {
			type: String,
		},
        image: {
			type: String,
			required: true,
		},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("user", userSchema);