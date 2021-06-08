const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
      {
        name: {
          type: String,
        },
        email: {
          type: String,
        },
        password: {
          type: String,
        },
      },
      {
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at",
        },
      }
      );

  const User = mongoose.model("User", userSchema);

  module.exports = User;
