const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  memberInfo: [
    {
      userId: { type: String, required: true },
      userEmail: { type: String, required: true },
      userName: { type: String, trim: true, required: "please enter user name" },
      pronouns: { type: String, required: true },
      name: { type: String, },
      location: { type: String, },
      moreInfo:  { type: String, },
    }
  ]
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
