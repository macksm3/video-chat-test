require('dotenv').config()
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

let memberSeed = [
  {
    memberInfo: [
      {
        userId: "1",
        userEmail: "Ann@examlpe.com",
        userName: "polyanna",
        pronouns: "she/her",
        name: "Ann",
        location: "",
        moreInfo: "Better every day"
      }
    ]
  },
  {
    memberInfo: [
      {
        userId: "2",
        userEmail: "Ann@examlpe.com",
        userName: "JustJoe",
        pronouns: "he/him",
        name: "Joe",
        location: "usa",
        moreInfo: ""
      }
    ]
  },
  {
    memberInfo: [
      {
        userId: "3",
        userEmail: "Ann@examlpe.com",
        userName: "firefox",
        pronouns: "they/their",
        name: "",
        location: "North East USA",
        moreInfo: "more info"
      }
    ]
  },
];


db.Member.deleteMany({})
  .then(() => db.Member.collection.insertMany(memberSeed))
  .then(data => {
    console.log(data.result.n + " member records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  