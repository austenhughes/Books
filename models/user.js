const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const Schema = mongoose.Schema;

// module.exports = (mongoose) => {
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

// Add password hashing with Bcrypt

  // userSchema.pre("save", async function (next) {
  //   const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  //   this.password = hash;
  //   next();
  // });

  const User = mongoose.model("User", userSchema);
  // return User;
// };

  // const User = mongoose.model("User",userSchema);

  module.exports = User;
